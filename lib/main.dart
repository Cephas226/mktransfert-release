import 'dart:io';


import 'package:device_preview/device_preview.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/AccueilBottomBar.dart';
import 'package:mktransfert/src/page/accueil.dart';
import 'package:mktransfert/src/page/beneficiaireScreen.dart';
import 'package:mktransfert/src/page/loginPage.dart';
import 'package:mktransfert/src/page/navigation.dart';
import 'package:mktransfert/src/page/pagePrincipale.dart';
import 'package:mktransfert/src/page/payement.dart';
import 'package:mktransfert/src/page/paymentPage.dart';


void main() => runApp(
   DevicePreview(
       enabled:kReleaseMode,
       builder:(context)=>MyApp()
   )

);

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
       /* '/navigation': (context) => NavigationPage(),*/
        '/login': (context) => LoginPage(),
        '/principale': (context) => PagePrincipale(),
        '/transactionNew': (context) => PaymentsScreen(),
        '/accueilBottom': (context) => AccueilBootomBarPage()
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
