import 'package:bubble_bottom_bar/bubble_bottom_bar.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/operations.dart';

import 'package:mktransfert/src/page/transaction.dart';
import 'package:mktransfert/src/page/user.dart';

import 'beneficiaireScreen.dart';
import 'items/help_page.dart';
import 'items/stats_page.dart';


/*class ExpenseTrackerApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomePage(),
     *//* theme: ThemeData.dark().copyWith(
        primaryColor: Color(0xff1C1934),
        accentColor: Colors.pink,
      ),*//*
    );
  }
}*/
class AccueilBootomBarPage extends StatefulWidget {
  static final String path = "lib/src/pages/login/auth3.dart";

  @override
  _ExpenseTrackerState createState() => _ExpenseTrackerState();
}

class _ExpenseTrackerState extends State<AccueilBootomBarPage> {
  final List<IconData> bottomBarIcons = [Icons.calendar_today, Icons.insert_chart, Icons.person_outline];
  double amount = 10;
  int currentTabSelected = 0;
  int currentIndex = 0;
  @override
  void initState() {
    super.initState();
  }

  changePage(int index) {
    setState(() {
      currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(

      backgroundColor: Theme.of(context).primaryColor,
      body: Stack(
        children: <Widget>[
         // _buildBody(),
          Align(child: _buildBottomBar(),
            alignment: Alignment.bottomCenter,
          ),
        ],
      ),
    );
  }
/*

  Widget _buildBody() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Expanded(
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.only(bottomLeft: Radius.circular(66,)),
              gradient: LinearGradient(colors: [Color(0xff682CFC),
                Color(0xffB730F9),],
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
              ),
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: <Widget>[
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.only(top: 48, bottom: 42, left: 24,),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[

                        Text("This week", style: TextStyle(
                          fontSize: 28,
                          fontWeight: FontWeight.w600,
                        ),),

                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Text("\$4.12", style: TextStyle(
                              fontSize: 42, fontWeight: FontWeight.bold,
                            ),),

                            SizedBox(height: 8,),

                            Text("Total Contributions", style: TextStyle(
                              fontSize: 15,
                            ),),
                          ],
                        ),

                        Text("Will be collected on Monday",
                          style: TextStyle(
                            fontSize: 15,
                          ),),

                      ],
                    ),
                  ),
                ),
                Expanded(child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: 36, horizontal: 12),
                  child: Icon(FontAwesomeIcons.piggyBank,
                    color: Color(0xffFB71BC),
                    size: 100,
                  ),
                ),),
              ],
            ),
          ),
        ),
        Expanded(child: Container(
          child: Column(
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 32, horizontal: 20,),
                child: Text("Recurring contribution",
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),

              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24,),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                   */
/* ActionButton(icon: FontAwesomeIcons.minus, onTap: () {
                      if (amount == 1) {
                        return;
                      }
                      setState(() {
                        amount--;
                      });
                    }),*//*

                    Text("\$$amount", style: TextStyle(fontSize: 24, fontWeight: FontWeight.w600),),
                  */
/*  ActionButton(icon: FontAwesomeIcons.plus, onTap: () {
                      setState(() {
                        amount++;
                      });
                    }),*//*

                  ],
                ),
              ),

              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 36),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Text("Next contribution date:",
                      style: TextStyle(
                        fontSize: 18,
                        color: Color(0xff716E8A),
                      ),
                    ),

                    Text("15 Oct 2017",
                      style: TextStyle(
                        color: Color(0xff6D5ADB),
                        fontSize: 14,
                      ),
                    ),

                  ],
                ),
              )

            ],
          ),
        )),
      ],
    );
  }
*/

  Widget _buildBottomBar() {

    return
      Scaffold(
        backgroundColor: Colors.grey[100],
        /*appBar: AppBar(
          title: Text('Bottom Navigation Bar'),
          centerTitle: true,
        ),*/
        floatingActionButton: FloatingActionButton(
          onPressed: () {},
          child: Icon(Icons.add),
          backgroundColor: Colors.red,
        ),
        floatingActionButtonLocation:
        FloatingActionButtonLocation.endDocked,
        bottomNavigationBar: BubbleBottomBar(
          opacity: 0.2,
          backgroundColor: Colors.white,
          borderRadius: BorderRadius.vertical(
            top: Radius.circular(16.0),
          ),
          currentIndex: currentIndex,
          hasInk: true,
          inkColor: Colors.black12,
          hasNotch: true,
          fabLocation: BubbleBottomBarFabLocation.end,
          onTap: changePage,
          items: [
            BubbleBottomBarItem(
              backgroundColor: Colors.red,
              icon: Icon(
                Icons.dashboard,
                color: Colors.black,
              ),
              activeIcon: Icon(
                Icons.dashboard,
                color: Colors.red,
              ),
              title: Text('Accueil'),
            ),
            BubbleBottomBarItem(
              backgroundColor: Colors.indigo,
              icon: Icon(
                Icons.folder_open,
                color: Colors.black,
              ),
              activeIcon: Icon(
                Icons.folder_open,
                color: Colors.indigo,
              ),
              title: Text('Transaction'),
            ),
            BubbleBottomBarItem(
              backgroundColor: Colors.deepPurple,
              icon: Icon(
                Icons.access_time,
                color: Colors.black,
              ),
              activeIcon: Icon(
                Icons.access_time,
                color: Colors.deepPurple,
              ),
              title: Text('Log'),
            ),
          ],
        ),
        body: (currentIndex == 0)
            ?  Center(
          child: Container(
            child: PaymentsScreen(),
          ),
        )
            : (currentIndex == 1)
            ? Center(
          child: Container(
            child: OperationListPage(),
          ),
        )
            : Center(
          child: Container(
            child: UserProfilPage(),
          ),
        ),
      );
  }

}
