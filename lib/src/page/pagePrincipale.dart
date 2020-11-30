import 'dart:convert';

import 'package:direct_select/direct_select.dart';
import 'package:fancy_alert_dialog/fancy_alert_dialog.dart';
import 'package:fancy_dialog/fancy_dialog.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/beneficiaire.dart';
import 'package:mktransfert/src/page/loginPage.dart';
import 'package:mktransfert/src/page/navigation.dart';
import 'package:mktransfert/src/page/transaction.dart';

import 'AccueilBottomBar.dart';
import 'beneficiaireScreen.dart';

final storage = FlutterSecureStorage();
var _dataTransaction = List();
var transactionList = List();
class PagePrincipale extends StatefulWidget {
  static final String path = "lib/src/pages/login/auth3.dart";

  final storage = FlutterSecureStorage();
  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<PagePrincipale> {
  final fromTextControllerSender = TextEditingController();
  final fromTextController = TextEditingController();
  final fromTextControllergnf = TextEditingController();
  final fromTextControllerMontant = TextEditingController();
  final fromTextControllerReceive = TextEditingController();
  final fromTextControllerCommission = TextEditingController();
  final fromTextControllerTotal = TextEditingController();
  Future<String> get jwtOrEmpty async {
    var jwt = await storage.read(key: "jwt");
    if (jwt == null) return "";
    return jwt;
  }
  var resBody;
  Future<List<dynamic>> fetchMyTransaction() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var res = await http.get(
        Uri.encodeFull(
            'https://www.mktransfert.com/api/transactions/' +
                '$user_id'),
        headers: {
          "Accept": "application/json",
          'Authorization': 'Bearer $token',
        }) .catchError((e) {
      print("Got error: ${e.error}");
    });
    json.decode(res.body);

    resBody = json.decode(res.body);

    resBody['data_transactions']?.forEach((k, v) {
      _dataTransaction.add(v[0]);
    });
    storage.write(key: "alltransactionInfo", value: json.encode(_dataTransaction));

    /*_dataTransaction.forEach((element) {
      storage.write(key: "alltransactionInfo", value: json.encode([
        {
          "receiver_first_name": element['receiver_first_name'],
          "receiver_last_name": element['receiver_last_name'],
          "transac_status": element['transac_status'],
          "transac_num":element['transac_num'],
          "transac_date": element['transac_date'],
          "transac_montant_send": element['transac_montant_send'],
          "transac_devise_sender":  element['transac_devise_sender'],
          "isvalide": element['isvalide'],
        }
      ]));*/
    //});
    return transactionList;
  }

  double _conversion_eur;
  double _conversion_usd;
  String respresponseJwtLogin;
  List<String> currencies;
  String fromCurrency = "USD";
  String toCurrency = "GBP";
  String result;
  Color color2 = _colorFromHex("#b74093");
  final formKey = new GlobalKey<FormState>();
  int selectedIndex1 = 0;
  int _selectedCurrency;
  int _value = 1;

  String _value1;
  final List<String> currencyList = <String>[
    "USD",
    "EUR",
  ];
  Widget _buildDropButtonTo() {
    return Row(
      children: <Widget>[
        DropdownButtonHideUnderline(
          child: DropdownButton(
              value: _selectedItemGnf,
              items: _dropdownMenuItemsGnf,
              onChanged: (value) {
                setState(() {
                  _selectedItemGnf = value;
                });
              }),
        )
      ],
    );
  }

  Widget _buildDropButtonFrom() {
    return Row(
      children: <Widget>[
        DropdownButtonHideUnderline(
          child: DropdownButton(
              value: _selectedItem,
              items: _dropdownMenuItems,
              onChanged: (value) {
                setState(() {
                  _selectedItem = value;
                  //.. _user.pays=_selectedItem.name;
                });
              }),
        )
      ],
    );
  }

  Widget _buildDropButtonFromCurrency() {
    return Row(
      children: <Widget>[
        DropdownButtonHideUnderline(
          child: DropdownButton(
            underline: SizedBox(),
            items: Currency.getCurrency().map((Currency curr) {
              return DropdownMenuItem(
                value: curr.id,
                child: Row(
                  children: <Widget>[
                    Image.asset(curr.name, width: 20),
                    Text(curr.currencyCode,style: TextStyle(fontSize: 10)),
                  ],
                ),
              );
            }).toList(),
            onChanged: (val) {
              setState(() {
                _selectedCurrency = val;
                print(_selectedCurrency);
                if (_selectedCurrency == 2) {
                  if (fromTextControllerSender.text == null) {
                    _displaySnackMessage();
                  } else {
                    _doConversionDollard();
                  }
                }
                if (_selectedCurrency == 1) {
                  if (fromTextControllerSender.text == null) {
                    _displaySnackMessage();
                  } else {
                    _doConversionEur();
                  }
                }
              });
            },
            value: _selectedCurrency,
          ),
        )
      ],
    );
  }

  checkLoginStatus() async {
    var jwt = await storage.read(key: "jwt");
    print(jwt);
    Map<String, dynamic> responseJwtLogin = json.decode(jwt);
    print(responseJwtLogin['access_token']);
    respresponseJwtLogin = responseJwtLogin['access_token'];
    if (responseJwtLogin['access_token'] == null) {
      MaterialPageRoute(builder: (BuildContext context) => LoginPage());
      print('je suis null');
    } else {
      print('je suis jwt');
      return jwt;
    }
  }

  displayPaymentInfo() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var res = await http.get(
        Uri.encodeFull('https://www.mktransfert.com/api/payment/' + '$user_id'),
        headers: {
          "Accept": "application/json",
          'Authorization': 'Bearer $token',
        });
    if (res.statusCode == 200) {
      var resBody = json.decode(res.body);
      _conversion_eur = resBody['API_transac_data']['conversion_eur'];
      _conversion_usd = resBody['API_transac_data']['conversion_usd'];
      setState(() {
        _conversion_eur = resBody['API_transac_data']['conversion_eur'];
        _conversion_usd = resBody['API_transac_data']['conversion_usd'];
      });
    }
  }

  Future<double> _doConversionEur() async {
    // fromTextControllerSender.text=double.parse(valeurSaisie).toString();
    if (fromTextControllerSender.text != '') {
      fromTextControllergnf.text =
          (double.parse(fromTextControllerSender.text) * _conversion_eur)
              .toString();
      fromTextControllerReceive.text =
          double.parse(fromTextControllerSender.text).toString();
    }
  }

  Future<double> _doConversionDollard() async {
    print(_conversion_usd);
    if (fromTextControllerSender.text != '') {
      fromTextControllergnf.text =
          (double.parse(fromTextControllerSender.text) * _conversion_usd)
              .toString();
      fromTextControllerReceive.text =
          double.parse(fromTextControllerSender.text).toString();
      print(fromTextControllergnf.text);
    }
  }

  @override
  Future<void> initState() {
    super.initState();
    this.displayPaymentInfo();
    storage.delete(key: "beneficiaire");
    this.checkLoginStatus();
    _loadCurrencies();
    this.fetchMyTransaction();
    _dropdownMenuItems = buildDropDownMenuItems(_dropdownItems);
    _selectedItem = _dropdownMenuItems[0].value;
    _selectedCurrency = 1;
    _dropdownMenuItemsGnf = buildDropDownMenuItemsGnf(_dropdownItemsGnf);
    _selectedItemGnf = _dropdownMenuItemsGnf[0].value;
  }

  Future<String> _loadCurrencies() async {
    String uri = "https://api.exchangeratesapi.io/latest";
    var response = await http
        .get(Uri.encodeFull(uri), headers: {"Accept": "application/json"});
    var responseBody = json.decode(response.body);
    Map curMap = responseBody['rates'];
    currencies = curMap.keys.toList();
    currencies.toList();
    setState(() {});
    return "Success";
  }

  Future<String> _doConversion() async {
    String uri =
        "https://api.exchangeratesapi.io/latest?base=$fromCurrency&symbols=$toCurrency";
    var response = await http
        .get(Uri.encodeFull(uri), headers: {"Accept": "application/json"});
    var responseBody = json.decode(response.body);
    setState(() {
      result = (double.parse(fromTextController.text) *
              (responseBody["rates"][toCurrency]))
          .toStringAsFixed(2);
    });
    //print(result);
    return "Success";
  }

  _onFromChanged(String value) {
    setState(() {
      fromCurrency = value;
    });
  }

  _onToChanged(String value) {
    setState(() {
      toCurrency = value;
    });
  }

  _displaySnackMessage() {
    final snackBar = SnackBar(
      content: Text('Veuillez entrer un montant'),
      action: SnackBarAction(
        label: 'Ok',
        onPressed: () {
          Navigator.pop(context);
        },
      ),
    );

    // Find the Scaffold in the widget tree and use
    // it to show a SnackBar.
    Scaffold.of(context).showSnackBar(snackBar);
  }

  List<DropdownMenuItem<ListItem>> buildDropDownMenuItems(List listItems) {
    List<DropdownMenuItem<ListItem>> items = List();
    for (ListItem listItem in listItems) {
      items.add(
        DropdownMenuItem(
          child: Row(
            children: <Widget>[
              Text(listItem.name),
              Divider(),
              Image.asset(listItem.image, width: 50),
            ],
          ),
          value: listItem,
        ),
      );
    }
    return items;
  }

  List<ListItem> _dropdownItems = [
    ListItem("assets/Image/eu.png", "EUR"),
    ListItem("assets/Image/us.png", "USD"),
  ];
  List<DropdownMenuItem<ListItem>> _dropdownMenuItems;
  ListItem _selectedItem;

  //-----------

  List<ListItemReceiver> _dropdownItemsGnf = [
    ListItemReceiver("assets/Image/gnf.png", "GNF", 1),
  ];

  List<DropdownMenuItem<ListItemReceiver>> _dropdownMenuItemsGnf;
  ListItemReceiver _selectedItemGnf;

  List<DropdownMenuItem<ListItemReceiver>> buildDropDownMenuItemsGnf(
      List listItems) {
    List<DropdownMenuItem<ListItemReceiver>> items = List();
    for (ListItemReceiver listItem in listItems) {
      items.add(
        DropdownMenuItem(
          child: Row(
            children: <Widget>[
              Image.asset(listItem.imageReceiver, width: 20),
              Text(listItem.name,style: TextStyle(fontSize: 10)),
            ],
          ),
          value: listItem,
        ),
      );
    }
    return items;
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FutureBuilder(
        future: jwtOrEmpty,
        builder: (context, snapshot) {
          if (snapshot.data == "") {
            return Container(
              child: Row(
                children: <Widget>[
                  Text('Patientez s\'il vous plait'),
                  CircularProgressIndicator(),
                ],
              ),
            );
            /* if(jwt.length !=3) {
                return CircularProgressIndicator();
              }*/
            /* else{
                var payload = json.decode(ascii.decode(base64.decode(base64.normalize(jwt[1]))));
                if(DateTime.fromMillisecondsSinceEpoch(payload["exp"]*1000).isAfter(DateTime.now())) {
                  return PagePrincipale();
                } else {
                  return LoginPage();
                }
              }*/
          }
          displayPaymentInfo();
          return (Scaffold(
              resizeToAvoidBottomInset: false,
              body: respresponseJwtLogin == null
                  ? Center(child: CircularProgressIndicator())
                  : HeaderFooterwidget(
                      header: _buildDateHeader(DateTime.now()),
                      body: Padding(
                          padding: const EdgeInsets.only(left: 32,right: 32,bottom: 30,top: 1),
                          child: ListView(
                            children: <Widget>[
                              Column(
                                // mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                children: <Widget>[
                                  Card(
                                    elevation: 1,
                                    shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.all(
                                            Radius.circular(16.0))),
                                    child: SizedBox(
                                      width: 450.0,
                                      height: 120.0,
                                      child: Column(
                                        children: <Widget>[
                                          Container(
                                            decoration: BoxDecoration(
                                              borderRadius:
                                              BorderRadius.vertical(
                                                  top: new Radius.circular(
                                                      16.0)),
                                              color: kPrimaryColor
                                                  .withOpacity(0.95),
                                            ),
                                           // width: double.infinity,
                                            height: 40.0,
                                            child: Center(
                                              child: Text(_selectedCurrency == 1?'Montant à Envoyer en EUROS':
                                              'Montant à Envoyer en USD'
                                                  ,style: TextStyle(color:Colors.white),

                                              ),
                                            ),
                                          ),
                                          Row(
                                            children: <Widget>[
                                              Expanded(
                                                child: Center(
                                                  child: Row(
                                                    children: <Widget>[
                                                      Center(
                                                        child:  Container(
                                                          width: 200,
                                                          margin: EdgeInsets.only(left: 10),
                                                          child: TextFormField(
                                                            controller:
                                                            fromTextControllerSender,
                                                            decoration: InputDecoration(
                                                              border: InputBorder.none,
                                                              hintText:
                                                              "1000€",
                                                              //OutlineInputBorder(),
                                                            ),
                                                            keyboardType: TextInputType
                                                                .numberWithOptions(
                                                                decimal: true),
                                                            onChanged: (val) =>
                                                            {_doConversionEur()},
                                                          ),
                                                        ),
                                                      ),
                                                      Expanded(
                                                        child:
                                                        _buildDropButtonFromCurrency(),
                                                      )
                                                    ],
                                                  ),
                                                ),
                                              )
                                            ],
                                          )
                                          /*  Expanded(
                                            child: Padding(
                                              padding:
                                                  const EdgeInsets.symmetric(
                                                      horizontal: 8.0),
                                              child: Center(
                                                child: TextFormField(
                                                  controller:
                                                  fromTextControllergnf,
                                                  readOnly: true,
                                                  decoration: InputDecoration(
                                                    hintText: "1000€",
                                                    labelText:
                                                    'Montant à Recevoir en GNF',
                                                   // border: OutlineInputBorder(),
                                                  ),
                                                  keyboardType: TextInputType
                                                      .numberWithOptions(
                                                      decimal: true),
                                                ),
                                              ),
                                            ),
                                          )*/
                                        ],
                                      ),
                                    ),
                                  ),
                                  const SizedBox(
                                    height:5.0,
                                  ),
                                  /*Text(_selectedCurrency==2?
                                  "1 \$ = 10000.0 GNF":'',
                                      style: TextStyle(color: Colors.blue)),
                                  Text("1 € = 11900.0 GNF",
                                      style: TextStyle(color: Colors.blue)),*/
                                  _conversion_eur != null
                                      ? Text(
                                          _selectedCurrency == 1
                                              ? "1 € = $_conversion_eur GNF"
                                              : "1 \$ = $_conversion_usd GNF",
                                          style:
                                              TextStyle(color: kPrimaryColor))
                                      : Center(
                                          child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.center,
                                          children: <Widget>[
                                            Text('En cours'),
                                            CircularProgressIndicator()
                                          ],
                                        )),
                                  const SizedBox(height: 5.0),
                                  Card(
                                    elevation: 1.5,
                                    shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.all(
                                            Radius.circular(16.0))),
                                    child: SizedBox(
                                      width: 450.0,
                                      height: 120.0,
                                      child: Column(
                                        children: <Widget>[
                                          Container(
                                            decoration: BoxDecoration(
                                              borderRadius:
                                                  BorderRadius.vertical(
                                                      top: new Radius.circular(
                                                          16.0)),
                                              color: kPrimaryColor
                                                  .withOpacity(0.95),
                                            ),
                                           // width: double.infinity,
                                            height: 40.0,
                                            child: Center(
                                              child: Text('Montant Réçu en GNF',style: TextStyle(color:Colors.white)),
                                            ),
                                          ),
                                          Row(
                                            children: <Widget>[
                                              Expanded(
                                                child: Row(
                                                  children: <Widget>[
                                                    Container(
                                                      margin: EdgeInsets.only(left: 10),
                                                      width: 200,
                                                      child: TextFormField(
                                                        controller:
                                                        fromTextControllergnf,
                                                        readOnly: true,
                                                        decoration: InputDecoration(
                                                          border: InputBorder.none,
                                                          hintText: "1000€",
                                                          //border: OutlineInputBorder(),
                                                        ),
                                                        keyboardType: TextInputType
                                                            .numberWithOptions(
                                                            decimal: true),
                                                      ),
                                                    ),
                                                    Expanded(
                                                      child: Container(
                                                        width: 10,
                                                        child: _buildDropButtonTo(),
                                                      ),
                                                    )
                                                  ],
                                                ),
                                              )
                                            ],
                                          )
                                        /*  Expanded(
                                            child: Padding(
                                              padding:
                                                  const EdgeInsets.symmetric(
                                                      horizontal: 8.0),
                                              child: Center(
                                                child: TextFormField(
                                                  controller:
                                                  fromTextControllergnf,
                                                  readOnly: true,
                                                  decoration: InputDecoration(
                                                    hintText: "1000€",
                                                    labelText:
                                                    'Montant à Recevoir en GNF',
                                                   // border: OutlineInputBorder(),
                                                  ),
                                                  keyboardType: TextInputType
                                                      .numberWithOptions(
                                                      decimal: true),
                                                ),
                                              ),
                                            ),
                                          )*/
                                        ],
                                      ),
                                    ),
                                  ),
                                  /* Row(
                                    children: <Widget>[
                                      Expanded(
                                        child: Row(
                                          children: <Widget>[
                                            Container(
                                             // margin: EdgeInsets.only(left: 10),
                                              width: 220,
                                              child: TextFormField(
                                                controller:
                                                    fromTextControllergnf,
                                                readOnly: true,
                                                decoration: InputDecoration(
                                                  hintText: "1000€",
                                                  labelText:
                                                      'Montant à Recevoir en GNF',
                                                  border: OutlineInputBorder(),
                                                ),
                                                keyboardType: TextInputType
                                                    .numberWithOptions(
                                                        decimal: true),
                                              ),
                                            ),
                                            Expanded(
                                              child: Container(
                                                width: 30,
                                                child: _buildDropButtonTo(),
                                              ),
                                            )
                                          ],
                                        ),
                                      )
                                    ],
                                  ),*/
                                  const SizedBox(height: 5.0),
                                  // Row(
                                  //   children: <Widget>[
                                  //     Expanded(
                                  //       child: Row(
                                  //         children: <Widget>[
                                  //           Container(
                                  //             //  margin: EdgeInsets.only(left: 10),
                                  //             width: 220,
                                  //             child: TextFormField(
                                  //               readOnly: true,
                                  //               controller:
                                  //                   fromTextControllerReceive,
                                  //               decoration: InputDecoration(
                                  //                 labelText:
                                  //                     'Montant à Recevoir en USD',
                                  //                 hintText: "1000€",
                                  //                 border: OutlineInputBorder(),
                                  //               ),
                                  //               keyboardType: TextInputType
                                  //                   .numberWithOptions(
                                  //                       decimal: true),
                                  //             ),
                                  //           ),
                                  //           Expanded(
                                  //             child: Container(
                                  //               child:
                                  //                   _buildDropButtonFromCurrency(),
                                  //             ),
                                  //           )
                                  //         ],
                                  //       ),
                                  //     )
                                  //   ],
                                  // ),
                                  Card(
                                    elevation: 1.5,
                                    shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.all(
                                            Radius.circular(16.0))),
                                    child: SizedBox(
                                      width: 450.0,
                                      height: 120.0,
                                      child: Column(
                                        children: <Widget>[
                                          Container(
                                            decoration: BoxDecoration(
                                              borderRadius:
                                              BorderRadius.vertical(
                                                  top: new Radius.circular(
                                                      16.0)),
                                              color: kPrimaryColor
                                                  .withOpacity(0.95),
                                            ),
                                            // width: double.infinity,
                                            height: 40.0,
                                            child: Center(
                                              child: Text(_selectedCurrency == 1?'Montant Réçu en EUROS':
                                              'Montant à Réçu en USD',
                                                  style: TextStyle(color:Colors.white)),
                                            ),
                                          ),
                                          Row(
                                            children: <Widget>[
                                              Expanded(
                                                child: Center(
                                                  child: Row(
                                                    children: <Widget>[
                                                      Center(
                                                        child:  Container(
                                                          width: 200,
                                                          margin: EdgeInsets.only(left: 10),
                                                          child: TextFormField(
                                                            controller:
                                                            fromTextControllerSender,
                                                            decoration: InputDecoration(
                                                              border: InputBorder.none,
                                                              hintText:
                                                              "1000€",

                                                              //OutlineInputBorder(),
                                                            ),
                                                            keyboardType: TextInputType
                                                                .numberWithOptions(
                                                                decimal: true),
                                                            onChanged: (val) =>
                                                            {_doConversionEur()},
                                                          ),
                                                        ),
                                                      ),
                                                      Expanded(
                                                        child:
                                                        _buildDropButtonFromCurrency(),
                                                      )
                                                    ],
                                                  ),
                                                ),
                                              )
                                            ],
                                          )
                                          /*  Expanded(
                                            child: Padding(
                                              padding:
                                                  const EdgeInsets.symmetric(
                                                      horizontal: 8.0),
                                              child: Center(
                                                child: TextFormField(
                                                  controller:
                                                  fromTextControllergnf,
                                                  readOnly: true,
                                                  decoration: InputDecoration(
                                                    hintText: "1000€",
                                                    labelText:
                                                    'Montant à Recevoir en GNF',
                                                   // border: OutlineInputBorder(),
                                                  ),
                                                  keyboardType: TextInputType
                                                      .numberWithOptions(
                                                      decimal: true),
                                                ),
                                              ),
                                            ),
                                          )*/
                                        ],
                                      ),
                                    ),
                                  ),
                                  const SizedBox(height: 5),
                                  Text('En cliquant sur Continuer, j\'accepte les CGU',
                                      style: TextStyle(color:Colors.blue)
                                     ),
                                // ,
                                  /* SizedBox(
                      width: 360,
                      height: 50.0,
                      child: RaisedButton(
                        color: Colors.blue,
                        textColor: Colors.white,
                        elevation: 0,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(5.0),
                        ),
                        child: ListTile(
                          title: Text(("Effectuer un transfert"),style: TextStyle(color:Colors.white)),
                          trailing: Icon(
                            Icons.arrow_forward,
                            color: Colors.white,
                          ),
                        ),
                        onPressed: () {
                          if(fromTextController.text.isEmpty){
                            FancyAlertDialog.showFancyAlertDialog(
                              context,
                              'Alerte',
                              'Veillez remplir le montant',
                              Colors.blue,
                              icon: Icon(
                                Icons.warning,
                                color: Colors.white,
                              ),
                              labelPositiveButton: 'Ok',
                              onTapPositiveButton: () {
                                Navigator.pop(context);
                              },
                              labelNegativeButton: '',
                              onTapNegativeButton: () {
                                Navigator.pop(context);
                                print('tap negative button');
                              },
                            );
                          }
                          else{
                            FancyAlertDialog.showFancyAlertDialog(
                              context,
                              'Confirmation',
                              'Le montant a envoyé est de'+fromTextController.text
                                  +'.Le montant à recevoir est de' + (double.parse(result) + 12).toStringAsFixed(2)
                                  +'.Le montant de la commission est de' + 12.toString()
                                  +'.Le montant total est de ' + (double.parse(fromTextController.text) + 12).toStringAsFixed(2),
                              Colors.blue,
                              icon: Icon(
                                Icons.clear,
                                color: Colors.white,
                              ),
                              labelPositiveButton: 'OK',
                              onTapPositiveButton: () {
                                Navigator.pop(context);
                                // Navigator.pop(context);
                                Navigator.push(context, MaterialPageRoute(builder: (context) =>TransactionPage()),);
                              },
                              labelNegativeButton: 'Annulez',
                              onTapNegativeButton: () {
                                Navigator.pop(context);
                                print('tap negative button');
                              },
                            );
                          }
                          //  Navigator.push(context, MaterialPageRoute(builder: (context) =>BeneficiairePage()),);
                        },
                      ),
                    ),*/
                                ],
                              ),
                            ],
                          )),
                      footer: _buildBottomBar(),
                    )));
        },
      ),
    );
  }

  Container _buildBottomBar() {
    return Container(
     padding: const EdgeInsets.symmetric(
        vertical: 2.0,
        horizontal: 50.0,
      ),
    // width: double.infinity,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[

   Expanded(
              child: InkWell(
            onTap: () => {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => AccueilBootomBarPage(),
                ),
              ),
            storage.write(key: "montantSend", value: this.fromTextControllerSender.text)
            }, //
            child: Text(
              "Effectuer un transfert",
              style: TextStyle(
                color: Colors.white,
              ),
            ),
          )),
          IconButton(
            color: Colors.white70,
            icon: Icon(Icons.send),
            onPressed: () {
              storage.write(key: "montantSend", value: this.fromTextControllerSender.text);
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => AccueilBootomBarPage(),
                ),
              );
            },
          )
        ],
      ),
    );
  }

  Widget _buildDropDownButton(String currencyCategory) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
          color: Colors.blue, borderRadius: BorderRadius.circular(10)),
      child: DropdownButton(
        value: currencyCategory,
        icon: Icon(Icons.arrow_drop_down),
        iconSize: 42,
        underline: SizedBox(),
        items: currencies
            .toList()
            .map((String value) => DropdownMenuItem(
                  value: value,
                  child: Container(
                    child: Row(
                      children: <Widget>[
                        Text(value,
                            style: TextStyle(
                                color: Colors.black,
                                fontWeight: FontWeight.w500)),
                      ],
                    ),
                  ),
                ))
            .toList(),
        onChanged: (String value) {
          if (currencyCategory == fromCurrency) {
            _onFromChanged(value);
          } else {
            _onToChanged(value);
          }
        },
      ),
    );
  }
}

class ListItemReceiver {
  String imageReceiver;
  String name;
  int id;
  ListItemReceiver(this.imageReceiver, this.name, this.id);
}

class ListItemFrom {
  String imageFrom;
  String name;

  ListItemFrom(this.imageFrom, this.name);
}

Color _colorFromHex(String hexColor) {
  final hexCode = hexColor.replaceAll('#', '');
  return Color(int.parse('FF$hexCode', radix: 16));
}

class MySelectionItem extends StatelessWidget {
  final String title;
  final bool isForList;
  final int _value = 1;
  const MySelectionItem({Key key, this.title, this.isForList = true})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 60.0,
      child: isForList
          ? Padding(
              child: _buildItem(context),
              padding: EdgeInsets.all(10.0),
            )
          : Card(
              margin: EdgeInsets.symmetric(horizontal: 10.0),
              child: Stack(
                children: <Widget>[
                  _buildItem(context),
                  Align(
                    alignment: Alignment.centerRight,
                    child: Icon(Icons.arrow_drop_down),
                  )
                ],
              ),
            ),
    );
  }

  Widget _buildItem(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      alignment: Alignment.center,
      child: FittedBox(
          child: Text(
        title,
      )),
    );
  }
}

Widget _buildDateHeader(DateTime date) {
  final TextStyle boldStyle = TextStyle(
      color: Colors.white,
      fontWeight: FontWeight.bold,
      fontSize: 20,
      letterSpacing: 2.0);
  return Row(
    children: <Widget>[
      Padding(
        padding: const EdgeInsets.symmetric(vertical: 5.0),
        child: MaterialButton(
          minWidth: 0,
          elevation: 0,
          highlightElevation: 0,
          textColor: Colors.pink,
          padding: const EdgeInsets.symmetric(
            vertical: 16.0,
            horizontal: 8.0,
          ),
          color: Colors.white,
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(20.0)),
          onPressed: () {},
          /* child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(DateFormat.MMM().format(date).toUpperCase()),
                const SizedBox(height: 5.0),
                Text(
                  DateFormat.d().format(date),
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18.0),
                )
              ],
            ),*/
        ),
      ),
      //const SizedBox(width: 20.0),
      const SizedBox(height: 80.0),
      Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
/*            Text(
              DateFormat.EEEE().format(date).toUpperCase(),
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white,
                letterSpacing: 2.0,
              ),
            ),*/
         SizedBox (
           width: 200,
           child: Text(
             "Estimation du transfert",
             style: (boldStyle),
           ),
         )
        ],
      ),
    ],
  );
}

class ListItem {
  String image;
  String name;
  ListItem(this.image, this.name);
}

class HeaderFooterwidget extends StatelessWidget {
  final Widget header;
  final Widget footer;
  final Widget body;
  final Color headerColor;
  final Color footerColor;
  final double headerHeight;

  const HeaderFooterwidget(
      {Key key,
      this.header,
      this.footer,
      this.body,
      this.headerColor = kPrimaryColor,
      this.footerColor = Colors.pink,
      this.headerHeight})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return _buildBody();
  }

  Stack _buildBody() {
    return Stack(
      children: <Widget>[
        Positioned(
          top: 20,
          bottom: 120,
          right: 0,
          width: 30,
          child: DecoratedBox(
            decoration: BoxDecoration(color: headerColor),
          ),
        ),
        Positioned(
          left: 0,
          right: 0,
          bottom: 0,
          height: 120,
          child: DecoratedBox(
            decoration: BoxDecoration(color: footerColor),
          ),
        ),
        Positioned(
          bottom: 100,
          right: 0,
          width: 10,
          height: 60,
          child: DecoratedBox(
            decoration: BoxDecoration(
                color: headerColor,
                borderRadius:
                    BorderRadius.only(bottomLeft: Radius.circular(20.0))),
          ),
        ),
        Column(
          children: <Widget>[
            _buildHeader(),
            Expanded(
              child: Container(
                margin: const EdgeInsets.only(right: 10.0),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20.0),
                ),
                child: body,
              ),
            ),
            const SizedBox(height: 10.0),
            footer,
          ],
        ),
      ],
    );
  }

  Widget _buildHeader() {
    return Container(
      height: headerHeight,
      width: double.infinity,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.only(bottomLeft: Radius.circular(30.0)),
        color: headerColor,
      ),
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 10.0),
      child: header,
    );
  }
}

class Currency {
  final int id;
  final String name;
  final String currencyCode;

  Currency(this.id, this.name, this.currencyCode);
/*  ListItem("assets/Image/eu.png",  "EUR"),
  ListItem("assets/Image/us.png",  "USD"),*/
  static List<Currency> getCurrency() {
    return <Currency>[
      Currency(1, 'assets/Image/eu.png', 'EUR'),
      Currency(2, 'assets/Image/us.png', 'USD'),
    ];
  }
}
