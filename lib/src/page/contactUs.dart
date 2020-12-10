/*
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'package:mktransfert/src/contant/constant.dart';

import '../../network_image.dart';


const TextStyle boldText = TextStyle(
  fontWeight: FontWeight.bold,
);
final _bodyController = TextEditingController(
  text: 'Votre message',
);
class ContactUsPage extends StatefulWidget {
  static final String path = "lib/src/pages/invitation/inauth.dart";
  @override
  _InvitationAuthPageState createState() => _InvitationAuthPageState();
}

class _InvitationAuthPageState extends State<ContactUsPage> {
  bool signupForm;
  @override
  void initState() {
    super.initState();
    signupForm = true;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Contact"),
        backgroundColor: kPrimaryColor,
        elevation: 0,
        iconTheme: IconThemeData(
          color: Colors.white,
        ),
      ),
      body: Stack(
        children: <Widget>[
          FractionallySizedBox(
            heightFactor: 0.5,
            child: Container(
              color: kPrimaryColor,
            ),
          ),
          SingleChildScrollView(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              children: <Widget>[
                const SizedBox(height: kToolbarHeight - 16.0),
                Container(
                  alignment: Alignment.topCenter,
                  height: (MediaQuery.of(context).size.height / 2) - 150,
                  child: PNetworkImage(
                    INVITE_ILLUSTRATION,
                    fit: BoxFit.contain,
                  ),
                ),
                const SizedBox(height: 20.0),
                Container(
                  decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(10.0),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.blue,
                          offset: Offset(5, 5),
                          blurRadius: 10.0,
                        )
                      ]),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      Container(
                        width: double.infinity,
                        decoration: BoxDecoration(
                          color: Colors.grey.shade100,
                          borderRadius: BorderRadius.only(
                            topLeft: Radius.circular(10.0),
                            topRight: Radius.circular(10.0),
                          ),
                        ),
                      ),
                      AnimatedSwitcher(
                        duration: Duration(milliseconds: 200,),
                        child: SignUp(),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 10.0),
                Card(
                  child: Container(
                    alignment: Alignment.topLeft,
                    padding: EdgeInsets.all(15),
                    child: Column(
                      children: <Widget>[
                        Column(
                          children: <Widget>[
                            ...ListTile.divideTiles(
                              color: Colors.grey,
                              tiles: [
                                ListTile(
                                  contentPadding: EdgeInsets.symmetric(
                                      horizontal: 12, vertical: 4),
                                  leading: Icon(Icons.my_location),
                                  title: Text("Location"),
                                  subtitle: Text("Kathmandu"),
                                ),
                                ListTile(
                                  leading: Icon(Icons.email),
                                  title: Text("Email"),
                                  subtitle: Text("sudeptech@gmail.com"),
                                ),
                                ListTile(
                                  leading: Icon(Icons.phone),
                                  title: Text("Phone"),
                                  subtitle: Text("99--99876-56"),
                                ),
                                ListTile(
                                  leading: Icon(Icons.person),
                                  title: Text("About Me"),
                                  subtitle: Text(
                                      "This is a about me link and you can khow about me in this section."),
                                ),
                              ],
                            ),
                          ],
                        )
                      ],
                    ),
                  ),
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class SignUp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(

      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: <Widget>[
          DefaultTabController(
            length: 3,
            child: Scaffold(
              appBar: AppBar(
                bottom: TabBar(
                  tabs: [
                    Tab(icon: Icon(Icons.directions_car)),
                    Tab(icon: Icon(Icons.directions_transit)),
                    Tab(icon: Icon(Icons.directions_bike)),
                  ],
                ),
                title: Text('Tabs Demo'),
              ),
              body: TabBarView(
                children: [
                  Icon(Icons.directions_car),
                  Icon(Icons.directions_transit),
                  Icon(Icons.directions_bike),
                ],
              ),
            ),
          )
       */
/* Padding(
              padding: EdgeInsets.only(
                  left: 5.0, right: 25.0, top: 5.0),
              child: new Row(
                mainAxisSize: MainAxisSize.max,
                children: <Widget>[
                  new Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      new Text(
                        'Votre nom',
                        style: TextStyle(
                            fontSize: 16.0,
                            fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ],
              )
          ),
          TextFormField(
            decoration: InputDecoration(
              border: OutlineInputBorder(),
              contentPadding: const EdgeInsets.all(
                16.0,
              ),
              hintText: "Votre nom",
            ),
          ),
          const SizedBox(height: 5.0),
          Padding(
              padding: EdgeInsets.only(
                  left: 5.0, right: 25.0, top: 5.0),
              child: new Row(
                mainAxisSize: MainAxisSize.max,
                children: <Widget>[
                  new Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      new Text(
                        'Votre prénom',
                        style: TextStyle(
                            fontSize: 16.0,
                            fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ],
              )
          ),
          TextFormField(
            decoration: InputDecoration(
              border: OutlineInputBorder(),
              contentPadding: const EdgeInsets.all(
                16.0,
              ),
              hintText: "Votre prénom",
            ),
          ),
          Padding(
              padding: EdgeInsets.only(
                  left: 5.0, right: 25.0, top: 5.0),
              child: new Row(
                mainAxisSize: MainAxisSize.max,
                children: <Widget>[
                  new Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      new Text(
                        'Addresse Email',
                        style: TextStyle(
                            fontSize: 16.0,
                            fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ],
              )
          ),
          TextFormField(
            decoration: InputDecoration(
              border: OutlineInputBorder(),
              contentPadding: const EdgeInsets.all(
                16.0,
              ),
              hintText: "Addresse Email",
            ),
          ),
          const SizedBox(height: 5.0),
          Padding(
              padding: EdgeInsets.only(
                  left: 5.0, right: 25.0, top: 5.0),
              child: new Row(
                mainAxisSize: MainAxisSize.max,
                children: <Widget>[
                  new Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      new Text(
                        'Laissez votre message',
                        style: TextStyle(
                            fontSize: 16.0,
                            fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ],
              )
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: TextField(
              controller: _bodyController,
              maxLines: 10,
              decoration: InputDecoration(
                 border: OutlineInputBorder()),
            ),
          ),
          const SizedBox(height: 16.0),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(
              horizontal: 32.0,
            ),
            child: RaisedButton(
              elevation: 0,
              highlightElevation: 0,
              textColor: Colors.white,
              color: kPrimaryColor,
              onPressed: (){},
              child:Text ("Envoyez")
            ),
          ),
          const SizedBox(height: 10.0),*//*

        ],
      ),
    );
  }
}

class SignIn extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: <Widget>[
          TextField(
            decoration: InputDecoration(
              border: OutlineInputBorder(),
              contentPadding: const EdgeInsets.all(
                16.0,
              ),
              hintText: "enter your email or phone",
            ),
          ),
          const SizedBox(height: 16.0),
          TextField(
            obscureText: true,
            decoration: InputDecoration(
              border: OutlineInputBorder(),
              hintText: "password",
              contentPadding: const EdgeInsets.all(
                16.0,
              ),
              prefixStyle: boldText.copyWith(color: Colors.black),
            ),
          ),
          const SizedBox(height: 16.0),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(
              horizontal: 32.0,
            ),
            child: RaisedButton(
              elevation: 0,
              highlightElevation: 0,
              textColor: Colors.white,
              onPressed: () => Navigator.pushNamed(context, 'home'),
              child: Text("Sign In"),
            ),
          ),
          const SizedBox(height: 10.0),
        ],
      ),
    );
  }
}
*/

import 'dart:convert';

import 'package:email_validator/email_validator.dart';
import 'package:flutter/material.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/AccueilBottomBar.dart';
import 'package:http/http.dart' as http;

import 'loginPage.dart';

final _bodyController = TextEditingController(
  text: 'Votre message',
);
final _nom = TextEditingController();
final _prenom = TextEditingController();
final _email = TextEditingController();
final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

class ContactUsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: DefaultTabController(
        length: 2,
        child: Scaffold(
          appBar: AppBar(
           leading: IconButton(icon:Icon(Icons.arrow_back),color: Colors.white,
               onPressed:() => {
                   Navigator.push(
                   context,
                   MaterialPageRoute(builder: (context) => AccueilBootomBarPage()),
                   )
               },
           ),
            title: Text("Contacts"),
            backgroundColor: kPrimaryColor,
            elevation: 0,
            iconTheme: IconThemeData(
              color: Colors.white,
            ),
            bottom: TabBar(
              tabs: [
                Tab(text: "Infos",icon: Icon(Icons.info)),
                Tab(text: "Nous contacter",icon: Icon(Icons.mail)),
              ],
            ),

          ),
          body: TabBarView(
            children: [

              Card(
                child:
                Container(
                  alignment: Alignment.topLeft,
                  padding: EdgeInsets.all(15),
                  child: Column(
                    children: <Widget>[
                      Column(
                        children: <Widget>[
                          ...ListTile.divideTiles(
                            color: Colors.grey,
                            tiles: [
                              ListTile(
                                contentPadding: EdgeInsets.symmetric(
                                    horizontal: 12, vertical: 4),
                                leading: Icon(Icons.my_location),
                                title: Text("Siège Social"),
                                subtitle: Text("61, Square Anatole France, 77350 Le Mée-Sur-Seine"),
                              ),
                              ListTile(
                                leading: Icon(Icons.email),
                                title: Text("Addresse Email"),
                                subtitle: Text("mktransfert20@gmail.com"),
                              ),
                              ListTile(
                                leading: Icon(Icons.phone),
                                title: Text("Numéro de Téléphone"),
                                subtitle: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: <Widget>[
                                    Text("0661217174"),
                                    Text("0033661217174"),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ],
                      )
                    ],
                  ),
                ),
              ),
      Form(
        key: _formKey,
        child:   Card(
            child:
            SingleChildScrollView(
              child: Container(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  children: <Widget>[
                    Padding(
                        padding: EdgeInsets.only(
                            left: 5.0, right: 25.0, top: 5.0),
                        child: new Row(
                          mainAxisSize: MainAxisSize.max,
                          children: <Widget>[
                            new Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              mainAxisSize: MainAxisSize.min,
                              children: <Widget>[
                                new Text(
                                  'Votre nom',
                                  style: TextStyle(
                                      fontSize: 16.0,
                                      fontWeight: FontWeight.bold),
                                ),
                              ],
                            ),
                          ],
                        )
                    ),
                    TextFormField(
                      decoration: InputDecoration(
                        border: OutlineInputBorder(),
                        contentPadding: const EdgeInsets.all(
                          16.0,
                        ),
                        hintText: "Votre nom",
                      ),
                      controller: _nom,
                      validator: (value) {
                        if (value.isEmpty) {
                          return 'Veuillez saisir un nom ';
                        }
                        return null;
                      },
                    ),
                    const SizedBox(height: 5.0),
                    Padding(
                        padding: EdgeInsets.only(
                            left: 5.0, right: 25.0, top: 5.0),
                        child: new Row(
                          mainAxisSize: MainAxisSize.max,
                          children: <Widget>[
                            new Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              mainAxisSize: MainAxisSize.min,
                              children: <Widget>[
                                new Text(
                                  'Votre prénom',
                                  style: TextStyle(
                                      fontSize: 16.0,
                                      fontWeight: FontWeight.bold),
                                ),
                              ],
                            ),
                          ],
                        )
                    ),
                    TextFormField(
                      decoration: InputDecoration(
                        border: OutlineInputBorder(),
                        contentPadding: const EdgeInsets.all(
                          16.0,
                        ),
                        hintText: "Votre prénom",
                      ),
                      controller: _prenom,
                    ),
                    Padding(
                        padding: EdgeInsets.only(
                            left: 5.0, right: 25.0, top: 5.0),
                        child: new Row(
                          mainAxisSize: MainAxisSize.max,
                          children: <Widget>[
                            new Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              mainAxisSize: MainAxisSize.min,
                              children: <Widget>[
                                new Text(
                                  'Addresse Email *',
                                  style: TextStyle(
                                      fontSize: 16.0,
                                      fontWeight: FontWeight.bold),
                                ),
                              ],
                            ),
                          ],
                        )
                    ),
                    TextFormField(
                      decoration: InputDecoration(
                        border: OutlineInputBorder(),
                        contentPadding: const EdgeInsets.all(
                          16.0,
                        ),
                        hintText: "Addresse Email",
                      ),
                      controller: _email,
                      validator: (value) => EmailValidator.validate(value) ? null : "Veuillez saisir un e-mail valide",
                    ),
                    const SizedBox(height: 5.0),
                    Padding(
                        padding: EdgeInsets.only(
                            left: 5.0, right: 25.0, top: 5.0),
                        child: new Row(
                          mainAxisSize: MainAxisSize.max,
                          children: <Widget>[
                            new Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              mainAxisSize: MainAxisSize.min,
                              children: <Widget>[
                                new Text(
                                  'Laissez votre message',
                                  style: TextStyle(
                                      fontSize: 16.0,
                                      fontWeight: FontWeight.bold),
                                ),
                              ],
                            ),
                          ],
                        )
                    ),
                    Padding(
                      padding: EdgeInsets.all(1.0),
                      child: TextFormField(
                        controller: _bodyController,
                        validator: (value) {
                          if (value.isEmpty) {
                            return 'Veuillez saisir un contenu ';
                          }
                          return null;
                        },
                        maxLines: 10,
                        decoration: InputDecoration(
                          hintText: "Votre message",
                          border: OutlineInputBorder(),
                        ),
                      ),
                    ),
                    const SizedBox(height: 16.0),
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(
                        horizontal: 32.0,
                      ),
                      child: RaisedButton(
                          elevation: 0,
                          highlightElevation: 0,
                          textColor: Colors.white,
                          color: kPrimaryColor,
                          onPressed: () async {
                            if (_formKey.currentState.validate()) {
                              var jwtUser = await createMessage(_nom.text,_prenom.text,_email.text,_bodyController.text);
                              Map<String, dynamic> responseJwtLogin = json.decode(jwtUser);
                              if (responseJwtLogin['message']=='votre message a été envoyé'){
                                this.showAlertDialogSuccess(context);
                              }
                            }
                          },
                          child:Text ("Envoyez")
                      ),
                    ),
                    const SizedBox(height: 10.0),
                  ],
                ),
              ),
            )
        ),
      )
            ],
          ),
        ),
      ),
    );
  }
  Future<String> createMessage(String _nom,String _prenom,String _mail,String _body) async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    final http.Response response = await http.post(
      'https://www.mktransfert.com/api/contact',
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer $token',
      },
      body: jsonEncode(<String, String>{
        "contact_last_name":_nom,
        "contact_first_name": _prenom,
        "contact_mail": _mail,
        "contact_message": _body
      }),
    );
    print(json.decode(response.body)['message']);
    return response.body;
  }

  showAlertDialogSuccess(BuildContext context) {  // set up the button
    return showDialog<AlertDialog>(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          content: Container(
            margin: EdgeInsets.all(8.0),
            child: Form(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  Text(
                      'Message envoyé avec succès'
                  )
                ],
              ),
            ),
          ),
          actions: <Widget>[
            FlatButton(
                onPressed: () {
                  Navigator.pop(context,true);
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => AccueilBootomBarPage()));
                },
                child: Text("Ok"))
          ],
        );
      },
    );
  }
}
