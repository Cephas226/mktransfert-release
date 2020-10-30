import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mktransfert/src/page/beneficiaire.dart';
import 'package:mktransfert/src/page/navigation.dart';
import 'package:mktransfert/src/page/transaction.dart';
import 'package:http/http.dart' as http;
import 'chooseBeneficiaire.dart';
import 'loginPage.dart';
import 'mesclasses/beneficiaireClasses.dart';
import 'operations/beneficiaireOperations.dart';
List countrydata = List();
class RegisterBeneficiairePage extends StatefulWidget {
  @override
  RegisterBeneficiairePageState createState() => RegisterBeneficiairePageState();
}

class RegisterBeneficiairePageState  extends State <RegisterBeneficiairePage> {
  static final String path = "lib/src/pages/login/signup2.dart";
  Future<Beneficiaire> _futureBeneficiaire;
  String _mySelectionCountry;
  var saveReceiver_last_name = TextEditingController();
  var saveReceiver_first_name = TextEditingController();
  var saveReceiver_email = TextEditingController();
  var saveReceiver_phone = TextEditingController();
  var saveReceiver_country = TextEditingController();

  final _beneficiaire = Beneficiaire();
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  List<DropdownMenuItem<ListItem>> buildDropDownMenuItems(List listItems) {
    List<DropdownMenuItem<ListItem>> items = List();
    for (ListItem listItem in listItems) {
      items.add(
        DropdownMenuItem(
          child: Text(listItem.name),
          value: listItem,
        ),
      );
    }
    return items;
  }
  List<ListItem> _dropdownItems = [
    ListItem(1,  "Boffa"),
    ListItem(2,  "Boke"),
    ListItem(3, "Conakry – Kaloum"),
    ListItem(4, "Conakry – Madina"),
    ListItem(5,  "Conakry - Bambeto"),
    ListItem(6, "Conakry – Enco"),
    ListItem(7,  "Conakry - Matoto"),
    ListItem(8, "Conakry – Lambanyi"),
    ListItem(9, "Cosa - Rond-Point"),
    ListItem(10, "Conakry - cimenterie carrefour"),
    ListItem(11, "Conakry – Dabompa"),
    ListItem(12, "Coyah"),
    ListItem(13, "Dubreka Km"),
    ListItem(14, "Fria"),
    ListItem(15, "Kamsar"),
    ListItem(16, "Kankan"),
    ListItem(17, "Kindia"),
    ListItem(18, "Koundara"),
    ListItem(19,  "Labe"),
    ListItem(20, "Lelouma"),
    ListItem(21, "Mamou"),
    ListItem(22, "N’Zerekore"),
    ListItem(23, "Pita"),
    ListItem(24,"Sangaredji"),
    ListItem(25,  " Timbi Madina"),
    ListItem(26,  "Touba"),
  ];
  Future<String> displayCountriesInfo() async {
    var jwt = await storage.read(key: "jwt");
    var countryList = List();
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var res = await http.get(Uri.encodeFull(apiUrl + '$user_id'), headers: {
      "Accept": "application/json",
      'Authorization': 'Bearer $token',
    });

    var resBody = json.decode(res.body);
    resBody['data_country']?.forEach((k, v) {
      countryList.add(v[0]);
    });
    countrydata = countryList;
    print(countrydata);
    setState(() {
      countrydata = countryList;
    });
    return 'succès';
  }
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    this.displayCountriesInfo();
    _dropdownMenuItems = buildDropDownMenuItems(_dropdownItems);
    _selectedItem = _dropdownMenuItems[0].value;
  }
  List<DropdownMenuItem<ListItem>> _dropdownMenuItems;
  ListItem _selectedItem;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        iconTheme: IconThemeData(
          color: Colors.black,
        ),
      ),
      body: SingleChildScrollView(
        child: Builder(
            builder: (context) => Form(
              key: _formKey,
              child: Container(
                child: (_futureBeneficiaire == null)?
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    /* const SizedBox(height: 20.0),
                    Stack(
                      children: <Widget>[
                        Padding(
                          padding: const EdgeInsets.only(left: 32.0),
                          child: Text(
                            "Particulier",
                            style:
                            TextStyle(fontSize: 30.0, fontWeight: FontWeight.bold),
                          ),
                        ),
                      ],
                    ),*/
                    Padding(
                        padding: EdgeInsets.only(
                            left: 25.0,
                            right: 25.0,
                            top: 2.0),
                        child: new Row(
                          mainAxisSize: MainAxisSize.max,
                          children: <Widget>[
                            new Flexible(
                                child: Container(
                                  padding:
                                  const EdgeInsets.only(
                                      left: 10.0,
                                      right: 10.0),
                                  decoration: BoxDecoration(
                                      borderRadius:
                                      BorderRadius
                                          .circular(5.0),
                                      border: Border.all()),
                                  child:
                                  DropdownButtonHideUnderline(
                                    child: DropdownButton(
                                      hint: Text(
                                          "Choisir un pays"),
                                      items: countrydata
                                          ?.map((item) {
                                        return DropdownMenuItem(
                                          child: Text(item[
                                          'country_name']),
                                          value: item[
                                          'id']
                                              .toString(),
                                        );
                                      })?.toList() ??
                                          [],
                                      onChanged: (country) {
                                        setState(() {
                                          // showLoaderDialog(context);
                                          _mySelectionCountry =
                                              country;
                                        });
                                      },
                                      value:
                                      _mySelectionCountry,
                                    ),
                                  ),
                                ))
                          ],
                        )
                    ),
                    const SizedBox(height: 20.0),
                    Padding(
                        padding: EdgeInsets.only(
                            left: 25.0, right: 25.0, top: 25.0),
                        child: Row(
                          children: <Widget>[
                            Flexible(child: TextFormField(
                              onSaved: (val) =>
                                  setState(() =>
                                  saveReceiver_last_name
                                      .text = val),
                              controller:
                              TextEditingController()
                                ..text =
                                    saveReceiver_last_name
                                        .text,
                              decoration:
                              const InputDecoration(
                                hintText:
                                "Entrez un nom",
                                border:
                                OutlineInputBorder(),
                              ),
                            )),
                          ],
                        )
                    ),
                    const SizedBox(height: 20.0),
                    Padding(
                        padding: EdgeInsets.only(
                            left: 25.0, right: 25.0, top: 25.0),
                        child: Row(
                          children: <Widget>[
                            Flexible(child: TextFormField(
                              onSaved: (val) =>
                                  setState(() =>
                                  saveReceiver_first_name.text = val),
                              controller:
                              TextEditingController()..text = saveReceiver_first_name.text,
                              decoration:
                              const InputDecoration(
                                hintText:
                                "Entrez un prenom",
                                border:
                                OutlineInputBorder(),
                              ),
                            )),
                          ],
                        )
                    ),
                    const SizedBox(height: 20.0),
                    Padding(
                        padding: EdgeInsets.only(
                            left: 25.0, right: 25.0, top: 25.0),
                        child: Row(
                          children: <Widget>[
                            Flexible(child: TextFormField(
                              onSaved: (val) =>
                                  setState(() =>
                                  saveReceiver_email.text = val),
                              controller:
                              TextEditingController()..text = saveReceiver_email.text,
                              decoration:
                              const InputDecoration(
                                hintText:
                                "example@gmail.com",
                                border:
                                OutlineInputBorder(),
                              ),
                            )),
                          ],
                        )
                    ),
                    const SizedBox(height: 20.0),
                    Padding(
                        padding: EdgeInsets.only(
                            left: 25.0, right: 25.0, top: 25.0),
                        child: Row(
                          children: <Widget>[
                            Flexible(child: TextFormField(
                              onSaved: (val) =>
                                  setState(() =>
                                  saveReceiver_phone.text = val),
                              controller:
                              TextEditingController()..text = saveReceiver_phone.text,
                              decoration:
                              const InputDecoration(
                                hintText:
                                "Entre un telephone",
                                border:
                                OutlineInputBorder(),
                              ),
                            )),
                          ],
                        )
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 20),
                      child: Text.rich(
                        TextSpan(children: [
                          TextSpan(
                              text: "En cliquant sur Continuer, vous acceptez ce qui suit"),
                          TextSpan(
                              text: " Termes and Conditions ",
                              style: TextStyle(
                                  fontWeight: FontWeight.bold, color: Colors.blue)),
                          TextSpan(text: "sans réserves."),
                        ]),
                      ),
                    ),
                    const SizedBox(height: 20.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        RaisedButton(
                          elevation: 0,
                          padding: const EdgeInsets.only(left: 170,right: 170),
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(10.0)),
                          child: Text("Continuer"),
                          color: Colors.blue,
                          textColor: Colors.white,
                          onPressed: () {
                            final form = _formKey.currentState;
                            if (form.validate()) {
                              form.save();
                              storage.write(key: "beneficiaire", value: json.encode([
                                {
                                  "country_id":_mySelectionCountry,
                                  "receiver_first_name":saveReceiver_first_name.text,
                                  "receiver_last_name":saveReceiver_last_name.text,
                                  "receiver_phone":saveReceiver_phone.text,
                                  "receiver_email":saveReceiver_phone.text,
                                }
                              ]));
                              _showDialog(context);
                              {Navigator.push(context, MaterialPageRoute(builder: (context) => NavigationPage()));};
                            }
                          },
                          /* onPressed: () {Navigator.push(context, MaterialPageRoute(builder: (context) => NavigationPage()),);},*/
                        ),
                      ],
                    )
                  ],
                ):
                FutureBuilder<Beneficiaire>(
                  future: _futureBeneficiaire,
                  builder: (context, snapshot) {
                    if (snapshot.hasData) {
                      return Text(snapshot.data.nom);
                    }
                    else if (snapshot.hasError) {
                      return Text("${snapshot.error}");
                    }
                    return CircularProgressIndicator();
                  },
                ),
              ),
            )
        ),
      ),
    );
  }
}
_showDialog(BuildContext context) {
  Scaffold.of(context)
      .showSnackBar(SnackBar(content: Text('Submitting form')));
}
class ListItem {
  int value;
  String name;
  ListItem(this.value, this.name);
}
