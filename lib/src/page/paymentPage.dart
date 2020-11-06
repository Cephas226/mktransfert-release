import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mktransfert/src/page/transaction.dart';
import 'package:mktransfert/src/services/payment-service.dart';

import 'package:progress_dialog/progress_dialog.dart';

import 'loginPage.dart';
double _amount;
String _currency;
List transactionInfo = List();
class PaymentPage extends StatefulWidget {
  PaymentPage({Key key}) : super(key: key);

  @override
  HomePageState createState() => HomePageState();
}

class HomePageState extends State<PaymentPage> {

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
    ProgressDialog dialog = new ProgressDialog(context);
    dialog.style(
        message: 'Please wait...'
    );
    await dialog.show();
    var response = await StripeService.payWithNewCard(
        amount: (_amount.toInt()).toString(),
        currency: _currency,
    );
    await dialog.hide();
    Scaffold.of(context).showSnackBar(
        SnackBar(
          content: Text(response.message),
          duration: new Duration(milliseconds: response.success == true ? 1200 : 3000),
        )
    );
  }
  displayTransactionInfo() async {
    var jwt = await storage.read(key: "transaction");
    transactionInfo=json.decode(jwt);
    print(transactionInfo);
    transactionInfo.forEach((transaction) {
      _amount=transaction['montant_total'];
      _currency=transaction['currency_sender'];
    });
    if(jwt == null) return   Navigator.of(context).pushAndRemoveUntil(MaterialPageRoute(builder: (BuildContext context) => TransactionPage()), (Route<dynamic> route) => false);
    else {
      return jwt;
    }
  }
  @override
  void initState() {
    super.initState();
    StripeService.init();
    displayTransactionInfo();
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
