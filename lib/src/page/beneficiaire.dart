import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:mktransfert/core/presentation/widget/rounded_bordered_container.dart';
import 'package:mktransfert/src/page/mesclasses/beneficiaireClasses.dart';

import 'package:mktransfert/src/page/transaction.dart';

import 'chooseBeneficiaire.dart';
import 'loginPage.dart';
import 'navigation.dart';
import 'operations/beneficiaireOperations.dart';
List transactionDetails = List();
Future<List<dynamic>> fetchMyBeneficiaire() async {
  var jwt = await storage.read(key: "jwt");
  Map<String, dynamic> responseJson = json.decode(jwt);
  String token = responseJson["access_token"];
  int user_id = responseJson["user_id"];
  var res = await http.get(Uri.encodeFull(apiUrl + '$user_id'), headers: {
    "Accept": "application/json",
    'Authorization': 'Bearer $token',
  });
  var countryList = List();
  var beneficiaireList = List();
  var resBody = json.decode(res.body);
  var beneficiaireInfo = await storage.read(key: "beneficiaire");

  if(beneficiaireInfo != null){
    List responseJsonBeneficiaire = json.decode(beneficiaireInfo);
    responseJsonBeneficiaire.forEach((element) {
      beneficiaireList.add(element);
    });
  }
  resBody['data_beneficiaire']?.forEach((k, v) {
    beneficiaireList.add(v[0]);
  });
  resBody['data_country']?.forEach((k, v) {
    countryList.add(v[0]);
  });
  data = beneficiaireList;
  return beneficiaireList;
}




class BeneficiairePage extends StatefulWidget {
  static final String path = "lib/src/pages/settings/settings1.dart";
  @override
  _BeneficiairePageState createState() => _BeneficiairePageState();
}

class _BeneficiairePageState extends State<BeneficiairePage> {
  Future<List<dynamic>> _beneficiaire;
  TextEditingController searchController = new TextEditingController();
  String filter;
  String _receiver_first_name(dynamic beneficiaire){
    return beneficiaire['nom'];
  }
  String _email(dynamic beneficiaire){
    return beneficiaire['email'];
  }
  _BeneficiairePageState();

  @override  initState() {
    fetchMyBeneficiaire();
    _beneficiaire =fetchMyBeneficiaire();
    searchController.addListener(() {
      setState(() {
        filter = searchController.text;
      });
    });
  }
  @override
  Widget build(BuildContext context) {
    return Theme(
      data: ThemeData(
        // brightness: _getBrightness(),
      ),
      child: Scaffold(
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.blue,
          title: Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                IconButton(
                  icon: Icon(Icons.add_circle),
                  color: Colors.white,
                  onPressed: () {
                  /*  Navigator.push(context, MaterialPageRoute(builder: (context) =>NavigationPage()),);*/
                  },
                ),
                Container(
                  child:GestureDetector(
                    onTap: () {  Navigator.push(context, MaterialPageRoute(
                        builder: (context) => ChooseBeneficiairePage()));},
                    child: Text("Ajouter",style: TextStyle(
                        fontWeight: FontWeight.bold, color: Colors.white),
                    ),

                  ),
                )
              ]
          ),
          automaticallyImplyLeading: false,
        ),
        body: Column(

          children: <Widget>[
            const SizedBox(height: 20.0),
            Material(
              elevation: 30.0,
              borderRadius: BorderRadius.all(Radius.circular(30)),
              child: TextField(
                controller:
                TextEditingController(text: 'Recherche un bénéficiaire...'),
                cursorColor: Theme.of(context).primaryColor,
                style: TextStyle(color: Colors.black, fontSize: 18),
                decoration: InputDecoration(
                    suffixIcon: Material(
                      elevation: 2.0,
                      borderRadius:
                      BorderRadius.all(Radius.circular(30)),
                      child: Icon(Icons.search),
                    ),
                    border: InputBorder.none,
                    contentPadding: EdgeInsets.symmetric(
                        horizontal: 25, vertical: 13)),
              ),
            ),
            Flexible(
              child: FutureBuilder<List<dynamic>>(
                future: fetchMyBeneficiaire(),
                builder: (BuildContext context,AsyncSnapshot<dynamic> snapshot) {
                  if(snapshot.hasData){
                    return ListView.builder(
                        padding: EdgeInsets.all(8),
                        itemCount: snapshot.data.length,
                        itemBuilder: (BuildContext context, int index){
                          return
                            Card(
                              child: Column(
                                children: <Widget>[
                                  ListTile(
                                      title:Text(snapshot.data[index]['receiver_first_name']),
                                      leading: new CircleAvatar(
                                        backgroundColor: Colors.blue,
                                        child: Text(
                                            '${snapshot.data[index]['receiver_first_name'].substring(0, 1)}')),
                                    onTap: () {
                                      print(snapshot.data[index]);
                                      storage.write(key: "beneficiaireInfo", value: json.encode([
                                        {
                                          "id":snapshot.data[index]['id'],
                                          "receiver_first_name":snapshot.data[index]['receiver_first_name'],
                                          "receiver_last_name":snapshot.data[index]['receiver_last_name'],
                                          "receiver_email":snapshot.data[index]['receiver_email'],
                                          "receiver_phone":snapshot.data[index]['receiver_phone'],
                                          "receiver_country":snapshot.data[index]['receiver_country'],
                                          "receiver_description":snapshot.data[index]['receiver_description']
                                        }
                                      ]));
                                      Navigator.push(
                                        context,
                                        MaterialPageRoute(
                                          builder: (context) => TransactionPage(),
                                        ),
                                      );
                                    },
                                  )
                                ],
                              ),
                            );
                        });
                  }else {
                    return Center(child: CircularProgressIndicator());
                  }
                },
              ),

            ),
          ],
        ),
      ),
    );
  }

}

void _onTapItem(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) =>TransactionPage()),);
}
