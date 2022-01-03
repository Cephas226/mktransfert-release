
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:get/get.dart';

import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/modules/authentification/authentification_controller.dart';
import 'package:mktransfert/src/page/registerBeneficiaire.dart';

import 'pagePrincipale.dart';


class SmsConfirm extends StatefulWidget {
  

  @override
  _SmsConfirmState createState() => _SmsConfirmState();
}

class _SmsConfirmState extends State<SmsConfirm> {
  String smscode;
 AuthentificationController _authentificationController = Get.put(AuthentificationController());
  @override
  void initState() {
    super.initState(); 
  }
  @override
  Widget build(BuildContext context) {
    bool selected = false;
    return Scaffold(
        appBar: AppBar(
          title: Text("Sms confirmation"), 
          backgroundColor:kPrimaryColor,
        ),
        body: Container(
        margin: const EdgeInsets.all(16.0),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16.0),
        ),
        child: new Form( 
          child: ListView(
            shrinkWrap: true,
            padding: const EdgeInsets.all(16.0),
            children: <Widget>[
              TextFormField( 
                onSaved: (val) => setState(() =>smscode = val),
                validator: (value) => value !=null ? value : "Veuillez saisir le code",
                decoration: InputDecoration(
                  hintText: "Entrer le code",
                  border: OutlineInputBorder(),
                ),
               onChanged: (value) {
                setState(() {
                  smscode=value;
                });
               }),
               const SizedBox(height: 10.0),
                          SizedBox(
                            width: double.infinity,
                            child: RaisedButton(
                              color: kPrimaryColor,
                              textColor: Colors.white,
                              elevation: 0,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20.0),
                              ),
                              child: Text("Valider"),
                              onPressed: () async {
                                final storage = FlutterSecureStorage();
                             var codesms=await storage.read(key: "code_sms");
                             var password=await storage.read(key: "password"); 
                             var email=await storage.read(key: "email"); 
                                    //print(codesms);
                                    print(smscode);
                                  if (codesms==smscode){
                                     _authentificationController.initAuthentification(email, password);
                                  }
                              },
                            ),
                          ),
            ],
          ),
        )));
  }
  // @override
  // Widget build(BuildContext context) {
  //   GetMaterialApp(
  //     home: 
  //    Container(
  //       margin: const EdgeInsets.all(16.0),
  //       decoration: BoxDecoration(
  //         color: Colors.white,
  //         borderRadius: BorderRadius.circular(16.0),
  //       ),
  //       child: new Form( 
  //         child: ListView(
  //           shrinkWrap: true,
  //           padding: const EdgeInsets.all(16.0),
  //           children: <Widget>[
  //             TextFormField(
  //               controller: _confirmController,
  //               onSaved: (val) => setState(() => _confirmController.text= val.trim()),
  //               validator: (value) => value !=null ? value : "Veuillez saisir le code",
  //               decoration: InputDecoration(
  //                 hintText: "Entrer le code",
  //                 border: OutlineInputBorder(),
  //               ),
  //             ), 
  //              const SizedBox(height: 10.0),
  //                         SizedBox(
  //                           width: double.infinity,
  //                           child: RaisedButton(
  //                             color: kPrimaryColor,
  //                             textColor: Colors.white,
  //                             elevation: 0,
  //                             shape: RoundedRectangleBorder(
  //                               borderRadius: BorderRadius.circular(20.0),
  //                             ),
  //                             child: Text("Valider"),
  //                             onPressed: () async {
  //                               final storage = FlutterSecureStorage();
  //                            var smscode=jsonDecode(await storage.read(key: "smscode"));
  //                            var credential=jsonDecode(await storage.read(key: "credential")); 
  //                            var confirm=true;
  //                                 if (confirm){
  //                                     _authentificationController.initAuthentification(credential["email"], credential["password"]);
  //                                 }
  //                             },
  //                           ),
  //                         ),
  //           ],
  //         ),
  //       )),
  //   );
  // }
}