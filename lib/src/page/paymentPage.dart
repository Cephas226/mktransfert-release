import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/payement.dart';
import 'package:mktransfert/src/page/succesPage.dart';
import 'package:mktransfert/src/page/transaction.dart';
import 'package:mktransfert/src/services/payment-service.dart';
import 'package:progress_dialog/progress_dialog.dart';
import 'package:ticket_pass_package/ticket_pass.dart';
import 'package:http/http.dart';
import 'AccueilBottomBar.dart';
import 'package:http/http.dart' as http;
import 'beneficiaireScreen.dart';
import 'loginPage.dart';
double _amount;
String _currency;
List transactionInfo = List();
String _transactionDate;
String _transactionTime;
String _receiver_Name;
String _receiver_Email;
String _receiver_last_name;
String _transac_status;
List transactionInfoBackend = List();
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
  List<String> sample = <String>[
    'Sample data 1',
    'Sample data 2',
    'Sample data 3',
    'Sample data 4',
    'Sample data 5',
    'Sample data 6',
    'Sample data 7',
    'Sample data 8'
  ];
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: kPrimaryColor,
          leading: IconButton(
            icon: Icon(Icons.arrow_back, color: Colors.white),
            onPressed: () => Navigator.of(context).pop(),
          ),
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
                  'Voir plus',
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
                                          'Heure',
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
                                        Text(
                                          'Nom & Prenom',
                                          style: TextStyle(
                                            color:
                                            Colors.black.withOpacity(0.5),
                                          ),
                                        ),
                                        Text(
                                          _receiver_Name,
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
                                        'Date',
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
                                        'MONTANT',
                                        style: TextStyle(
                                            color:
                                            Colors.black.withOpacity(0.5)),
                                      ),
                                      Text(
                                        _currency + '•' + _amount.toString(),
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
                )),
          ),
        ),
        floatingActionButton: FloatingActionButton.extended(
          onPressed: () {
            storage.delete(key: "transactionBackend");
            print('ok');
            Navigator.pushAndRemoveUntil(
                context,
                MaterialPageRoute(builder: (context) => AccueilBootomBarPage()),
                ModalRoute.withName("/accueilBottom"));
          },
          label: Text('Effectuer un autre transert'),
          icon: Icon(Icons.add),
          backgroundColor: kPrimaryColorSuccesButton,
        ),
      ),
    );
  }

}
class HomePageState extends State<PaymentPage> {
  displayTransactionInfo() async {
    var jwt = await storage.read(key: "transaction");
    transactionInfo=json.decode(jwt);

    transactionInfo.forEach((transaction) {
      print(transaction['receiver_last_name']);
      _amount=transaction['transac_total'];
      _currency=transaction['devise_send'];
      _receiver_Name=transaction['receiver_name'];
      _receiver_Email=transaction['receiver_email'];
      receiver_last_name = transaction['receiver_last_name'];
      _receiver_Email = transaction['receiver_email'];
    });
    var now = new DateTime.now();
    var formatter = new DateFormat('yyyy-MM-dd');
    _transactionDate = formatter.format(now);
    _transactionTime= DateFormat.Hm().format(now);
    if(jwt == null) return   Navigator.of(context).pushAndRemoveUntil(MaterialPageRoute(builder: (BuildContext context) => TransactionPage()), (Route<dynamic> route) => false);
    else {
      return jwt;
    }
  }
  displayTransactionInfoBackend() async {
    var transactionBackend = await storage.read(key: "transactionBackend");
    transactionInfoBackend=json.decode(transactionBackend);
    print(transactionInfoBackend);
    if(transactionBackend == null) return   Navigator.of(context).pushAndRemoveUntil(MaterialPageRoute(builder: (BuildContext context) => TransactionPage()), (Route<dynamic> route) => false);
    else {
      return transactionBackend;
    }
  }
  @override
  void initState() {
    super.initState();
    StripeService.init();
    displayTransactionInfo();
  }
  onItemPress(BuildContext context, int index) async {
    switch(index) {
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
   /* final Response response = await post(
      '$apiUrlRegister',
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(data),
    );*/
    final Response response= await post(
      'https://www.mktransfert.com/api/success/' + '$user_id',
      headers: {
        "Accept": "application/json",
        'Authorization': 'Bearer $token',
      },
      body: transactionInfoBackend,
    );
    await http
        .get(
        Uri.encodeFull(
            'https://www.mktransfert.com/api/transactions/' +
                '$user_id'),
        headers: {
          "Accept": "application/json",
          'Authorization': 'Bearer $token',
        })
        .then((value) => print(value.body))
        .catchError((onError) {
      print(onError);
    });
  }
  payViaNewCard(BuildContext context) async {
    this.displayTransactionInfo();
    ProgressDialog dialog = new ProgressDialog(context);
    dialog.style(
        message: 'Patientez un instant...'
    );
    await dialog.show();
    var response = await StripeService.payWithNewCard(
        amount: (_amount*100).truncate().toString(),
        currency: "$_currency",
    );
    await dialog.hide();
   /* Scaffold.of(context).showSnackBar(
        SnackBar(
          content: Text(response.message),
          duration: new Duration(milliseconds: response.success == true ? 1200 : 3000),
        )
    );*/
    Scaffold.of(context).showSnackBar(
        SnackBar(
          content: Text(response.message),
          duration: new Duration(milliseconds: 1200),
        )
    ).closed.then((_) {
      if(response.success){
        displayTransactionInfo();
        displayTransactionInfoBackend();
        postTransaction();
        _paymentSuccessDialog(context);
      }
      else{
        Navigator.pop(context);
      }
    });
  }


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

              switch(index) {
                case 0:
                  icon = Icon(Icons.add_circle, color: theme.primaryColor);
                  text = Text('Payer avec une nouvelle carte');
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
            itemCount: 2
        ),
      ),
    );;
  }
}
