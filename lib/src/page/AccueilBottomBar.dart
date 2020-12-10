import 'dart:convert';

import 'package:bubble_bottom_bar/bubble_bottom_bar.dart';
import 'package:fancy_alert_dialog/fancy_alert_dialog.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/operations.dart';

import 'package:mktransfert/src/page/transaction.dart';
import 'package:mktransfert/src/page/user.dart';
import 'package:mktransfert/src/utils/oval-right-clipper.dart';

import 'accueil.dart';
import 'beneficiaireScreen.dart';
import 'cooly.dart';
import 'items/help_page.dart';
import 'items/stats_page.dart';
import 'loginPage.dart';


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
  String displayUser_last_name;
  String displayUser_first_name;
  String displayUser_email;
  final List<IconData> bottomBarIcons = [Icons.calendar_today, Icons.insert_chart, Icons.person_outline];
  double amount = 10;
  int currentTabSelected = 0;
  int currentIndex = 0;
  @override
  void initState() {
    super.initState();
    this.displayTransactionInfo();

  }
  Future<String> displayTransactionInfo() async {
    var alltransactionInfo = await storage.read(key: "alltransactionInfo");
  }

  changePage(int index) {
    setState(() {
      currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      drawer:  _buildDrawer(),
      appBar: new AppBar(
        leading: Builder(
          builder: (context) => IconButton(
            icon: new Icon(Icons.menu),
            onPressed: () => Scaffold.of(context).openDrawer(),
          ),
        ),
      ),
     /* appBar: new AppBar(
        title: const Text(''),
      ),
      drawer:   _buildDrawer(),*/
      backgroundColor: Theme.of(context).primaryColor,
      body: Scaffold(
        body: Stack(
          children: <Widget>[
            // _buildBody(),
            Align(child: _buildBottomBar(),
              alignment: Alignment.bottomCenter,
            ),
          ],

        ),
      ),
    );
  }
  _buildDrawer() {
   // this.displayUserInfo();
    return ClipPath(
      clipper: OvalRightBorderClipper(),
      child: Drawer(
        child: Container(
          padding: const EdgeInsets.only(left: 16.0, right: 40),
          decoration: BoxDecoration(
              color: primary, boxShadow: [BoxShadow(color: Colors.black45)]),
          width: 300,
          child: SafeArea(
            child: SingleChildScrollView(
              child: Column(
                children: <Widget>[
                  Container(
                    alignment: Alignment.centerRight,
                    child: IconButton(
                      icon: Icon(
                        Icons.power_settings_new,
                        color: active,
                      ),
                      onPressed: () {
                        FancyAlertDialog.showFancyAlertDialog(
                          context,
                          'Confirmation',
                          'Voulez vous vous déconnectez ?',
                          kPrimaryColor,
                          icon: Icon(
                            Icons.clear,
                            color: Colors.white,
                          ),
                          labelPositiveButton: 'OK',
                          onTapPositiveButton: () {
                            storage.delete(key: "jwt");
                            Navigator.pop(context);
                            checkLoginStatus();
                          },
                          labelNegativeButton: 'Annulez',
                          onTapNegativeButton: () {
                            Navigator.pop(context);
                            print('tap negative button');
                          },
                        );
                      },
                    ),
                  ),
                  Container(
                    height: 90,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(
                            colors: [Colors.blue, kPrimaryColor])
                    ),
                    child: CircleAvatar(
                      radius: 40,
                      backgroundImage: NetworkImage('https://firebasestorage.googleapis.com/v0/b/mktransfert-d6990.appspot.com/o/LogoMKWhite_Plan%20de%20travail%201%20copie%204.png?alt=media&token=15bd19f2-0ca8-4058-81cb-bcbdf09201f6'),
                    ),
                  ),
                  SizedBox(height: 20.0),
                 /* displayUser_first_name != null?
                  Text(
                    displayUser_first_name+' '+displayUser_last_name,
                    style: TextStyle(
                        color: Colors.black,
                        fontSize: 18.0,
                        fontWeight: FontWeight.w600)):
                      Center(
                        child: CircularProgressIndicator(),
                      ),
                  displayUser_email != null?
                  Text(
                      displayUser_email,
                        style: TextStyle(color: active, fontSize: 16.0)):
                  Center(
                    child: CircularProgressIndicator(),
                  ),*/
                 // SizedBox(height: 30.0),
                  _buildRow(Icons.home, "Accueil",
                      '/accueilBottom'
                  ),
                  _buildDivider(),
                  _buildRow(Icons.person_pin, "Mon profil",
                      '/profil'
                  ),
                  _buildDivider(),
                  _buildRow(Icons.monetization_on, "Mes transactions",
                      '/transaction'
                  ),
                  _buildDivider(),
                  _buildRow(Icons.clean_hands, "Transferer",
                      '/accueilBottom'
                  ),
                  _buildDivider(),
                  _buildRow(Icons.email, "Nous contacter",
                      '/contactUsPage'
                  ),
                  _buildDivider(),
                 /* _buildRow(Icons.settings, "Aide",
                      '/principale'
                  ),*/
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
  displayUserInfo() async {
    var jwt = await storage.read(key: "userInfo");

    Map<String, dynamic> responseStorageUser = json.decode(jwt);
    /*editUser_first_name.text = responseStorageUser["first_name"];
    editUser_last_name.text = responseStorageUser["last_name"];
    editUser_email.text = responseStorageUser["email"];
    editUser_phone.text = responseStorageUser["phone"];
    editUser_country.text = responseStorageUser["country"];

    user_id_profil=responseStorageUser["user_id_profil"];*/

    displayUser_first_name = responseStorageUser["first_name"];
    displayUser_last_name = responseStorageUser["last_name"];
    displayUser_email = responseStorageUser["email"];
    setState(() {
      displayUser_first_name;
      displayUser_email;
    });
    print(displayUser_first_name);
/*    displayUser_phone = responseStorageUser["phone"];
    displayUser_country = responseStorageUser["country"];*/
  }
  Divider _buildDivider() {
    final Color divider = Colors.grey.shade600;
    return Divider(
      color: divider,
    );
  }

  Widget _buildRow(
      IconData icon,
      String title,
      String route
      ) {
    final TextStyle tStyle = TextStyle(color: active, fontSize: 16.0);
    return Container(
        padding: const EdgeInsets.symmetric(vertical: 5.0),
        child:InkWell(
          onTap: () {
            Navigator.pushNamed(context, route);
          },
          child: Row(children: [
            Icon(
              icon,
              color: active,
            ),
            SizedBox(width: 10.0),
            Text(
              title,
              style: tStyle,
            ),
            Spacer(),
          ]),
        )
    );
  }
  checkLoginStatus() async {
    var jwt = await storage.read(key: "jwt");
    print(jwt);
    if (jwt == null)
      return Navigator.of(context).pushAndRemoveUntil(
          MaterialPageRoute(builder: (BuildContext context) => LoginPage()),
          ModalRoute.withName("/login"));
    /*else {
      Navigator.of(context).pushAndRemoveUntil(
          MaterialPageRoute(builder: (BuildContext context) => PagePrincipale()),
          ModalRoute.withName("/principale")
      )*/;
      return jwt;
    }

  Widget _buildBottomBar() {

    return
      Scaffold(
        backgroundColor: Colors.grey[100],
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            FancyAlertDialog.showFancyAlertDialog(
              context,
              'Confirmation',
              'Voulez vous vous déconnectez ?',
              kPrimaryColor,
              icon: Icon(
                Icons.clear,
                color: Colors.white,
              ),
              labelPositiveButton: 'OK',
              onTapPositiveButton: () {
                storage.delete(key: "jwt");
                Navigator.pop(context);
                checkLoginStatus();
              },
              labelNegativeButton: 'Annulez',
              onTapNegativeButton: () {
                Navigator.pop(context);
                print('tap negative button');
              },
            );
          },
          child: Icon(Icons.power_settings_new),
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
                Icons.credit_card,
                color: Colors.black,
              ),
              activeIcon: Icon(
                Icons.credit_card,
                color: Colors.indigo,
              ),
              title: Text('Transaction'),
            ),
            BubbleBottomBarItem(
              backgroundColor: Colors.deepPurple,
              icon: Icon(
                Icons.contact_mail,
                color: Colors.black,
              ),
              activeIcon: Icon(
                Icons.contact_mail,
                color: Colors.deepPurple,
              ),
              title: Text('Profil'),
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
