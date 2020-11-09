import 'dart:convert';
import 'dart:math';
import 'package:animated_dialog_box/animated_dialog_box.dart';
import 'package:email_validator/email_validator.dart';
import 'package:fancy_alert_dialog/fancy_alert_dialog.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/beneficiaire.dart';
import 'package:mktransfert/src/page/navigation.dart';
import 'package:mktransfert/src/page/transaction.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/src/page/transfertRecap.dart';
import 'chooseBeneficiaire.dart';
import 'loginPage.dart';
import 'mesclasses/beneficiaireClasses.dart';
import 'operations/beneficiaireOperations.dart';

List countrydata = List();
MyGlobals myGlobals = MyGlobals();

class MyGlobals {
  GlobalKey _scaffoldKey;
  MyGlobals() {
    _scaffoldKey = GlobalKey();
  }
  GlobalKey get scaffoldKey => _scaffoldKey;
}

class RegisterBeneficiairePage extends StatefulWidget {
  @override
  RegisterBeneficiairePageState createState() =>
      RegisterBeneficiairePageState();
}

class RegisterBeneficiairePageState extends State<RegisterBeneficiairePage> {
  static final String path = "lib/src/pages/login/signup2.dart";
  Future<Beneficiaire> _futureBeneficiaire;
  int _mySelectionCountry;
  var saveReceiver_last_name = TextEditingController();
  var saveReceiver_first_name = TextEditingController();
  var saveReceiver_email = TextEditingController();
  var saveReceiver_phone = TextEditingController();
  var saveReceiver_country = TextEditingController();
  var saveReceiver_info = TextEditingController();

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

  Future<String> displayCountriesInfo() async {
    var jwt = await storage.read(key: "jwt");
    var countryList = List();
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var res = await http.get(Uri.encodeFull(apiUrl + '$user_id'), headers: {
      "Accept": "application/json",
      'Authorization': 'Bearer $token',
    });

    var resBody = json.decode(res.body);
    resBody['data_country']?.forEach((k, v) {
      countryList.add(v[0]);
    });
    countrydata = countryList;
    print(countrydata);
    setState(() {
      countrydata = countryList;
    });
    return 'succès';
  }

  Future<AlertDialog> _showDialogCountry(BuildContext context) {
    return showDialog<AlertDialog>(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          content: Container(
            margin: EdgeInsets.all(8.0),
            child: Form(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[Text('Ce pays est insdisponible')],
              ),
            ),
          ),
          actions: <Widget>[
            Container(
              width: 120,
              child: RaisedButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                color: kPrimaryColor,
                textColor: Colors.white,
                child: Text(
                  "Ok",
                  style: TextStyle(
                    fontWeight: FontWeight.w600,
                  ),
                ),
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.all(Radius.circular(
                  8,
                ))),
              ),
            )
          ],
        );
      },
    );
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    this.displayCountriesInfo();
  }

  @override
  Widget build(BuildContext context) {
    key:
    myGlobals.scaffoldKey;
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
                    child: (_futureBeneficiaire == null)
                        ? Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              /* const SizedBox(height: 20.0),
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
                    ),*/
                              Padding(
                                  padding: EdgeInsets.only(
                                      left: 25.0, right: 25.0, top: 2.0),
                                  child: new Row(
                                    mainAxisSize: MainAxisSize.max,
                                    children: <Widget>[
                                      new Flexible(
                                          child: Container(
                                        padding: const EdgeInsets.only(
                                            left: 10.0, right: 10.0),
                                        decoration: BoxDecoration(
                                            borderRadius:
                                                BorderRadius.circular(5.0),
                                            border: Border.all()),
                                        child: DropdownButtonHideUnderline(
                                          child: DropdownButton(
                                            hint: Text("Choisir un pays"),
                                            items: countrydata?.map((item) {
                                                  return DropdownMenuItem(
                                                    child: Text(
                                                        item['country_name']),
                                                    value: item['id'],
                                                  );
                                                })?.toList() ??
                                                [],
                                            onChanged: (country) {
                                              setState(() {
                                                // showLoaderDialog(context);
                                                _mySelectionCountry = country;
                                                setState(() {
                                                  var selectedReceiverCountry =
                                                      countrydata
                                                          .map((item) => item)
                                                          .toList();
                                                  selectedReceiverCountry
                                                      .forEach((f) => {
                                                            if (f['id'] ==
                                                                country)
                                                              {
                                                                if (!f[
                                                                    'country_isdisponible'])
                                                                  {
                                                                    print(f),
                                                                    _mySelectionCountry =
                                                                        1,
                                                                    showAlertDialog(
                                                                        context),
                                                                  }
                                                              }
                                                          });
                                                  _mySelectionCountry = country;
                                                });
                                              });
                                            },
                                            value: 1,
                                          ),
                                        ),
                                      ))
                                    ],
                                  )),
                              const SizedBox(height: 20.0),
                              Padding(
                                  padding: EdgeInsets.only(
                                      left: 25.0, right: 25.0, top: 25.0),
                                  child: Row(
                                    children: <Widget>[
                                      Flexible(
                                          child: TextFormField(
                                        validator: (value) {
                                          if (value.isEmpty) {
                                            return 'Veuillez saisir un nom';
                                          }
                                          return null;
                                        },
                                        onSaved: (val) => setState(() =>
                                            saveReceiver_last_name.text = val),
                                        controller: TextEditingController()
                                          ..text = saveReceiver_last_name.text,
                                        decoration: const InputDecoration(
                                          hintText: "Entrez un nom",
                                          border: OutlineInputBorder(),
                                        ),
                                      )),
                                    ],
                                  )),
                              const SizedBox(height: 20.0),
                              Padding(
                                  padding: EdgeInsets.only(
                                      left: 25.0, right: 25.0, top: 25.0),
                                  child: Row(
                                    children: <Widget>[
                                      Flexible(
                                          child: TextFormField(
                                        validator: (value) {
                                          if (value.isEmpty) {
                                            return 'Veuillez saisir un prenom';
                                          }
                                          return null;
                                        },
                                        onSaved: (val) => setState(() =>
                                            saveReceiver_first_name.text = val),
                                        controller: TextEditingController()
                                          ..text = saveReceiver_first_name.text,
                                        decoration: const InputDecoration(
                                          hintText: "Entrez un prenom",
                                          border: OutlineInputBorder(),
                                        ),
                                      )),
                                    ],
                                  )),
                              const SizedBox(height: 20.0),
                              Padding(
                                  padding: EdgeInsets.only(
                                      left: 25.0, right: 25.0, top: 25.0),
                                  child: Row(
                                    children: <Widget>[
                                      Flexible(
                                          child: TextFormField(
                                        onSaved: (val) => setState(() =>
                                            saveReceiver_email.text = val),
                                        validator: (value) => EmailValidator
                                                .validate(value)
                                            ? null
                                            : "Veuillez saisir un e-mail valide",
                                        controller: TextEditingController()
                                          ..text = saveReceiver_email.text,
                                        decoration: const InputDecoration(
                                          hintText: "example@gmail.com",
                                          border: OutlineInputBorder(),
                                        ),
                                      )),
                                    ],
                                  )),
                              const SizedBox(height: 20.0),
                              Padding(
                                  padding: EdgeInsets.only(
                                      left: 25.0, right: 25.0, top: 25.0),
                                  child: Row(
                                    children: <Widget>[
                                      Flexible(
                                          child: TextFormField(
                                            validator: (value) {
                                              if (value.isEmpty) {
                                                return 'Veuillez saisir un telephone';
                                              }
                                              return null;
                                            },
                                            onSaved: (val) => setState(() =>
                                            saveReceiver_phone.text = val),
                                            controller: TextEditingController()
                                              ..text = saveReceiver_phone.text,
                                            decoration: const InputDecoration(
                                              hintText: "Entre un telephone",
                                              border: OutlineInputBorder(),
                                            ),
                                          )),
                                    ],
                                  )),
                              const SizedBox(height: 20.0),
                              Padding(
                                  padding: EdgeInsets.only(
                                      left: 25.0, right: 25.0, top: 25.0),
                                  child: Row(
                                    children: <Widget>[
                                      Flexible(
                                          child: TextFormField(
                                            onSaved: (val) => setState(() =>
                                            saveReceiver_info.text = val),
                                            controller:  saveReceiver_info,
                                            decoration: const InputDecoration(
                                              hintText: "Information complémentaire",
                                              border: OutlineInputBorder(),
                                            ),
                                          )),
                                    ],
                                  )),
                              Padding(
                                padding: const EdgeInsets.symmetric(
                                    horizontal: 40, vertical: 20),
                                child: Text.rich(
                                  TextSpan(children: [
                                    TextSpan(
                                        text:
                                            "En cliquant sur Continuer, vous acceptez ce qui suit"),
                                    TextSpan(
                                        text: " Termes and Conditions ",
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            color: Colors.blue)),
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
                                    padding: const EdgeInsets.only(
                                        left: 170, right: 170),
                                    shape: RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius.circular(10.0)),
                                    child: Text("Enregistrer"),
                                    color: kPrimaryColor,
                                    textColor: Colors.white,
                                    onPressed: () {
                                      final form = _formKey.currentState;
                                      if (_formKey.currentState.validate()) {
                                        form.save();
                                        Random random = new Random();
                                        int randomId = random.nextInt(100);
                                        storage.write(
                                            key: "beneficiaireNew",
                                            value: json.encode([
                                              {
                                                "id": randomId,
                                                "country_id":
                                                    _mySelectionCountry,
                                                "receiver_first_name":
                                                    saveReceiver_first_name
                                                        .text,
                                                "receiver_last_name":
                                                    saveReceiver_last_name.text,
                                                "receiver_phone":
                                                    saveReceiver_phone.text,
                                                "receiver_email":
                                                    saveReceiver_email.text,
                                                "receiver_info":
                                                saveReceiver_info.text,
                                              }
                                            ]));
                                        //_showDialog(context);
                                        Navigator.push(
                                          context,
                                          MaterialPageRoute(
                                              builder: (context) =>
                                                  ExpenseTrackerApp()),
                                        );
                                      }
                                    },
                                    /* onPressed: () {Navigator.push(context, MaterialPageRoute(builder: (context) => NavigationPage()),);},*/
                                  ),
                                ],
                              )
                            ],
                          )
                        : FutureBuilder<Beneficiaire>(
                            future: _futureBeneficiaire,
                            builder: (context, snapshot) {
                              if (snapshot.hasData) {
                                return Text(snapshot.data.receiver_first_name);
                              } else if (snapshot.hasError) {
                                return Text("${snapshot.error}");
                              }
                              return CircularProgressIndicator();
                            },
                          ),
                  ),
                )),
      ),
    );
  }
}

_showDialog(BuildContext context) {
  Scaffold.of(context).showSnackBar(SnackBar(content: Text('Submitting form')));
}

class ListItem {
  int value;
  String name;
  ListItem(this.value, this.name);
}
