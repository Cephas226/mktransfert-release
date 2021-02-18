import 'dart:convert';

import 'package:expandable/expandable.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:mktransfert/core/presentation/widget/customClipper.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/src/contant/constant.dart';
import 'AccueilBottomBar.dart';
import 'loginPage.dart';
import 'mesclasses/user.model.dart';
import 'operations/beneficiaireOperations.dart';
final storage = FlutterSecureStorage();
List<Operations> operation = [];



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

  @override
  void initState() {
    super.initState();
  //  fetchMyTransaction();
    fetchMyTransactionDelivery();
  }

/*  Future<String> displayTransactionInfo() async {
    var alltransactionInfo = await storage.read(key: "alltransactionInfo");
    var alltransactionInfoTraited = json.decode(alltransactionInfo);
    alltransactionInfoTraited?.forEach((k, v) {
      _dataTransaction.add(v[0]);
    });
  }*/

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
    List _dataTransaction = List();
    List _dataTransactionProgressRefactored = List();
    resBody['data_transactions']?.forEach((k, v) {
      _dataTransaction.add(v[0]);
    });

/*
        .where((element) => element['transac_status'] == 'encours');*/

    var _dataTransactionProgress = _dataTransaction;
   // _dataTransactionProgressRefactored=null;
    _dataTransaction.forEach((element) {
      if (element['transac_status'] == 'encours'){
        _dataTransactionProgressRefactored.add(element);
      }
    });
    print(_dataTransaction);
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
    List _dataTransaction = List();
    List _dataTransactionDeliveryRefactored = List();
    var _dataTransactionProgressDelivery = _dataTransaction
        .where((element) => element['transac_status'] != 'encours');
    _dataTransactionProgressDelivery.forEach((element) {
      _dataTransactionDeliveryRefactored.add(element);
    });
    return _dataTransactionDeliveryRefactored;
  }

  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      debugShowCheckedModeBanner: false,
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
                                                                      ? snapshot
                                                                              .data[index]
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
                                                                    ? snapshot.data[index]
                                                                            [
                                                                            'transac_montant_send'] +
                                                                        ' ' +
                                                                        (snapshot.data[index]['transac_devise_sender'] !=
                                                                                null
                                                                            ? snapshot.data[index]['transac_devise_sender'].toString().toUpperCase()
                                                                            : '')
                                                                    : '',
                                                              )
                                                              /*  Text(
                                                                snapshot.data[index]
                                                                            [
                                                                            'transac_montant_send'] !=
                                                                        null
                                                                    ? snapshot.data[index]
                                                                            [
                                                                            'transac_montant_send'] +
                                                                        ' ' +
                                                                        (snapshot.data[index]['transac_devise_sender'] !=
                                                                                null
                                                                            ?
                                                                        (snapshot.data[index]['transac_devise_sender'].toString()=='eur'?
                                                                            "Euros":
                                                                            ''
                                                                        )
                                                                            : '')
                                                                    : '',
                                                              )*/
                                                              ))),
                                                  // more widgets
                                                ],
                                              ),
                                              const Divider(
                                                color: Colors.blue,
                                                thickness: 1,
                                                indent: 0,
                                                endIndent: 20,
                                              ),
                                              Row(
                                                mainAxisAlignment:
                                                    MainAxisAlignment.start,
                                                children: <Widget>[
                                                  Row(children: <Widget>[
                                                    const SizedBox(
                                                        width: 15.0,
                                                        height: 30),
                                                    Icon(Icons
                                                        .account_circle_outlined),
                                                    const SizedBox(width: 5),
                                                    Text(
                                                      'Nom & Prénom(s):',
                                                      style: TextStyle(
                                                          fontWeight:
                                                              FontWeight.bold),
                                                    ),
                                                    SizedBox(
                                                      width: 150.0,
                                                      child: Text(
                                                        snapshot.data[index][
                                                                    'receiver_first_name'] !=
                                                                null
                                                            ? snapshot.data[
                                                                        index][
                                                                    'receiver_first_name'] +
                                                                ' ' +
                                                                snapshot.data[
                                                                        index][
                                                                    'receiver_last_name']
                                                            : '',
                                                        overflow: TextOverflow
                                                            .ellipsis,
                                                      ),
                                                    )
                                                  ]),
                                                ],
                                              ),
                                              Row(
                                                mainAxisAlignment:
                                                    MainAxisAlignment.start,
                                                children: <Widget>[
                                                  Row(children: <Widget>[
                                                    const SizedBox(
                                                        width: 15.0,
                                                        height: 30),
                                                    Icon(Icons.watch_later),
                                                    const SizedBox(width: 5),
                                                    Text(
                                                      'Statut:',
                                                      style: TextStyle(
                                                          fontWeight:
                                                              FontWeight.bold),
                                                    ),
                                                    const SizedBox(width: 5),
                                                    Text(
                                                        snapshot.data[index][
                                                                    'transac_status'] !=
                                                                null
                                                            ? snapshot
                                                                    .data[index]
                                                                [
                                                                'transac_status']
                                                            : '',
                                                        style: TextStyle(
                                                            color:
                                                                Colors.green)),
                                                  ]),
                                                ],
                                              ),
                                              Row(
                                                mainAxisAlignment:
                                                    MainAxisAlignment.start,
                                                children: <Widget>[
                                                  Row(children: <Widget>[
                                                    const SizedBox(
                                                        width: 15.0,
                                                        height: 30),
                                                    Icon(Icons.date_range),
                                                    const SizedBox(width: 5),
                                                    Text('Date:',
                                                        style: TextStyle(
                                                            fontWeight:
                                                                FontWeight
                                                                    .bold)),
                                                    Text(
                                                      snapshot.data[index][
                                                                  'transac_date'] !=
                                                              null
                                                          ? snapshot.data[index]
                                                              ['transac_date']
                                                          : '',
                                                    ),
                                                    const SizedBox(height: 5),
                                                  ]),
                                                ],
                                              ),
                                            ],
                                          ),
                                        )
                                      ],
                                    ),
                                  );
                                });
                          } else {
                            return Center(
                              child: Text('En cours'),
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
                          if (snapshot.hasData) {
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
                                                                            index]
                                                                        [
                                                                        'transac_montant_send'] +
                                                                    ' ' +
                                                                    (snapshot.data[index]['transac_devise_sender'] !=
                                                                            null
                                                                        ? snapshot
                                                                            .data[index]['transac_devise_sender']
                                                                            .toString()
                                                                            .toUpperCase()
                                                                        : '')
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
                                                  'Nom & Prénom(s):',
                                                ),
                                                SizedBox(
                                                  width: 150.0,
                                                  child: Text(
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
                                                    overflow:
                                                        TextOverflow.ellipsis,
                                                  ),
                                                )
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
                                                Text('Statut:'),
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
                              child: Text('Aucune transaction n\'est livrée'),
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
