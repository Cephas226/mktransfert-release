import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mktransfert/src/page/beneficiaire.dart';
import 'package:mktransfert/src/page/navigation.dart';

import 'chooseBeneficiaire.dart';
import 'mesclasses/beneficiaireClasses.dart';
import 'operations/beneficiaireOperations.dart';

class RegisterBeneficiairePage extends StatefulWidget {
  @override
  RegisterBeneficiairePageState createState() => RegisterBeneficiairePageState();
}

class RegisterBeneficiairePageState  extends State <RegisterBeneficiairePage> {
  static final String path = "lib/src/pages/login/signup2.dart";
  Future<Beneficiaire> _futureBeneficiaire;
  final _beneficiaire = Beneficiaire();
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  List<DropdownMenuItem<ListItem>> buildDropDownMenuItems(List listItems) {
    List<DropdownMenuItem<ListItem>> items = List();
    for (ListItem listItem in listItems) {
      items.add(
        DropdownMenuItem(
          child: Text(listItem.name),
          value: listItem,
        ),
      );
    }
    return items;
  }
  List<ListItem> _dropdownItems = [
    ListItem(1,  "Boffa"),
    ListItem(2,  "Boke"),
    ListItem(3, "Conakry – Kaloum"),
    ListItem(4, "Conakry – Madina"),
    ListItem(5,  "Conakry - Bambeto"),
    ListItem(6, "Conakry – Enco"),
    ListItem(7,  "Conakry - Matoto"),
    ListItem(8, "Conakry – Lambanyi"),
    ListItem(9, "Cosa - Rond-Point"),
    ListItem(10, "Conakry - cimenterie carrefour"),
    ListItem(11, "Conakry – Dabompa"),
    ListItem(12, "Coyah"),
    ListItem(13, "Dubreka Km"),
    ListItem(14, "Fria"),
    ListItem(15, "Kamsar"),
    ListItem(16, "Kankan"),
    ListItem(17, "Kindia"),
    ListItem(18, "Koundara"),
    ListItem(19,  "Labe"),
    ListItem(20, "Lelouma"),
    ListItem(21, "Mamou"),
    ListItem(22, "N’Zerekore"),
    ListItem(23, "Pita"),
    ListItem(24,"Sangaredji"),
    ListItem(25,  " Timbi Madina"),
    ListItem(26,  "Touba"),
  ];
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _dropdownMenuItems = buildDropDownMenuItems(_dropdownItems);
    _selectedItem = _dropdownMenuItems[0].value;
  }
  List<DropdownMenuItem<ListItem>> _dropdownMenuItems;
  ListItem _selectedItem;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        iconTheme: IconThemeData(
          color: Colors.black,
        ),
      ),
      body: SingleChildScrollView(
          child: Builder(
              builder: (context) => Form(
                key: _formKey,
                child: Container(
                  child: (_futureBeneficiaire == null)?
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      const SizedBox(height: 20.0),
                      Stack(
                        children: <Widget>[
                          Padding(
                            padding: const EdgeInsets.only(left: 32.0),
                            child: Text(
                              "Particulier",
                              style:
                              TextStyle(fontSize: 30.0, fontWeight: FontWeight.bold),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 20.0),
                      Padding(
                          padding: EdgeInsets.only(
                              left: 25.0, right: 25.0, top: 25.0),
                          child: new Row(
                            mainAxisSize: MainAxisSize.max,
                            children: <Widget>[
                              new Column(
                                mainAxisAlignment: MainAxisAlignment.start,
                                mainAxisSize: MainAxisSize.min,
                                children: <Widget>[
                                  new Text(
                                    'Nom*',
                                    style: TextStyle(
                                        fontSize: 16.0,
                                        fontWeight: FontWeight.bold),
                                  ),
                                ],
                              ),
                            ],
                          )),
                      Padding(
                          padding: EdgeInsets.only(
                              left: 25.0, right: 25.0, top: 2.0),
                          child: new Row(
                            mainAxisSize: MainAxisSize.max,
                            children: <Widget>[
                              new Flexible(
                                child: new TextFormField(
                                  onSaved: (val) => setState(() => _beneficiaire.nom = val),
                                  decoration: const InputDecoration(hintText: "Entrez un nom"),
                                ),
                              ),
                            ],
                          )),
                      const SizedBox(height: 20.0),
                      Padding(
                          padding: EdgeInsets.only(
                              left: 25.0, right: 25.0, top: 25.0),
                          child: new Row(
                            mainAxisSize: MainAxisSize.max,
                            children: <Widget>[
                              new Column(
                                mainAxisAlignment: MainAxisAlignment.start,
                                mainAxisSize: MainAxisSize.min,
                                children: <Widget>[
                                  new Text(
                                    'Prenom(s)*',
                                    style: TextStyle(
                                        fontSize: 16.0,
                                        fontWeight: FontWeight.bold),
                                  ),
                                ],
                              ),
                            ],
                          )),
                      Padding(
                          padding: EdgeInsets.only(
                              left: 25.0, right: 25.0, top: 2.0),
                          child: new Row(
                            mainAxisSize: MainAxisSize.max,
                            children: <Widget>[
                              new Flexible(
                                child: new TextFormField(
                                  onSaved: (val) => setState(() => _beneficiaire.prenom = val),
                                  decoration: const InputDecoration(
                                      hintText: "Entrez un prenom"),
                                ),
                              ),
                            ],
                          )),
                      const SizedBox(height: 20.0),
                      Padding(
                          padding: EdgeInsets.only(
                              left: 25.0, right: 25.0, top: 25.0),
                          child: new Row(
                            mainAxisSize: MainAxisSize.max,
                            children: <Widget>[
                              new Column(
                                mainAxisAlignment: MainAxisAlignment.start,
                                mainAxisSize: MainAxisSize.min,
                                children: <Widget>[
                                  new Text(
                                    'Adresse mail',
                                    style: TextStyle(
                                        fontSize: 16.0,
                                        fontWeight: FontWeight.bold),
                                  ),
                                ],
                              ),
                            ],
                          )),
                      Padding(
                          padding: EdgeInsets.only(
                              left: 25.0, right: 25.0, top: 2.0),
                          child: new Row(
                            mainAxisSize: MainAxisSize.max,
                            children: <Widget>[
                              new Flexible(
                                child: new TextFormField(
                                  onSaved: (val) => setState(() => _beneficiaire.email = val),
                                  decoration: const InputDecoration(
                                      hintText: "exemple@gmail.com"),
                                ),
                              ),
                            ],
                          )),
                      const SizedBox(height: 20.0),
                      Padding(
                          padding: EdgeInsets.only(
                              left: 25.0, right: 25.0, top: 25.0),
                          child: new Row(
                            mainAxisSize: MainAxisSize.max,
                            children: <Widget>[
                              new Column(
                                mainAxisAlignment: MainAxisAlignment.start,
                                mainAxisSize: MainAxisSize.min,
                                children: <Widget>[
                                  new Text(
                                    'Téléphone du bénéficiaire *',
                                    style: TextStyle(
                                        fontSize: 16.0,
                                        fontWeight: FontWeight.bold),
                                  ),
                                ],
                              ),
                            ],
                          )),
                      Padding(
                          padding: EdgeInsets.only(
                              left: 25.0, right: 25.0, top: 2.0),
                          child: new Row(
                            mainAxisSize: MainAxisSize.max,
                            children: <Widget>[
                              new Flexible(
                                child: new TextFormField(
                                  onSaved: (val) => setState(() => _beneficiaire.telephone = val),
                                  decoration: const InputDecoration(
                                      hintText: "Entre un téléphone"),
                                ),
                              ),
                            ],
                          )),
                      Padding(
                          padding: EdgeInsets.only(
                              left: 25.0, right: 25.0, top: 25.0),
                          child: new Row(
                            mainAxisSize: MainAxisSize.max,
                            children: <Widget>[
                              new Column(
                                mainAxisAlignment: MainAxisAlignment.start,
                                mainAxisSize: MainAxisSize.min,
                                children: <Widget>[
                                  new Text(
                                    'Pays',
                                    style: TextStyle(
                                        fontSize: 16.0,
                                        fontWeight: FontWeight.bold),
                                  ),
                                ],
                              ),
                            ],
                          )),
                      Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: <Widget>[
                            Padding(
                                padding: const EdgeInsets.all(20.0),
                                child: Container(
                                    padding: const EdgeInsets.only(left: 10.0, right: 10.0),
                                    decoration: BoxDecoration(
                                        borderRadius: BorderRadius.circular(5.0),
                                        border: Border.all()),
                                    child: DropdownButtonHideUnderline(
                                      child: DropdownButton(
                                          value: _selectedItem,
                                          items: _dropdownMenuItems,
                                          onChanged: (value) {
                                            setState(() {
                                              _selectedItem = value;
                                            });
                                          }),
                                    ))),
                          ]
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 20),
                        child: Text.rich(
                          TextSpan(children: [
                            TextSpan(
                                text: "En cliquant sur Continuer, vous acceptez ce qui suit"),
                            TextSpan(
                                text: " Termes and Conditions ",
                                style: TextStyle(
                                    fontWeight: FontWeight.bold, color: Colors.blue)),
                            TextSpan(text: "sans réserves."),
                          ]),
                        ),
                      ),
                      const SizedBox(height: 20.0),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          RaisedButton(
                            elevation: 0,
                            padding: const EdgeInsets.only(left: 170,right: 170),
                            shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(10.0)),
                            child: Text("Continuer"),
                            color: Colors.blue,
                            textColor: Colors.white,
                            onPressed: () {
                              final form = _formKey.currentState;
                              if (form.validate()) {
                                form.save();
                                _beneficiaire.saveBeneficiaire(
                                    _beneficiaire.nom,
                                    _beneficiaire.prenom,
                                  _beneficiaire.email,
                                  _beneficiaire.telephone,
                                    _beneficiaire.pays,
                                  _beneficiaire.info_complementaire
                                );
                                _showDialog(context);
    {Navigator.push(context, MaterialPageRoute(builder: (context) => NavigationPage()));};
                              }
                            },
                            /* onPressed: () {Navigator.push(context, MaterialPageRoute(builder: (context) => NavigationPage()),);},*/
                          ),
                        ],
                      )
                    ],
                  ):
                  FutureBuilder<Beneficiaire>(
                    future: _futureBeneficiaire,
                    builder: (context, snapshot) {
                      if (snapshot.hasData) {
                        return Text(snapshot.data.nom);
                      }
                      else if (snapshot.hasError) {
                        return Text("${snapshot.error}");
                      }
                      return CircularProgressIndicator();
                    },
                  ),
                ),
              )
          ),
      ),
    );
  }
}
_showDialog(BuildContext context) {
  Scaffold.of(context)
      .showSnackBar(SnackBar(content: Text('Submitting form')));
}
class ListItem {
  int value;
  String name;
  ListItem(this.value, this.name);
}
