import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:flutter_credit_card/credit_card_widget.dart';
import 'package:intl/intl.dart';
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/navigation.dart';
import 'package:mktransfert/src/page/succesPage.dart';
import 'package:mktransfert/src/page/transaction.dart';
import 'package:mktransfert/src/services/payment-service.dart';
//import 'package:stripe_payment/stripe_payment.dart';
import 'package:progress_dialog/progress_dialog.dart';
import 'package:ticket_pass_package/ticket_pass.dart';

import 'AccueilBottomBar.dart';
import 'beneficiaireScreen.dart';
import 'loginPage.dart';

double _amount;
String _currency;
String _transactionDate;
String _transactionTime;
String _receiver_Name;
String receiver_last_name;
String _receiver_Email;
String _status;
List transactionInfo = List();
List transactionInfoBackend = List();

class ExistingCardsPage extends StatefulWidget {
  ExistingCardsPage({Key key}) : super(key: key);

  @override
  ExistingCardsPageState createState() => ExistingCardsPageState();
}

class ExistingCardsPageState extends State<ExistingCardsPage> {
  List cards = [
    {
      'cardNumber': '4242424242424242',
      'expiryDate': '04/24',
      'cardHolderName': 'Cephas ZOUBGA',
      'cvvCode': '424',
      'showBackView': false,
    },
    {
      'cardNumber': '5555555566554444',
      'expiryDate': '04/23',
      'cardHolderName': 'Tracer',
      'cvvCode': '123',
      'showBackView': false,
    }
  ];
  displayTransactionInfo() async {
    var jwt = await storage.read(key: "transaction");
    transactionInfo = json.decode(jwt);
    transactionInfo.forEach((transaction) {
      _amount = transaction['transac_total'];
      _currency = transaction['devise_send'];
      _receiver_Name = transaction['receiver_name'];
      receiver_last_name = transaction['receiver_last_name'];
      _receiver_Email = transaction['receiver_email'];
      _status = transaction['status'];
    });
    print(_amount.truncate());
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
    print(transactionInfoBackend);
    if (transactionBackend == null)
      return Navigator.of(context).pushAndRemoveUntil(
          MaterialPageRoute(
              builder: (BuildContext context) => TransactionPage()),
          (Route<dynamic> route) => false);
    else {
      return transactionBackend;
    }
  }

  payViaExistingCard(BuildContext context, card) async {
    /*this.displayTransactionInfo();
    ProgressDialog dialog = new ProgressDialog(context);
    dialog.style(message: "S'il vous plaît, attendez...");
    await dialog.show();
    var expiryArr = card['expiryDate'].split('/');
    CreditCard stripeCard = CreditCard(
      number: card['cardNumber'],
      expMonth: int.parse(expiryArr[0]),
      expYear: int.parse(expiryArr[1]),
    );
    var response = await StripeService.payViaExistingCard(
        amount: (_amount * 100).truncate().toString(),
        currency: "$_currency",
        card: stripeCard);
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
        displayTransactionInfoBackend();
       // postTransaction();
        _paymentSuccessDialog(context);
      } else {
        Navigator.pop(context);
      }
    });*/
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Choisissez la carte existante'),
      ),
      body: Container(
        padding: EdgeInsets.all(20),
        child: ListView.builder(
          itemCount: cards.length,
          itemBuilder: (BuildContext context, int index) {
            var card = cards[index];
            return InkWell(
              onTap: () {
                payViaExistingCard(context, card);
              },
              child: CreditCardWidget(
                cardNumber: card['cardNumber'],
                expiryDate: card['expiryDate'],
                cardHolderName: card['cardHolderName'],
                cvvCode: card['cvvCode'],
                showBackView: false,
              ),
            );
          },
        ),
      ),
    );
  }
}

_paymentSuccessDialog(BuildContext context) {
  showDialog(
      context: context,
      builder: (BuildContext context) {
        return PaymentSuccessDialog2();
      });
}

class PaymentSuccessDialog2 extends StatelessWidget {
  final image = images[2];
  final TextStyle subtitle = TextStyle(fontSize: 12.0, color: Colors.grey);
  final TextStyle label = TextStyle(fontSize: 14.0, color: Colors.grey);
  List<String> sample = <String>[
    'ZOUBGA Cephas',
    'OUOBA Fayçal',
    'Florent Piata',
    'ZOUBGA Cephas',
    'OUOBA Fayçal',
    'Florent Piata',
    'ZOUBGA Cephas',
    'OUOBA Fayçal',
    'Florent Piata',
  ];

  @override
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
                //purchaserList: sample,
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
                                          _receiver_Name+''+receiver_last_name,
                                          overflow: TextOverflow.ellipsis,
                                          maxLines: 1,
                                          style: TextStyle(
                                            fontWeight: FontWeight.w600,
                                          ),
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
                                          'Status',
                                          style: TextStyle(
                                            color:
                                            Colors.black.withOpacity(0.5),
                                          ),
                                        ),
                                        Text(
                                          _status,
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
                                        'PRIX',
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
