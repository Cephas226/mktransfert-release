import 'package:flutter/material.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/accueil.dart';
import 'package:mktransfert/src/page/beneficiaireScreen.dart';
import 'package:mktransfert/src/page/loginPage.dart';
import 'package:mktransfert/src/page/navigation.dart';
import 'package:mktransfert/src/page/pagePrincipale.dart';
import 'package:mktransfert/src/page/payement.dart';
import 'package:mktransfert/src/page/paymentPage.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primaryColor: kPrimaryColor,
        accentColor: kPrimaryColor,
        fontFamily: 'Gilroy',
        sliderTheme: SliderThemeData(
          activeTrackColor: kPrimaryColor,
          thumbColor: kPrimaryColor,
          inactiveTrackColor: Colors.grey.shade200,
        ),
      ),
      title: 'Welcome to Flutter',
      home: AccueilPage(),
      debugShowCheckedModeBanner: false,
      routes: {
        '/home': (context) => PaymentPage(),
        '/existing-cards': (context) => ExistingCardsPage(),
        '/transaction': (context) => ExistingCardsPage(),
        '/navigation': (context) => NavigationPage(),
        '/login': (context) => LoginPage(),
        '/principale': (context) => PagePrincipale(),
        '/transactionNew': (context) => PaymentsScreen()
      },
    );
  }
}
