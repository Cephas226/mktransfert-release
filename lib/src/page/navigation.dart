import 'package:flutter/material.dart';
import 'package:mktransfert/src/page/profil.dart';
import 'package:mktransfert/src/page/dashboard.dart';
import 'package:mktransfert/src/page/operations.dart';
import 'package:mktransfert/src/page/test.dart';
import 'package:mktransfert/src/page/transaction.dart';

import 'beneficiaire.dart';

class NavigationPage extends StatefulWidget {
  static final String path = "lib/src/pages/login/auth3.dart";

  @override
  _NavigationPageState createState() => _NavigationPageState();
}

class _NavigationPageState extends State<NavigationPage> {
  PageController _myPage = PageController(initialPage: 0);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      bottomNavigationBar: BottomAppBar(
        shape: CircularNotchedRectangle(),
        child: Container(
          decoration: BoxDecoration(
              gradient: LinearGradient(
                  colors: [Colors.blue, Colors.deepPurple])
          ),
          height: 75,
          child: Row(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
             Row(children: <Widget>[
               IconButton(
                 iconSize: 30.0,
                 padding: EdgeInsets.only(left: 28.0),
                 icon: Icon(Icons.home),
                 onPressed: () {
                   setState(() {
                     _myPage.jumpToPage(0);
                   });
                 },
               ),
             ],),
              IconButton(
                iconSize: 30.0,
                padding: EdgeInsets.only(right: 28.0),
                icon: Icon(Icons.payment),
                onPressed: () {
                  setState(() {
                    _myPage.jumpToPage(1);
                  });
                },
              ),
              IconButton(
                iconSize: 30.0,
                padding: EdgeInsets.only(left: 28.0),
                icon: Icon(Icons.group),
                onPressed: () {
                  setState(() {
                    _myPage.jumpToPage(2);
                  });
                },
              ),
              IconButton(
                iconSize: 30.0,
                padding: EdgeInsets.only(right: 28.0),
                icon: Icon(Icons.person),
                onPressed: () {
                  setState(() {
                    _myPage.jumpToPage(3);
                  });
                },
              )
            ],
          ),
        ),
      ),
      body: PageView(
        controller: _myPage,
        onPageChanged: (int) {
          print('Page Changes to index $int');
        },
        children: <Widget>[
          Center(
            child: Container(
              child: DashboardPage(),
            ),
          ),
          Center(
            child: Container(
              child: OperationListPage(),
            ),
          ),
          Center(
            child: Container(
              child: BeneficiairePage(),
            ),
          ),
          Center(
            child: Container(
              child: ProfilePage(),
            ),
          )
        ],
        physics: NeverScrollableScrollPhysics(), // Comment this if you need to use Swipe.
      ),
      floatingActionButton: Container(
        height: 65.0,
        width: 65.0,
        child: FittedBox(
          child: FloatingActionButton(
            onPressed: () {Navigator.push(context, MaterialPageRoute(builder: (context) => TransactionPage()),);},
            child: Icon(
              Icons.swap_horiz,
              color: Colors.white,
            ),
            // elevation: 5.0,
          ),
        ),
      ),
    );
  }

}

