import  'dart:convert';

import 'package:email_validator/email_validator.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/AccueilBottomBar.dart';
import 'package:http/http.dart' as http;

import 'loginPage.dart';
import 'mesclasses/user.model.dart';

final _bodyController = TextEditingController(
  text: 'Votre message',
);
final storage = FlutterSecureStorage();
final _nom = TextEditingController();
final _prenom = TextEditingController();
final _email = TextEditingController();
final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

class ContactUsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
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
                                subtitle: Text("Adresse : 61 Square Anatole France, 77350 Le Mée-Sur-Seine, France"),
                              ),
                              ListTile(
                                leading: Icon(Icons.email),
                                title: Text("Addresse Email"),
                                subtitle: Text("contact@mktransfert.com"),
                              ),
                              ListTile(
                                leading: Icon(Icons.phone),
                                title: Text("Numéro de Téléphone"),
                                subtitle: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: <Widget>[
                                    Text("+33 760 562 143"),
                                    Text("+33 661 217 174"),
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
      'http://demo.mktransfert.com/api/contact',
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
