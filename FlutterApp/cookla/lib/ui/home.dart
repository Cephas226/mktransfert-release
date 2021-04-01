import  'dart:convert';

import 'package:cookla/ui/signing.dart';
import 'package:cookla/ui/signup.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';


class HomePage extends StatelessWidget {
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
              padding: const EdgeInsets.only(top: 150.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Image.asset('assets/logo.png'),
                  Text("Cook easily\n"+
                      "and enjoy !", style: TextStyle(
                   fontSize: 25,
                  )),
                  SizedBox(
                    height: 20,
                  ),
                  Expanded(
                    child: Container(
                      child: Column(
                        children: <Widget>[
                          Container(
                            width: 250,
                            child: Center(
                              child: FlatButton(
                                onPressed: () {
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) =>  SignupPage()));
                                },
                                padding: EdgeInsets.all(10),
                                color: Colors.white,
                                shape: RoundedRectangleBorder(
                                  borderRadius:
                                  BorderRadius.circular(20),
                                ),
                                child:
                                Row(
                                  mainAxisAlignment:
                                  MainAxisAlignment.center,
                                  children: <Widget>[
                                    Text(
                                      'Sign up',
                                      style: TextStyle(
                                        color: Colors.deepOrangeAccent,
                                        fontSize: 20,
                                      ),
                                    ),
                                    Icon(
                                      Icons.arrow_forward,
                                      size: 25,
                                      color: Colors.white,
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          SizedBox(
                            height: 10,
                          ),
                          Container(
                            width: 250,
                            child: Center(
                              child: FlatButton(
                                onPressed: () {
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) =>  SignPage()));
                                },
                                padding: EdgeInsets.all(10),
                                color: Colors.green,
                                shape: RoundedRectangleBorder(
                                  borderRadius:
                                  BorderRadius.circular(20),
                                ),
                                child:
                                Row(
                                  mainAxisAlignment:
                                  MainAxisAlignment.center,
                                  children: <Widget>[
                                    Text(
                                      'Log in',
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
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
