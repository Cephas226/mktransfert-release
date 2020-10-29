import 'package:flutter/material.dart';
import 'package:mktransfert/src/page/accueil.dart';
import 'package:mktransfert/src/page/loginPage.dart';
import 'package:mktransfert/src/page/payement.dart';
import 'package:mktransfert/src/page/paymentPage.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(

      title: 'Welcome to Flutter',
      home: AccueilPage(),
      routes: {
        '/home': (context) => PaymentPage(),
        '/existing-cards': (context) => ExistingCardsPage(),
        '/transaction': (context) => ExistingCardsPage()
      },
    );
  }
}
