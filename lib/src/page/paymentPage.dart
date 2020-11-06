import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'package:mktransfert/src/page/payement.dart';
import 'package:mktransfert/src/page/transaction.dart';
import 'package:mktransfert/src/services/payment-service.dart';

import 'package:progress_dialog/progress_dialog.dart';

import 'beneficiaireScreen.dart';
import 'loginPage.dart';
double _amount;
String _currency;
List transactionInfo = List();
String _transactionDate;
String _transactionTime;
String _receiver_Name;
String _receiver_Email;
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
  @override
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
                                          builder: (context) => PaymentsScreen()
                                      ),
                                      ModalRoute.withName("/transactionNew")
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
  }
}
class HomePageState extends State<PaymentPage> {
  displayTransactionInfo() async {
    var jwt = await storage.read(key: "transaction");
    transactionInfo=json.decode(jwt);
    transactionInfo.forEach((transaction) {
      _amount=transaction['transac_total'];
      _currency=transaction['devise_send'];
      _receiver_Name=transaction['receiver_name'];
      _receiver_Email=transaction['receiver_email'];
    });
    print(transactionInfo);
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

  payViaNewCard(BuildContext context) async {
    this.displayTransactionInfo();
    ProgressDialog dialog = new ProgressDialog(context);
    dialog.style(
        message: 'Please wait...'
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
                case 1:
                  icon = Icon(Icons.credit_card, color: theme.primaryColor);
                  text = Text('Payer via une carte existante');
                  break;
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
