
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
 TextEditingController _confirmController;
 AuthentificationController _authentificationController = Get.put(AuthentificationController());
class _SmsConfirmState extends State<SmsConfirm> {
 
  @override
  void initState() {
    super.initState(); 
  }

  @override
  Widget build(BuildContext context) {
    GetMaterialApp(
      home: 
     Container(
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
                controller: _confirmController,
                onSaved: (val) => setState(() => _confirmController.text= val.trim()),
                validator: (value) => value !=null ? value : "Veuillez saisir le code",
                decoration: InputDecoration(
                  hintText: "Entrer le code",
                  border: OutlineInputBorder(),
                ),
              ), 
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
                             var smscode=jsonDecode(await storage.read(key: "smscode"));
                             var credential=jsonDecode(await storage.read(key: "credential")); 
                             var confirm=true;
                                  if (confirm){
                                      _authentificationController.initAuthentification(credential["email"], credential["password"]);
                                  }
                              },
                            ),
                          ),
            ],
          ),
        )),
    );
  }
}