import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:cookla/service/aut.service.dart';
import 'package:cookla/ui/recipes.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class SignPage extends StatefulWidget {
  @override
  _SignPageState createState() => _SignPageState();
}


class _SignPageState extends State<SignPage> {
  final Firestore firestore = Firestore.instance;
  var authHandler = new authentification();
  String fullName;
  String gender;
  String dateOfBirth;
  String email;
  String password;
  String nationality;
  String photo;
  String phone;
  final GlobalKey<FormState> _formStateKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primaryColor: Colors.green,
      ),
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Container(
          decoration: BoxDecoration(
            image: DecorationImage(
              image: AssetImage("assets/bg.png"),
              fit: BoxFit.cover,
            ),
          ),
          child: Center(
              child: Container(
                  margin: const EdgeInsets.all(16.0),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(16.0),
                  ),
                  child: new Form(
                    key: _formStateKey,
                    child: ListView(
                      shrinkWrap: true,
                      padding: const EdgeInsets.all(16.0),
                      children: <Widget>[
                        Row(
                          children: <Widget>[
                            Expanded(
                              child: Row(
                                children: <Widget>[
                                  Expanded(
                                    child: Container(
                                      width: 10,
                                      child: Text("Email adress"),
                                    ),
                                  ),
                                  Container(
                                    margin: EdgeInsets.only(left: 10),
                                    width: 250,
                                    padding: EdgeInsets.only(left: 20),
                                    decoration: BoxDecoration(
                                        color:Colors.grey,
                                        borderRadius: BorderRadius.circular(30.0)),
                                    child: TextFormField(
                                      validator: (value) {
                                        if (value.isEmpty) {
                                          return 'Email adress';
                                        }
                                        return null;
                                      },
                                      decoration: InputDecoration(
                                        hintText: "Email adress",
                                        border: InputBorder.none,
                                      ),
                                      onSaved: (value) => email = value
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height: 20),
                        Row(
                          children: <Widget>[
                            Expanded(
                              child: Row(
                                children: <Widget>[
                                  Expanded(
                                    child: Container(
                                      width: 10,
                                      child: Text("Password"),
                                    ),
                                  ),
                                  Container(
                                    margin: EdgeInsets.only(left: 10),
                                    width: 250,
                                    padding: EdgeInsets.only(left: 20),
                                    decoration: BoxDecoration(
                                        color:Colors.grey,
                                        borderRadius: BorderRadius.circular(30.0)),
                                    child: TextFormField(
                                        validator: (value) {
                                          if (value.isEmpty) {
                                            return 'Password please';
                                          }
                                          return null;
                                        },
                                        obscureText: true,
                                        decoration: InputDecoration(
                                            hintText: "**************",
                                            border: InputBorder.none
                                        ),
                                        onSaved: (value) => password = value),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height: 40),
                        Container(
                          width: 250,
                          child: Center(
                            child: FlatButton(
                              onPressed: () async{
                                if (_formStateKey.currentState.validate()) {
                                  _formStateKey.currentState.save();
                                  {
                                    authHandler.handleSignInEmail(email, password)
                                        .then((FirebaseUser user) {
                                      Navigator.of(context).pop();
                                      Navigator.push(
                                          context,
                                          MaterialPageRoute(
                                              builder: (context) =>  RecipePage()));
                                    }).catchError((e) =>{
                                      showAlertDialogSuccess(context,'wrong password')
                                    });
                                  }
                                }
                              },
                              padding: EdgeInsets.all(10),
                              color: Colors.green,
                              shape: RoundedRectangleBorder(
                                borderRadius:
                                BorderRadius.circular(20),
                              ),
                              child: Row(
                                children: [
                                  Icon(
                                    Icons.check_circle,
                                    size: 25,
                                    color: Colors.white,
                                  ),
                                  Text(
                                    'Login',
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 20,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ))),
        ),
      ),
    );
  }
}

showAlertDialogSuccess(BuildContext context,String error) {  // set up the button
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
                    error
                )
              ],
            ),
          ),
        ),
        actions: <Widget>[
          FlatButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text("Ok")),
        ],
      );
    },
  );
}