import 'package:flutter/material.dart';
import 'package:mktransfert/src/page/accueil.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: AccueilPage(),
    );
  }
}
