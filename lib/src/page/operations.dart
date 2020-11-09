import 'dart:convert';

import 'package:expandable/expandable.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:mktransfert/core/presentation/widget/customClipper.dart';
import 'package:http/http.dart' as http;
import 'loginPage.dart';
import 'operations/beneficiaireOperations.dart';

List<Operations> operation = [];

class OperationListPage extends StatefulWidget {
  static final String path = "lib/src/pages/animations/anim5.dart";

  @override
  _OperationListPageState createState() => _OperationListPageState();
}

class _OperationListPageState extends State<OperationListPage> {
  List<String> items;
  bool isLoading = true;
  GlobalKey<AnimatedListState> _listKey = GlobalKey<AnimatedListState>();
  GlobalKey<FormState> _abcKey = GlobalKey<FormState>();
  var transactionList = List();
  @override
  void initState() {
    super.initState();
    // fetchMyTransaction();
  }

  var resBody;
  Future<List<dynamic>> fetchMyTransaction() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    print(token);
    var res = await http.get(
        Uri.encodeFull(
            'https://www.mktransfert.com/api/transactions/' +
                '$user_id'),
        headers: {
          "Accept": "application/json",
          'Authorization': 'Bearer $token',
        });
    json.decode(res.body);
    resBody = json.decode(res.body);
    print(resBody);
    return transactionList;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Mes transactions"),
        automaticallyImplyLeading: false,
      ),
      backgroundColor: Colors.grey.shade300,
      body: Stack(
      children: <Widget>[
      SingleChildScrollView(
      child:
      FutureBuilder<List<dynamic>>(
      future: fetchMyTransaction(),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (!snapshot.hasData) {
            return Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Center(child: CircularProgressIndicator())
              ],
            );
          }
          else{
            var _dataTransaction = List();
            resBody['data_transactions']?.forEach((k, v) {
              print(v);
              _dataTransaction.add(v[0]);
            });
            //_dataTransaction = transactionList;
            return  Row(
              children: <Widget>[
                Expanded(
                  child: Container(
                    child: BorderedContainer(
                      margin: const EdgeInsets.symmetric(
                        vertical: 4.0,
                        horizontal: 8.0,
                      ),
                      child: ExpansionPanelList(
                        children: _dataTransaction
                            .map<ExpansionPanel>((item) {
                          return ExpansionPanel(
                            isExpanded: false,
                            headerBuilder: (BuildContext context,
                                bool isExpanded) {
                              return ListTile(
                                title: Text(item['transac_num']!=null?item['transac_num']:'null',
                                    style: TextStyle(
                                        fontWeight: FontWeight.bold)),
                                subtitle:
                                Text(item['receiver_first_name']!=null?item['receiver_first_name']:'null'),
                                trailing: Text(
                                    item['transac_montant_send']!=null?item['transac_montant_send']:'null'),
                              );
                            },
                            body: Column(
                              children: <Widget>[
                                Row(
                                  mainAxisAlignment:
                                  MainAxisAlignment.start,
                                  children: <Widget>[
                                    Row(children: <Widget>[
                                      const SizedBox(width: 15.0),
                                      Text('Status:',
                                          style: TextStyle(
                                              fontWeight:
                                              FontWeight.bold)),
                                      Text(item['transac_status']!=null?item['transac_status']:'null',
                                          style: TextStyle(
                                              fontWeight:
                                              FontWeight.bold,
                                              color: Colors.green)),
                                    ]),
                                  ],
                                ),
                                const SizedBox(height: 10.0),
                                Row(
                                  mainAxisAlignment:
                                  MainAxisAlignment.start,
                                  children: <Widget>[
                                    Row(children: <Widget>[
                                      const SizedBox(width: 15.0),
                                      Text('Date de transaction :',
                                          style: TextStyle(
                                              fontWeight:
                                              FontWeight.bold)),
                                      Text(item['transac_date']??'null'),
                                    ]),
                                  ],
                                ),
                                const SizedBox(height: 10.0),
                                Row(
                                  mainAxisAlignment:
                                  MainAxisAlignment.start,
                                  children: <Widget>[
                                    Row(children: <Widget>[
                                      const SizedBox(width: 15.0),
                                      Text('Paiement par :',
                                          style: TextStyle(
                                              fontWeight:
                                              FontWeight.bold)),
                                      Text('Carte Bancaire'),
                                    ]),
                                  ],
                                ),
                                const SizedBox(height: 10.0),
                              ],
                            ),
                            //   isExpanded: item.isExpanded,
                          );
                        }).toList(),
                      ),
                    ),
                  ),
                )
              ],
            );
          }
        }))
    ],
      ),
    );
  }
}

class Operations {
  /* final String nom_prenom;
  final String montant;*/
  final String transac_num;
  /* final String telephone;*/
  bool isExpanded;
  Operations({this.transac_num, this.isExpanded = false});
/*Operations({this.transac_num,this.nom_prenom,this.montant,this.telephone,this.isExpanded=false});*/

}
