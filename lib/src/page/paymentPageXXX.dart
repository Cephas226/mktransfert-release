import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:minimize_app/minimize_app.dart';
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/payement-NoTouch.dart';

import 'package:mktransfert/src/page/succesPage.dart';
import 'package:mktransfert/src/page/transaction.dart';
import 'package:mktransfert/src/services/payment-service.dart';
import 'package:progress_dialog/progress_dialog.dart';
import 'package:ticket_pass_package/ticket_pass.dart';
import 'package:http/http.dart';
import 'AccueilBottomBar.dart';
import 'package:http/http.dart' as http;
import 'accueil.dart';
import 'beneficiaireScreen.dart';
import 'loginPage.dart';

double _amount;
String _currency;
String _currencySymbol;
List transactionInfo = List();
List transactionDetails = List();
List transactionInfoBackend = List();
String _transactionDate;
String _transactionTime;
String _receiver_Name;
String _receiver_last_name;
String _receiver_Email;

String _transac_num;
//Sender
int _user_id;

String _first_name = "";
String _last_name = "";
String _country = "";
String _phone = "";
String _receiver_company = "";
String _receiver_siteweb = "";
String _email = "";
//receiver
String _receiver_first_name = "";
String _receiver_phone = "";
String _receiver_description = "";
String _devise_receive = "";
String _devise_sender = "";
int _point_retrait;
int _receiver_country;
double _transac_total;
int _montant_send;
double _montant_receive;
double _transac_commission;
List<String> details = <String>[];

class PaymentPage extends StatefulWidget {
  PaymentPage({Key key}) : super(key: key);

  @override
  HomePageState createState() => HomePageState();
}

_paymentSuccessDialog(BuildContext context) {
  showDialog(
      context: context,
      builder: (BuildContext context) {
        return PaymentSuccessDialog();
      });
}

class PaymentSuccessDialog extends StatelessWidget {
/*  getSuccesInfo() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    http.Response response = await http.
    get(
        'https://www.mktransfert.com/api/success/'+'$user_id',
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer $token',
        }
    );
    var resBody = json.decode(response.body);
    resBody?.forEach((k, v) {
      print(v['transac_num']);
      _transac_num=v['transac_num'];
    });
    print(_transac_num);
   */ /* setState(() {
      _transac_num;
    });*/ /*
    //return json.decode(response.body);
  }*/
  final image = images[2];
  final TextStyle subtitle = TextStyle(fontSize: 12.0, color: Colors.grey);
  final TextStyle label = TextStyle(fontSize: 14.0, color: Colors.grey);
/*  @override
  Widget build(BuildContext context) {
    return Center(
      child: SizedBox(
        height: 550,
        child: Dialog(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              children: <Widget>[
                CircleAvatar(
                  radius: 50,
                  backgroundColor: Colors.green,
                  child: Icon(Icons.check_circle,size: 90,color: Colors.white,),
                ),
                SizedBox(height: 5.0),
                Text(
                  "Merci!",
                  style: TextStyle(color: Colors.green),
                ),
                Text(
                  "Votre transaction a réussi",
                  style: label,
                ),
                Divider(),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Text(
                      "DATE",
                      style: label,
                    ),
                    Text("HEURE", style: label)
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[Text(_transactionDate), Text(_transactionTime.toString())],
                ),
                SizedBox(height: 20.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text(
                          "A",
                          style: label,
                        ),
                        Text(_receiver_Name),
                        Text(
                          _receiver_Email,
                          style: subtitle,
                        ),
                      ],
                    ),
                    CircleAvatar(
                      backgroundColor: Colors.green,
                      //backgroundImage: AssetImage(image),
                    )
                  ],
                ),
                SizedBox(height: 20.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text(
                          "MONTANT",
                          style: label,
                        ),
                        Text("$_currency $_amount"),
                      ],
                    ),
                    Text(
                      "TERMINÉ",
                      style: label,
                    )
                  ],
                ),
                SizedBox(height: 20.0),
                Container(
                  padding: EdgeInsets.all(10.0),
                  decoration: BoxDecoration(
                      color: Colors.grey.shade300,
                      borderRadius: BorderRadius.circular(5.0)),
                  child: Row(
                    children: <Widget>[
                      CircleAvatar(
                        backgroundColor: Colors.green,
                        child: Icon(Icons.account_balance_wallet),
                      ),
                      SizedBox(width: 10.0),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Text("Carte de crédit / débit"),
                          Text(
                            "Master Card se terminant ***5",
                            style: subtitle,
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                Divider(),
                Container(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Expanded(
                        child: Container(
                          padding: EdgeInsets.all(10.0),
                          child:  Column(
                            children: <Widget>[
                              RaisedButton(
                                color: Colors.blue,
                                textColor: Colors.white,
                                elevation: 0,
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(10.0),
                                ),
                                child: Text("Effectué un autre"),
                                onPressed: () {
                                  // Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context) => TransactionPage()),);
                                  Navigator.pushAndRemoveUntil(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => AccueilBootomBarPage()
                                      ),
                                      ModalRoute.withName("/accueilBottom")
                                  );
                                },
                              )
                            ],
                          ),
                        ),
                      )
                    ],
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }*/

  Widget build(BuildContext context) {
    Future<bool> _onBackPressed() {
      return showDialog(
            context: context,
            builder: (context) => new AlertDialog(
              title: new Text('Êtes-vous sûr?'),
              content: new Text('Voulez-vous quitter une application'),
              actions: <Widget>[
                new GestureDetector(
                  onTap: () => Navigator.of(context).pop(false),
                  child: Text("Non"),
                ),
                SizedBox(height: 16),
                new GestureDetector(
                  onTap: () => {
                    Navigator.of(context).pop(false),
                    Navigator.push(context,  MaterialPageRoute(
                        builder: (context) => AccueilPage()),
                    ),
                    MinimizeApp.minimizeApp(),
                  },
                  child: Text("Oui"),
                ),
              ],
            ),
          ) ??
          false;
    }

    //getSuccesInfo();
    return new WillPopScope(
        onWillPop: _onBackPressed,
        child: MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              backgroundColor: kPrimaryColor,
              title: Text("Succès"),
              centerTitle: true,
            ),
            body: Container(
              child: Center(
                child: TicketPass(
                    alignment: Alignment.center,
                    animationDuration: Duration(seconds: 2),
                    expandedHeight: 600,
                    expandIcon: CircleAvatar(
                      maxRadius: 14,
                      child: Icon(
                        Icons.keyboard_arrow_down,
                        color: Colors.white,
                        size: 20,
                      ),
                    ),
                    expansionTitle: Text(
                      'Details de la transaction',
                      style: TextStyle(
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                    purchaserList: details,
                    separatorColor: Colors.black,
                    separatorHeight: 1.0,
                    color: Colors.white,
                    curve: Curves.easeOut,
                    titleColor: kPrimaryColor,
                    shrinkIcon: Align(
                      alignment: Alignment.centerRight,
                      child: CircleAvatar(
                        maxRadius: 14,
                        child: Icon(
                          Icons.keyboard_arrow_up,
                          color: Colors.white,
                          size: 20,
                        ),
                      ),
                    ),
                    ticketTitle: Text(
                      'Détails',
                      style: const TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w600,
                        fontSize: 18,
                      ),
                    ),
                    titleHeight: 50,
                    width: 350,
                    height: 220,
                    shadowColor: Colors.blue.withOpacity(0.5),
                    elevation: 8,
                    shouldExpand: true,
                    child: Padding(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 30.0, vertical: 5),
                        child: Container(
                          height: 140,
                          child: Padding(
                            padding: const EdgeInsets.symmetric(vertical: 2.0),
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: <Widget>[
                                Expanded(
                                  child: Container(
                                    child: Row(
                                      children: <Widget>[
                                        Expanded(
                                          child: Column(
                                            mainAxisAlignment:
                                                MainAxisAlignment.spaceAround,
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: <Widget>[
                                              Text(
                                                'HEURE',
                                                style: TextStyle(
                                                    color: Colors.black
                                                        .withOpacity(0.5)),
                                              ),
                                              Text(
                                                _transactionTime,
                                                style: TextStyle(
                                                    fontWeight:
                                                        FontWeight.w600),
                                              ),
                                            ],
                                          ),
                                        ),
                                        Expanded(
                                          child: Column(
                                            mainAxisAlignment:
                                                MainAxisAlignment.spaceAround,
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: <Widget>[
                                              _receiver_siteweb == ''
                                                  ? Text(
                                                      'NOM & PRENOM',
                                                      style: TextStyle(
                                                        color: Colors.black
                                                            .withOpacity(0.5),
                                                      ),
                                                    )
                                                  : Text(
                                                      'RAISON SOCIALE',
                                                      style: TextStyle(
                                                        color: Colors.black
                                                            .withOpacity(0.5),
                                                      ),
                                                    ),
                                              _receiver_siteweb == ''
                                                  ? Text(
                                                      _receiver_first_name +
                                                          ' ' +
                                                          _receiver_last_name,
                                                      overflow:
                                                          TextOverflow.ellipsis,
                                                      maxLines: 1,
                                                      style: TextStyle(
                                                        fontWeight:
                                                            FontWeight.w600,
                                                      ),
                                                    )
                                                  : Text(
                                                      _receiver_company,
                                                      overflow:
                                                          TextOverflow.ellipsis,
                                                      maxLines: 1,
                                                      style: TextStyle(
                                                        fontWeight:
                                                            FontWeight.w600,
                                                      ),
                                                    ),
                                            ],
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                                Expanded(
                                  child: Row(
                                    children: <Widget>[
                                      Expanded(
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceAround,
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: <Widget>[
                                            Text(
                                              'DATE',
                                              style: TextStyle(
                                                  color: Colors.black
                                                      .withOpacity(0.5)),
                                            ),
                                            Text(
                                              _transactionDate,
                                              style: TextStyle(
                                                  fontWeight: FontWeight.w600),
                                            ),
                                          ],
                                        ),
                                      ),
                                      Expanded(
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceAround,
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: <Widget>[
                                            Text(
                                              'MONTANT PAYE',
                                              style: TextStyle(
                                                  color: Colors.black
                                                      .withOpacity(0.5)),
                                            ),
                                            _currency == 'eur'
                                                ? Text(
                                                    _amount.toString() +
                                                        ' ' +
                                                        "EUROS",
                                                    style: TextStyle(
                                                        fontWeight:
                                                            FontWeight.w600),
                                                  )
                                                : Text(
                                                    _amount.toString() +
                                                        ' ' +
                                                        _currency.toUpperCase(),
                                                    style: TextStyle(
                                                        fontWeight:
                                                            FontWeight.w600),
                                                  )
                                          ],
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                Expanded(
                                  child: Row(
                                    children: <Widget>[
                                      Expanded(
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.start,
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: <Widget>[
                                            Text(
                                              'NUMERO TRANSACTION',
                                              style: TextStyle(
                                                  color: Colors.black
                                                      .withOpacity(0.5)),
                                            ),
                                            Text(
                                              _transac_num.toString(),
                                              /* Center(
                                            child: Column(
                                              mainAxisAlignment: MainAxisAlignment.center,
                                              children: <Widget>[
                                                Text('En cours'),
                                                CircularProgressIndicator()
                                              ],
                                            )
                                        ),*/
                                              style: TextStyle(
                                                  fontWeight: FontWeight.w600),
                                            ),
                                          ],
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ))),
                /*  TicketPass(
              alignment: Alignment.center,
              animationDuration: Duration(seconds: 2),
              expandedHeight: 600,
              expandIcon: CircleAvatar(
                maxRadius: 14,
                child: Icon(
                  Icons.keyboard_arrow_down,
                  color: Colors.white,
                  size: 20,
                ),
              ),
              expansionTitle: Text(
                'Details',
                style: TextStyle(
                  fontWeight: FontWeight.w600,
                ),
              ),
              purchaserList: sample,
              separatorColor: Colors.black,
              separatorHeight: 2.0,
              color: Colors.white,
              curve: Curves.easeOut,
              titleColor: kPrimaryColor,
              shrinkIcon: Align(
                alignment: Alignment.centerRight,
                child: CircleAvatar(
                  maxRadius: 14,
                  child: Icon(
                    Icons.keyboard_arrow_up,
                    color: Colors.white,
                    size: 20,
                  ),
                ),
              ),
              ticketTitle: Text(
                'Details',
                style: const TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.w600,
                  fontSize: 18,
                ),
              ),
              titleHeight: 50,
              width: 350,
              height: 220,
              shadowColor: Colors.blue.withOpacity(0.5),
              elevation: 8,
              shouldExpand: false,
              child: Padding(
                padding:
                const EdgeInsets.symmetric(horizontal: 30.0, vertical: 5),
                child: Container(
                  height: 140,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(vertical: 2.0),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: <Widget>[
                        Expanded(
                          child: Container(
                            child: Row(
                              children: <Widget>[
                                Expanded(
                                  child: Column(
                                    mainAxisAlignment:
                                    MainAxisAlignment.spaceAround,
                                    crossAxisAlignment:
                                    CrossAxisAlignment.start,
                                    children: <Widget>[
                                      Text(
                                        'HEURE',
                                        style: TextStyle(
                                            color: Colors.black
                                                .withOpacity(0.5)),
                                      ),
                                      Text(
                                        _transactionTime,
                                        style: TextStyle(
                                            fontWeight: FontWeight.w600),
                                      ),
                                    ],
                                  ),
                                ),
                                Expanded(
                                  child: Column(
                                    mainAxisAlignment:
                                    MainAxisAlignment.spaceAround,
                                    crossAxisAlignment:
                                    CrossAxisAlignment.start,
                                    children: <Widget>[
                                      _receiver_siteweb == null ?
                                      Text(
                                        'Nom & Prenom',
                                        style: TextStyle(
                                          color:
                                          Colors.black.withOpacity(0.5),
                                        ),
                                      ) :
                                      Text(
                                        'RAISON SOCIALE',
                                        style: TextStyle(
                                          color:
                                          Colors.black.withOpacity(0.5),
                                        ),
                                      ),
                                      _receiver_siteweb != null ?
                                      Text(
                                        _receiver_company,
                                        overflow: TextOverflow.ellipsis,
                                        maxLines: 1,
                                        style: TextStyle(
                                          fontWeight: FontWeight.w600,
                                        ),
                                      ) :
                                      Text(
                                        _receiver_Name + ' ' + _receiver_last_name,
                                        overflow: TextOverflow.ellipsis,
                                        maxLines: 1,
                                        style: TextStyle(
                                          fontWeight: FontWeight.w600,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        Expanded(
                          child: Row(
                            children: <Widget>[
                              Expanded(
                                child: Column(
                                  mainAxisAlignment:
                                  MainAxisAlignment.spaceAround,
                                  crossAxisAlignment:
                                  CrossAxisAlignment.start,
                                  children: <Widget>[
                                    Text(
                                      'DATE',
                                      style: TextStyle(
                                          color:
                                          Colors.black.withOpacity(0.5)),
                                    ),
                                    Text(
                                      _transactionDate,
                                      style: TextStyle(
                                          fontWeight: FontWeight.w600),
                                    ),
                                  ],
                                ),
                              ),
                              Expanded(
                                child: Column(
                                  mainAxisAlignment:
                                  MainAxisAlignment.spaceAround,
                                  crossAxisAlignment:
                                  CrossAxisAlignment.start,
                                  children: <Widget>[
                                    Text(
                                      'MONTANT PAYE',
                                      style: TextStyle(
                                          color:
                                          Colors.black.withOpacity(0.5)),
                                    ),
                                    _currency == 'eur' ? Text(
                                      _amount.toString() + ' ' + "EUROS",
                                      style: TextStyle(
                                          fontWeight: FontWeight.w600),
                                    ) :
                                    Text(
                                      _amount.toString() + ' ' + _currency.toUpperCase(),
                                      style: TextStyle(
                                          fontWeight: FontWeight.w600),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                        Expanded(
                          child: Row(
                            children: <Widget>[
                              Expanded(
                                child: Column(
                                  mainAxisAlignment:
                                  MainAxisAlignment.start,
                                  crossAxisAlignment:
                                  CrossAxisAlignment.start,
                                  children: <Widget>[

                                    Text(
                                      'NUMERO TRANSACTION',
                                      style: TextStyle(
                                          color:
                                          Colors.black.withOpacity(0.5)),
                                    ),

                                    Text(
                                      _transac_num.toString(),
                                      */ /* Center(
                                            child: Column(
                                              mainAxisAlignment: MainAxisAlignment.center,
                                              children: <Widget>[
                                                Text('En cours'),
                                                CircularProgressIndicator()
                                              ],
                                            )
                                        ),*/ /*
                                      style: TextStyle(
                                          fontWeight: FontWeight.w600),
                                    ),
                                  ],
                                ),
                              ),

                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              )),*/
              ),
            ),
            floatingActionButton: FloatingActionButton.extended(
              onPressed: () {
                storage.delete(key: "transactionBackend");
                storage.delete(key: "beneficiaireNew");

                Navigator.pushAndRemoveUntil(
                    context,
                    MaterialPageRoute(
                        builder: (context) => AccueilBootomBarPage()),
                    ModalRoute.withName("/accueilBottom"));
              },
              label: Text('Effectuer un autre transert'),
              icon: Icon(Icons.add),
              backgroundColor: kPrimaryColorSuccesButton,
            ),
          ),
        ));
  }
}

class HomePageState extends State<PaymentPage> {
  displayTransactionInfo() async {
    var jwt = await storage.read(key: "transaction");
    transactionInfo = json.decode(jwt);

    transactionInfo.forEach((transaction) {
      _amount = transaction['transac_total'];
      _currency = transaction['devise_send'];
      _receiver_Name = transaction['receiver_name'];
      _receiver_Email = transaction['receiver_email'];
      _receiver_last_name = transaction['receiver_last_name'];
      _receiver_Email = transaction['receiver_email'];
    });
    var now = new DateTime.now();
    var formatter = new DateFormat('yyyy-MM-dd');
    _transactionDate = formatter.format(now);
    _transactionTime = DateFormat.Hm().format(now);
    if (jwt == null)
      return Navigator.of(context).pushAndRemoveUntil(
          MaterialPageRoute(
              builder: (BuildContext context) => TransactionPage()),
          (Route<dynamic> route) => false);
    else {
      return jwt;
    }
  }

  displayTransactionInfoBackend() async {
    var transactionBackend = await storage.read(key: "transactionBackend");
    transactionInfoBackend = json.decode(transactionBackend);
    transactionInfoBackend.forEach((element) {
      details.add("Prenom:" + element["first_name"]);
      details.add(
        "Nom:" + element["last_name"],
      );
      details.add(
        "Email:" + element["email"],
      );
      details.add(
        "Commission:" +
            element["transac_commission"].toString() +
            ' ' +
            element["devise_sender"],
      );
      details.add(
        "Montant reçu:" +
            element["montant_receive"].toString() +
            ' ' +
            element["devise_receive"],
      );
      _user_id = element["user_id"];
      //sender
      _first_name = element["first_name"];
      _last_name = element["last_name"];
      _country = element["country"];
      _phone = element["phone"];
      _email = element["email"];

      _receiver_company = element["receiver_company"];
      _receiver_siteweb = element["receiver_siteweb"];
      //receiver
      _receiver_first_name = element["receiver_first_name"];
      _receiver_last_name = element["receiver_last_name"];
      _receiver_Email = element["receiver_Email"];
      _receiver_phone = element["receiver_phone"];
      _receiver_country = element["receiver_country"];
      _receiver_description = element["receiver_description"];
      //transaction
      _montant_send = element["montant_send"];
      _montant_receive = element["montant_receive"];
      _transac_commission = element["transac_commission"];
      _transac_total = element["transac_total"];
      _devise_receive = element["devise_receive"];
      _devise_sender = element["devise_sender"];
      _point_retrait = element["point_retrait"];
      _transac_num = element["transac_num"];
    });
    setState(() {
      _transac_num;
    });
    print(details);
  }

  @override
  void initState() {
    super.initState();
    StripeService.init();
    this.displayTransactionInfo();
    this.displayTransactionInfoBackend();
  }

  onItemPress(BuildContext context, int index) async {
    switch (index) {
      case 0:
        payViaNewCard(context);
        break;
      case 1:
        Navigator.pushNamed(context, '/existing-cards');
        break;
    }
  }

  Future<http.Response> postTransaction() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    return http.post(
      'https://www.mktransfert.com/api/success/' + '$user_id',
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer $token',
      },
      body: jsonEncode(<String, dynamic>{
        "user_id": user_id,
        "first_name": _first_name,
        "last_name": _last_name,
        "country": _country,
        "phone": _phone,
        "email": _email,
        "receiver_first_name": _receiver_first_name,
        "receiver_last_name": _receiver_last_name,
        "receiver_email": _receiver_Email,
        "receiver_phone": _receiver_phone,
        "receiver_country": _receiver_country,
        "receiver_description": _receiver_description,
        "receiver_company": _receiver_company,
        "receiver_siteweb": _receiver_siteweb,
        "montant_send": _montant_send,
        "montant_receive": _montant_receive,
        "transac_commission": _transac_commission,
        "transac_total": _transac_total,
        "devise_receive": _devise_receive,
        "devise_sender": _devise_sender,
        "point_retrait": _point_retrait,
      }),
    );
  }

  payViaNewCard(BuildContext context) async {
    this.displayTransactionInfo();
    ProgressDialog dialog = new ProgressDialog(context);
    dialog.style(message: 'Patientez un instant...');
    await dialog.show();
    var response = await StripeService.payWithNewCard(
      amount: (_amount * 100).truncate().toString(),
      currency: "$_currency",
    );
    await dialog.hide();
    Scaffold.of(context)
        .showSnackBar(SnackBar(
          content: Text(response.message),
          duration: new Duration(milliseconds: 1200),
        ))
        .closed
        .then((_) {
      if (response.success) {
        displayTransactionInfo();
        //displayTransactionInfoBackend();
        // getSuccesInfo();
        postTransaction();
        _paymentSuccessDialog(context);
        // PaymentSuccessDialog();
      } else {
        Navigator.pop(context);
      }
    });
  }

/*
  getSuccesInfo() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    http.Response response = await http.
    get(
        'https://www.mktransfert.com/api/success/'+'$user_id',
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer $token',
        }
    );
    var resBody = json.decode(response.body);
    resBody?.forEach((k, v) {
      print(v['transac_num']);
      _transac_num=v['transac_num'];
    });
    print(_transac_num);
    setState(() {
      _transac_num;
    });
    //return json.decode(response.body);
  }*/
  @override
  Widget build(BuildContext context) {
    ThemeData theme = Theme.of(context);
    return Scaffold(
      appBar: AppBar(
        title: Text('Payement'),
      ),
      body: Container(
        padding: EdgeInsets.all(20),
        child: ListView.separated(
            itemBuilder: (context, index) {
              Icon icon;
              Text text;

              switch (index) {
                case 0:
                  icon = Icon(Icons.add_circle, color: theme.primaryColor);
                  text = Text('Payer avec une carte');
                  break;
                /* case 1:
                  icon = Icon(Icons.credit_card, color: theme.primaryColor);
                  text = Text('Payer via une carte existante');
                  break;*/
              }

              return InkWell(
                onTap: () {
                  onItemPress(context, index);
                },
                child: ListTile(
                  title: text,
                  leading: icon,
                ),
              );
            },
            separatorBuilder: (context, index) => Divider(
                  color: theme.primaryColor,
                ),
            itemCount: 2),
      ),
    );
    ;
  }
}