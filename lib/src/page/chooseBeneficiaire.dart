import 'package:flutter/material.dart';

import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mktransfert/core/presentation/widget/rounded_bordered_container.dart';
import 'package:mktransfert/src/page/registerBeneficiaire.dart';
import 'package:mktransfert/src/page/registerBeneficiaireEntreprise.dart';

class ChooseBeneficiairePage extends StatelessWidget {
  static final String path = "lib/src/pages/ecommerce/cart1.dart";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        iconTheme: IconThemeData(
          color: Colors.black,
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            Text(
              "Choisir un type de bénéficiaire",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 24.0,
              ),
            ),
            const SizedBox(height: 30.0),
            RoundedContainer(
              margin: const EdgeInsets.all(8.0),
              padding: const EdgeInsets.all(8.0),
              child: ListTile(
                leading: Icon(
                  FontAwesomeIcons.user,
                  color: Colors.indigo,
                ),
                onTap: () {  Navigator.push(context, MaterialPageRoute(builder: (context) => RegisterBeneficiairePage()));},
                title: Text("Particulier"),
                trailing: Icon(Icons.arrow_forward_ios),
              ),
            ),
            RoundedContainer(
              margin: const EdgeInsets.all(8.0),
              padding: const EdgeInsets.all(8.0),
              child: ListTile(
                leading: Icon(
                  FontAwesomeIcons.building,
                  color: Colors.indigo,
                ),
                onTap: () {  Navigator.push(context, MaterialPageRoute(builder: (context) => RegisterBeneficiaireEntreprisePage()));},
                title: Text("Entreprise/organisation"),
                trailing: Icon(Icons.arrow_forward_ios),
              ),
            ),
            const SizedBox(height: 20.0),
          ],
        ),
      ),
    );
  }
}
