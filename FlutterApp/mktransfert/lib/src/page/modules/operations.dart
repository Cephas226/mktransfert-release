import 'dart:convert';

import 'package:expandable/expandable.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:get/get.dart';
import 'package:mktransfert/core/presentation/widget/customClipper.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/modules/operations_controller.dart';

import '../AccueilBottomBar.dart';
final storage = FlutterSecureStorage();
Future<dynamic> futureTransaction;
class OperationListPage extends StatefulWidget { 
  @override
  _OperationListPageState createState() => _OperationListPageState();
}
class _OperationListPageState extends State<OperationListPage> {
  OperationController _controller = Get.put(OperationController());
  @override
  void initState() {
    super.initState();
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
                  GetBuilder<OperationController>(
              init: OperationController(),
              builder: (contex) {
                return 
                  Container(
                    child: Flexible(
                        child:
                        _controller.operationListInProgress.isNotEmpty? 
                        ListView.builder(
                                padding: EdgeInsets.all(8),
                                itemCount: _controller.operationListInProgress.length,
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
                                                              _controller.operationListInProgress[index]
                                                                          ['transac_num'] !=
                                                                      null
                                                                  ? _controller.operationListInProgress[
                                                                          index]
                                                                      [
                                                                      'transac_num']
                                                                  : '',
                                                              style: TextStyle(
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .bold)),
                                                          trailing: Text(
                                                            _controller.operationListInProgress[index]
                                                                        [
                                                                        'transac_montant_send'] !=
                                                                    null
                                                                ? _controller.operationListInProgress[
                                                                            index]
                                                                        [
                                                                        'transac_montant_send'] +
                                                                    ' ' +
                                                                    (_controller.operationListInProgress[index]['transac_devise_sender'] !=
                                                                            null
                                                                        ? _controller.operationListInProgress
                                                                            [index]['transac_devise_sender']
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
                                                    _controller.operationListEnded[index][
                                                                'receiver_first_name'] !=
                                                            null
                                                        ? _controller.operationListEnded[index][
                                                                'receiver_first_name'] +
                                                            ' ' +
                                                            _controller.operationListEnded[index]
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
                                                    _controller.operationListInProgress[index][
                                                                'transac_status'] !=
                                                            null
                                                        ? _controller.operationListInProgress[index]
                                                            ['transac_status']
                                                        : '',
                                                    style: TextStyle(
                                                        fontWeight:
                                                            FontWeight.bold,
                                                        color: Colors.orange)),
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
                                                  _controller.operationListInProgress[index][
                                                              'transac_date'] !=
                                                          null
                                                      ? _controller.operationListInProgress[index]
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
                                }):Center(child: Text("Aucune transaction en cours")),
                    ));
                
              })
                ],
              ),
              Row(
                children: [
                  GetBuilder<OperationController>(
              init: OperationController(),
              builder: (contex) {
                return 
                  Container(
                    child: Flexible(
                        child:
                        _controller.operationListEnded.isNotEmpty? 
                        ListView.builder(
                                padding: EdgeInsets.all(8),
                                itemCount: _controller.operationListEnded.length,
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
                                                              _controller.operationListEnded[index]
                                                                          ['transac_num'] !=
                                                                      null
                                                                  ? _controller.operationListEnded[
                                                                          index]
                                                                      [
                                                                      'transac_num']
                                                                  : '',
                                                              style: TextStyle(
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .bold)),
                                                          trailing: Text(
                                                            _controller.operationListEnded[index]
                                                                        [
                                                                        'transac_montant_send'] !=
                                                                    null
                                                                ? _controller.operationListEnded[
                                                                            index]
                                                                        [
                                                                        'transac_montant_send'] +
                                                                    ' ' +
                                                                    (_controller.operationListEnded[index]['transac_devise_sender'] !=
                                                                            null
                                                                        ? _controller.operationListEnded
                                                                            [index]['transac_devise_sender']
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
                                                    _controller.operationListEnded[index][
                                                                'receiver_first_name'] !=
                                                            null
                                                        ? _controller.operationListEnded[index][
                                                                'receiver_first_name'] +
                                                            ' ' +
                                                            _controller.operationListEnded[index]
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
                                                    _controller.operationListEnded[index][
                                                                'transac_status'] !=
                                                            null
                                                        ? _controller.operationListEnded[index]
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
                                                  _controller.operationListEnded[index][
                                                              'transac_date'] !=
                                                          null
                                                      ? _controller.operationListEnded[index]
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
                                }):Center(child: Text("Aucune transaction en cours")),
                    ));
                
              })
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
