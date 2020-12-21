import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/AccueilBottomBar.dart';
import 'package:mktransfert/src/page/accueil.dart';
import 'package:mktransfert/src/page/beneficiaireScreen.dart';
import 'package:mktransfert/src/page/contactUs.dart';
import 'package:mktransfert/src/page/loginPage.dart';
import 'package:mktransfert/src/page/navigation.dart';
import 'package:mktransfert/src/page/operations.dart';
import 'package:mktransfert/src/page/pagePrincipale.dart';
import 'package:mktransfert/src/page/payement-NoTouch.dart';
import 'package:mktransfert/src/page/paymentPageXYX.dart';
import 'package:mktransfert/src/page/user.dart';



void main() => runApp(
 MyApp());


class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
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
      title: 'Bienvenu sur MK TRANSFERT',
      home: AccueilPage(),
      routes: {
        '/home': (context) => PaymentPage(),
        //'/existing-cards': (context) => ExistingCardsPage(),
        '/transaction': (context) => OperationListPage(),
       /* '/navigation': (context) => NavigationPage(),*/
        '/login': (context) => LoginPage(),
        '/principale': (context) => PagePrincipale(),
        '/transactionNew': (context) => PaymentsScreen(),
        '/accueilBottom': (context) => AccueilBootomBarPage(),
        '/profil': (context) => UserProfilPage(),
        '/contactUsPage': (context) => ContactUsPage(),
      },
    );
  }
}
class MyHttpOverrides extends HttpOverrides{
  @override
  HttpClient createHttpClient(SecurityContext context){
    return super.createHttpClient(context)
      ..badCertificateCallback = (X509Certificate cert, String host, int port)=> true;
  }
}
