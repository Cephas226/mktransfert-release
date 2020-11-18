import 'dart:convert';

import 'package:expandable/expandable.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:mktransfert/core/presentation/widget/customClipper.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/src/contant/constant.dart';
import 'AccueilBottomBar.dart';
import 'loginPage.dart';
import 'operations/beneficiaireOperations.dart';

List<Operations> operation = [];
var _dataTransaction = List();
var _dataTransactionDeliveryRefactored = List();
var _dataTransactionProgressRefactored = List();

Future<dynamic> futureTransaction;

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
    this.fetchMyTransaction();
    this.fetchMyTransactionDelivery();
  }

  Future<String> displayTransactionInfo() async {
    var alltransactionInfo = await storage.read(key: "alltransactionInfo");
    var alltransactionInfoTraited = json.decode(alltransactionInfo);
    alltransactionInfoTraited?.forEach((k, v) {
      _dataTransaction.add(v[0]);
    });
  }

  var resBody;
  Future<List<dynamic>> fetchMyTransaction() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var res = await http.get(
        Uri.encodeFull(
            'https://www.mktransfert.com/api/transactions/' + '$user_id'),
        headers: {
          "Accept": "application/json",
          'Authorization': 'Bearer $token',
        }).catchError((e) {
      print("Got error: ${e.error}");
    });
    json.decode(res.body);

    resBody = json.decode(res.body);

    resBody['data_transactions']?.forEach((k, v) {
      _dataTransaction.add(v[0]);
    });
    _dataTransaction = transactionList;
   var _dataTransactionProgress= _dataTransaction.where((element) => element['transac_status']=='encours');
    _dataTransactionProgress.forEach((element) {
      _dataTransactionProgressRefactored.add(element);
    });

    return _dataTransactionProgressRefactored;
  }


  var resMyBody;
  Future<List<dynamic>> fetchMyTransactionDelivery() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var res = await http.get(
        Uri.encodeFull(
            'https://www.mktransfert.com/api/transactions/' + '$user_id'),
        headers: {
          "Accept": "application/json",
          'Authorization': 'Bearer $token',
        }).catchError((e) {
      print("Got error: ${e.error}");
    });
    json.decode(res.body);

    resMyBody = json.decode(res.body);
    var _dataTransactionProgressDelivery= _dataTransaction.where((element) => element['transac_status']!='encours');
    _dataTransactionProgressDelivery.forEach((element) {
      _dataTransactionDeliveryRefactored.add(element);
    });
      return _dataTransactionDeliveryRefactored;
  }






  @override
  Widget build(BuildContext context) {
    fetchMyTransaction();
    return MaterialApp(
      home: DefaultTabController(
        length: 2,
        child: Scaffold(
          appBar: AppBar(
            leading: IconButton(
              icon: Icon(Icons.arrow_back),
              color: Colors.white,
              onPressed: () => {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AccueilBootomBarPage()),
                )
              },
            ),
            title: Text("Mes transactions"),
            backgroundColor: kPrimaryColor,
            elevation: 0,
            iconTheme: IconThemeData(
              color: Colors.white,
            ),
            bottom: TabBar(
              tabs: [
                Tab(text: "En cours", icon: Icon(Icons.access_time_sharp)),
                Tab(text: "Livrées", icon: Icon(Icons.recommend)),
              ],
            ),
          ),
          body: TabBarView(
            children: [
              Row(
                children: [
                  Container(
                    child: Flexible(
                      child: FutureBuilder<List<dynamic>>(
                        future: fetchMyTransaction(),
                        builder: (BuildContext context,
                            AsyncSnapshot<List<dynamic>> snapshot) {
                          if (snapshot.hasData) {
                            final List<dynamic> data = snapshot.data;
                            return ListView.builder(
                                padding: EdgeInsets.all(8),
                                itemCount: snapshot.data.length,
                                itemBuilder: (BuildContext context, int index) {
                                  return Container(
                                    child: Column(
                                      children: [
                                        Card(
                                          child: Column(
                                            children: <Widget>[
                                              Row(
                                                children: <Widget>[
                                                  Expanded(
                                                      child: SizedBox(
                                                          width: 300,
                                                          height: 50,
                                                          child: ListTile(
                                                              title: Text(
                                                                  snapshot.data[index]
                                                                  [
                                                                  'transac_num'] !=
                                                                      null
                                                                      ? snapshot.data[
                                                                  index]
                                                                  [
                                                                  'transac_num']
                                                                      : '',
                                                                  style: TextStyle(
                                                                      fontWeight:
                                                                      FontWeight
                                                                          .bold)),
                                                              trailing: Text(
                                                                snapshot.data[index]
                                                                [
                                                                'transac_montant_send'] !=
                                                                    null
                                                                    ? snapshot.data[
                                                                index][
                                                                'transac_montant_send']
                                                                    : '',
                                                              )))),
                                                  // more widgets
                                                ],
                                              ),
                                              Row(
                                                mainAxisAlignment:
                                                MainAxisAlignment.start,
                                                children: <Widget>[
                                                  Row(children: <Widget>[
                                                    const SizedBox(
                                                        width: 15.0, height: 30),
                                                    Text(
                                                      'Nom & Prenom(s):',
                                                    ),
                                                    Text(
                                                        snapshot.data[index][
                                                        'receiver_first_name'] !=
                                                            null
                                                            ? snapshot.data[index][
                                                        'receiver_first_name'] +
                                                            ' ' +
                                                            snapshot.data[index]
                                                            [
                                                            'receiver_last_name']
                                                            : '',
                                                        style: TextStyle(
                                                            fontWeight:
                                                            FontWeight.bold)),
                                                  ]),
                                                ],
                                              ),
                                              Row(
                                                mainAxisAlignment:
                                                MainAxisAlignment.start,
                                                children: <Widget>[
                                                  Row(children: <Widget>[
                                                    const SizedBox(
                                                        width: 15.0, height: 30),
                                                    Text('Status:'),
                                                    Text(
                                                        snapshot.data[index][
                                                        'transac_status'] !=
                                                            null
                                                            ? snapshot.data[index]
                                                        ['transac_status']
                                                            : '',
                                                        style: TextStyle(
                                                            fontWeight:
                                                            FontWeight.bold,
                                                            color: Colors.green)),
                                                  ]),
                                                ],
                                              ),
                                              Row(
                                                mainAxisAlignment:
                                                MainAxisAlignment.start,
                                                children: <Widget>[
                                                  Row(children: <Widget>[
                                                    const SizedBox(
                                                        width: 15.0, height: 30),
                                                    Text('Date:'),
                                                    Text(
                                                      snapshot.data[index][
                                                      'transac_date'] !=
                                                          null
                                                          ? snapshot.data[index]
                                                      ['transac_date']
                                                          : '',
                                                    ),
                                                  ]),
                                                ],
                                              ),
                                            ],
                                          ),
                                        )
                                      ],
                                    ),
                                  );
                                }
                                )
                            ;
                          } else {
                            return Center(
                              child: CircularProgressIndicator(),
                            );
                          }
                        },
                      ),
                    ),
                  ),
                ],
              ),
              Row(
                children: [
                  Container(
                    child: Flexible(
                      child: FutureBuilder<List<dynamic>>(
                        future: fetchMyTransactionDelivery(),
                        builder: (BuildContext context,
                            AsyncSnapshot<List<dynamic>> snapshot) {
                          if (snapshot.hasError) {
                            final List<dynamic> data = snapshot.data;
                            return ListView.builder(
                                padding: EdgeInsets.all(8),
                                itemCount: snapshot.data.length,
                                itemBuilder: (BuildContext context, int index) {
                                  return Container(
                                    child: Card(
                                      //  color: kPrimaryColor,
                                      child: Column(
                                        children: <Widget>[
                                          Row(
                                            children: <Widget>[
                                              Expanded(
                                                  child: SizedBox(
                                                      width: 300,
                                                      height: 50,
                                                      child: ListTile(
                                                          title: Text(
                                                              snapshot.data[index]
                                                                          [
                                                                          'transac_num'] !=
                                                                      null
                                                                  ? snapshot.data[
                                                                          index]
                                                                      [
                                                                      'transac_num']
                                                                  : '',
                                                              style: TextStyle(
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .bold)),
                                                          trailing: Text(
                                                            snapshot.data[index]
                                                                        [
                                                                        'transac_montant_send'] !=
                                                                    null
                                                                ? snapshot.data[
                                                                        index][
                                                                    'transac_montant_send']+' '+
                                                                (snapshot.data[
                                                            index][
                                                            'transac_devise_sender']!=
                                                                    null?snapshot.data[
                                                                index][
                                                                'transac_devise_sender'].toString().toUpperCase():'cooly')
                                                                : '',
                                                          )))),
                                              // more widgets
                                            ],
                                          ),
                                          Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.start,
                                            children: <Widget>[
                                              Row(children: <Widget>[
                                                const SizedBox(
                                                    width: 15.0, height: 30),
                                                Text(
                                                  'Nom & Prenom(s):',
                                                ),
                                                Text(
                                                    snapshot.data[index][
                                                                'receiver_first_name'] !=
                                                            null
                                                        ? snapshot.data[index][
                                                                'receiver_first_name'] +
                                                            ' ' +
                                                            snapshot.data[index]
                                                                [
                                                                'receiver_last_name']
                                                        : '',
                                                    style: TextStyle(
                                                        fontWeight:
                                                            FontWeight.bold)),
                                              ]),

                                              // more widgets
                                            ],
                                          ),
                                          Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.start,
                                            children: <Widget>[
                                              Row(children: <Widget>[
                                                const SizedBox(
                                                    width: 15.0, height: 30),
                                                Text('Status:'),
                                                Text(
                                                    snapshot.data[index][
                                                                'transac_status'] !=
                                                            null
                                                        ? snapshot.data[index]
                                                            ['transac_status']
                                                        : '',
                                                    style: TextStyle(
                                                        fontWeight:
                                                            FontWeight.bold,
                                                        color: Colors.green)),
                                              ]),
                                            ],
                                          ),
                                          Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.start,
                                            children: <Widget>[
                                              Row(children: <Widget>[
                                                const SizedBox(
                                                    width: 15.0, height: 30),
                                                Text('Date:'),
                                                Text(
                                                  snapshot.data[index][
                                                              'transac_date'] !=
                                                          null
                                                      ? snapshot.data[index]
                                                          ['transac_date']
                                                      : '',
                                                ),
                                              ]),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ),
                                  );
                                });
                          } else {
                            return Center(
                                child:   Text('Aucune transaction n\'est livrée'),
                            );
                          }
                        },
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
    /* Scaffold(
      appBar: AppBar(
        title: Text("Mes transactions"),
        automaticallyImplyLeading: true,
      ),
      backgroundColor: Colors.grey.shade300,
      body:
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
                    _dataTransaction.add(v[0]);
                  });
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
                              expansionCallback: (int index, bool isExpanded) {
                                setState(() {
                                  _dataTransaction[index].isvalide = !isExpanded;
                                });
                              },
                              children: _dataTransaction
                                  .map<ExpansionPanel>((item) {
                                    print(item['transac_devise_sender']);
                                return ExpansionPanel(
                                  headerBuilder: (BuildContext context,
                                      bool isExpanded) {
                                    return Container(
                                      child: ListTile(
                                        title: Text(item['transac_num']!=null?item['transac_num']:'',
                                            style: TextStyle(
                                                fontWeight: FontWeight.bold)),
                                        subtitle:
                                        Text(item['receiver_first_name']!=null?item['receiver_first_name']+' '+item['receiver_last_name']:''),
                                        trailing: Text(
                                            item['transac_montant_send']!=null?item['transac_montant_send']:''),
                                      ),
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
                                            Text(item['transac_status']!=null?item['transac_status']:'',
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
                                      Row(
                                        mainAxisAlignment:
                                        MainAxisAlignment.start,
                                        children: <Widget>[
                                          Row(children: <Widget>[
                                            const SizedBox(width: 15.0),
                                            Text('Devise d\'envoie :',
                                                style: TextStyle(
                                                    fontWeight:
                                                    FontWeight.bold)),
                                            Text(item['transac_devise_sender'].toString().toUpperCase()??'null'),
                                          ]),
                                        ],
                                      ),
                                      const SizedBox(height: 10.0),
                                    ],
                                  ),
                                  isExpanded: item['isvalide'],
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
              })),



    );*/
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
