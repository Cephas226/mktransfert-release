import 'dart:convert';
import 'dart:math';
import 'package:animated_dialog_box/animated_dialog_box.dart';
import 'package:email_validator/email_validator.dart';
import 'package:fancy_alert_dialog/fancy_alert_dialog.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:international_phone_input/international_phone_input.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/AccueilBottomBar.dart';
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
//MyGlobals myGlobals = MyGlobals();

/*
class MyGlobals {
  GlobalKey _scaffoldKey;
  MyGlobals() {
    _scaffoldKey = GlobalKey();
  }
  GlobalKey get scaffoldKey => _scaffoldKey;
}
*/

class RegisterBeneficiairePage extends StatefulWidget {
  @override
  RegisterBeneficiairePageState createState() =>
      RegisterBeneficiairePageState();
}

class RegisterBeneficiairePageState extends State<RegisterBeneficiairePage> {
  static final String path = "lib/src/pages/login/signup2.dart";

  Future<Beneficiaire> _futureBeneficiaire;
  int _mySelectionCountry=1;
  int saveReceiver_countryEntreprise=1;
  var saveReceiver_last_name = TextEditingController();
  var saveReceiver_first_name = TextEditingController();
  var saveReceiver_email = TextEditingController();
  var saveReceiver_phone = TextEditingController();
  var saveReceiver_country = TextEditingController();
  var saveReceiver_info = TextEditingController();

  var saveReceiver_last_nameEntreprise = TextEditingController();
  var saveReceiver_first_nameEntreprise = TextEditingController();
  var saveReceiver_raisonEntreprise = TextEditingController();
  var saveReceiver_nameEntreprise = TextEditingController();
  var saveReceiver_sitewebEntreprise = TextEditingController();
  var saveReceiver_emailEntreprise = TextEditingController();
  var saveReceiver_phoneEntreprise = TextEditingController();
  var saveReceiver_infoEntreprise = TextEditingController();
  String phoneNumber;
  String phoneIsoCode;
  bool visible = false;
  String confirmedNumber = '';
  String _selectedCountryCode='+224';
  String _selectedCountryCodeEntreprise='+224';
  List<String> _countryCodes = ['+224'];
  final _beneficiaire = Beneficiaire();
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final GlobalKey<FormState> _formKey2 = GlobalKey<FormState>();
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


  void onPhoneNumberChange(
      String number, String internationalizedPhoneNumber, String isoCode) {
    setState(() {
      phoneNumber = number;
      phoneIsoCode = isoCode;
    });
  }

  onValidPhoneNumber(
      String number, String internationalizedPhoneNumber, String isoCode) {
    setState(() {
      visible = true;
      confirmedNumber = internationalizedPhoneNumber;
    });
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
  /*  key:
    myGlobals.scaffoldKey;*/
    return MaterialApp(
      home: DefaultTabController(
        length: 2,
        child: Scaffold(
          appBar: AppBar(
            leading: IconButton(
              icon: Icon(Icons.arrow_back),
              color: Colors.white,
              onPressed: () => {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => ExpenseTrackerApp()),
                )
              },
            ),
            title: Text("Enregistrer un beneficiaire"),
            backgroundColor: kPrimaryColor,
            elevation: 0,
            iconTheme: IconThemeData(
              color: Colors.white,
            ),
            bottom: TabBar(
              tabs: [
                Tab(text: "Particulier", icon: Icon(Icons.person)),
                Tab(text: "Entreprise", icon: Icon(Icons.account_balance)),
              ],
            ),
          ),
          body: TabBarView(
            children: [
              Builder(
                  builder: (context) => Form(
                    key: _formKey,
                    child: SingleChildScrollView(
                      child: Container(
                        child: (_futureBeneficiaire == null)
                            ? Column(
                          //crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    Flexible(
                                        child: Container(
                                          child: new Column(
                                            mainAxisAlignment:
                                            MainAxisAlignment.start,
                                            mainAxisSize:
                                            MainAxisSize.min,
                                            children: <Widget>[
                                              new Text(
                                                'Pays',
                                                style: TextStyle(
                                                    fontSize: 16.0,
                                                    fontWeight:
                                                    FontWeight.bold),
                                              ),
                                            ],
                                          ),
                                        ))
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 20.0,
                                    right: 20.0,
                                    top: 20.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Expanded(
                                        child: Container(
                                          padding: const EdgeInsets.only(
                                              left: 100.0, right: 90.0),
                                          decoration: BoxDecoration(
                                              borderRadius:
                                              BorderRadius.circular(
                                                  5.0),
                                              border: Border.all()),
                                          child:
                                          DropdownButtonHideUnderline(
                                            child: DropdownButton(
                                              hint:
                                              Text("Choisir un pays"),
                                              items: countrydata
                                                  ?.map((item) {
                                                return DropdownMenuItem(
                                                  child: Text(item[
                                                  'country_name']),
                                                  value: item['id'],
                                                );
                                              })?.toList() ??
                                                  [],
                                              onChanged: (country) {
                                                setState(() {
                                                  // showLoaderDialog(context);
                                                  _mySelectionCountry =
                                                      country;
                                                  setState(() {
                                                    var selectedReceiverCountry =
                                                    countrydata
                                                        .map((item) =>
                                                    item)
                                                        .toList();
                                                    selectedReceiverCountry
                                                        .forEach((f) => {
                                                      if (f['id'] ==
                                                          country)
                                                        {
                                                          if (!f[
                                                          'country_isdisponible'])
                                                            {
                                                              _mySelectionCountry =
                                                              1,
                                                              showAlertDialogContry(context),
                                                            }
                                                        }
                                                    });
                                                    _mySelectionCountry =
                                                        country;
                                                  });
                                                });
                                              },
                                              value: 1,
                                            ),
                                          ),
                                        ))
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Entrez un nom*',
                                          style: TextStyle(
                                              fontSize: 16.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )),
                            //  const SizedBox(height: 5.0),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
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
                                          saveReceiver_first_name
                                              .text = val),
                                          controller:
                                                saveReceiver_first_name
                                                   ,
                                          decoration:
                                          const InputDecoration(
                                            hintText: "Entrez un nom",
                                            border: OutlineInputBorder(),
                                          ),
                                        )),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Entrez un prenom*',
                                          style: TextStyle(
                                              fontSize: 16.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
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
                                          saveReceiver_last_name
                                              .text = val),
                                          controller:
                                                saveReceiver_last_name
                                                   ,
                                          decoration:
                                          const InputDecoration(
                                            hintText: "Entrez un prenom",
                                            border: OutlineInputBorder(),
                                          ),
                                        )),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Entrez un e-mail',
                                          style: TextStyle(
                                              fontSize: 16.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
                                child: Row(
                                  children: <Widget>[
                                    Flexible(
                                        child: TextFormField(
                                          onSaved: (val) => setState(() =>
                                          saveReceiver_email.text = val),
                                          /*  validator: (value) => EmailValidator
                                                .validate(value)
                                                ? null
                                                : "Veuillez saisir un e-mail valide",*/
                                          controller: saveReceiver_email,
                                          decoration:
                                          const InputDecoration(
                                            hintText: "example@gmail.com",
                                            border: OutlineInputBorder(),
                                          ),
                                        )),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Téléphone du Bénéficiaire *',
                                          style: TextStyle(
                                              fontSize: 16.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
                                child:
                                Row(
                                  children: <Widget>[
                                    Flexible(
                                      child:
                                     DropdownButtonHideUnderline(
                                  child: ButtonTheme(
                                  alignedDropdown: true,
                                  child: DropdownButton(
                                    value: _selectedCountryCode,
                                    items: _countryCodes.map((String value) {
                                      return new DropdownMenuItem<String>(
                                          value: value,
                                          child: new Text(
                                            value,
                                            style: TextStyle(fontSize: 12.0),
                                          ));
                                    }).toList(),
                                    onChanged: (value) {
                                      setState(() {
                                        _selectedCountryCode = value;
                                      });
                                              },
                                              style: Theme.of(context).textTheme.title,
                                            ),
                                          ),
                                      ),

                                      /*     child: TextFormField(
                                                validator: (value) {
                                                  if (value.isEmpty) {
                                                    return 'Veuillez saisir un telephone';
                                                  }
                                                  return null;
                                                },
                                                onSaved: (val) => setState(() =>
                                                    saveReceiver_phone.text =
                                                        val),
                                                controller:
                                                    TextEditingController()
                                                      ..text =
                                                          saveReceiver_phone
                                                              .text,
                                                decoration:
                                                    const InputDecoration(
                                                  hintText:
                                                      "Entre un telephone",
                                                  border: OutlineInputBorder(),
                                                ),
                                              )*/
                                    ),
                                    SizedBox(
                                      width: 250,
                                      child: Row(
                                        children: <Widget>[
                                          Expanded(child: Container(
                                            width: double.infinity,
                                            margin: new EdgeInsets.only(top: 10.0, bottom: 10.0, right: 3.0),
                                            color: Colors.white,
                                            child: new TextFormField(
                                              maxLength: 9,
                                              onSaved: (val) => setState(() => saveReceiver_phone.text = val),
                                              controller: saveReceiver_phone,
                                              validator: (value) {
                                                if (value.isEmpty) {
                                                  return 'Veuillez entre un numero valide';
                                                }
                                                else {
                                                  return null;
                                                }
                                              },
                                              keyboardType: TextInputType.number,
                                              decoration: new InputDecoration(
                                                  counter: Offstage(),
                                                  contentPadding: const EdgeInsets.all(12.0),
                                                  border: new OutlineInputBorder(
                                                      borderSide:
                                                      new BorderSide(color: const Color(0xFFE0E0E0), width: 0.1)),
                                                  fillColor: Colors.white,
                                                  //prefixIcon: countryDropDown,
                                                  hintText: 'Telephone',
                                                  labelText: 'Telephone'),
                                            ),
                                          )),
                                          // more widgets
                                        ],
                                      ),
                                    )
                                  ],
                                )
                            ),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new
                                Row(
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Informations complémentaire(optionnel)',
                                          style: TextStyle(
                                              fontSize: 12.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )
                            ),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
                                child: Row(
                                  children: <Widget>[
                                    Flexible(
                                        child: TextFormField(
                                          onSaved: (val) => setState(() =>
                                          saveReceiver_info.text =
                                              val),
                                          controller: saveReceiver_info,
                                          maxLines: 10,
                                          decoration:
                                          const InputDecoration(
                                            hintText:
                                            "Information complémentaire",
                                            border: OutlineInputBorder(),
                                          ),
                                        )),
                                  ],
                                )),
                            const SizedBox(height: 20.0),
                            Row(
                              mainAxisAlignment:
                              MainAxisAlignment.center,
                              children: <Widget>[
                                Flexible(
                                  child: Container(
                                    width: double.infinity,
                                    child: RaisedButton(
                                      elevation: 0,
                                      shape: RoundedRectangleBorder(
                                          borderRadius:
                                          BorderRadius.circular(
                                              10.0)),
                                      child: Text("Valider"),
                                      color: kPrimaryColor,
                                      textColor: Colors.white,
                                      onPressed: () {
                                        final form =
                                            _formKey.currentState;
                                        if (_formKey.currentState
                                            .validate()) {
                                          print('hello');
                                          print(
                                              {
                                                "country_id":
                                                _mySelectionCountry,
                                                "receiver_first_name":
                                                saveReceiver_first_name
                                                    .text,
                                                "receiver_last_name":
                                                saveReceiver_last_name
                                                    .text,
                                                "receiver_phone":
                                                saveReceiver_phone.text,
                                                "receiver_email":
                                                saveReceiver_email
                                                    .text,
                                                "receiver_info":
                                                saveReceiver_info
                                                    .text,
                                              }
                                          );
                                          form.save();
                                          Random random =
                                          new Random();
                                          int randomId =
                                          random.nextInt(100);
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
                                                  saveReceiver_last_name
                                                      .text,
                                                  "receiver_phone":
                                                  saveReceiver_phone
                                                      .text,
                                                  "receiver_email":
                                                  saveReceiver_email
                                                      .text,
                                                  "receiver_info":
                                                  saveReceiver_info
                                                      .text,
                                                  "is_company": false,
                                                }
                                              ]));

                                         Navigator.push(
                                            context,
                                            MaterialPageRoute(
                                                builder: (context) =>
                                                    ExpenseTrackerApp()
                                            ),
                                          );
                                        }
                                      },

                                    ),
                                  ),
                                )
                              ],
                            )
                          ],
                        )
                            : FutureBuilder<Beneficiaire>(
                          future: _futureBeneficiaire,
                          builder: (context, snapshot) {
                            if (snapshot.hasData) {
                              return Text(
                                  snapshot.data.receiver_first_name);
                            } else if (snapshot.hasError) {
                              return Text("${snapshot.error}");
                            }
                            return CircularProgressIndicator();
                          },
                        ),
                      ),
                    ),
                  )),
              Builder(
                  builder: (context) => Form(
                    key: _formKey2,
                    child: SingleChildScrollView(
                      child: Container(
                        child: (_futureBeneficiaire == null)
                            ? Column(
                          crossAxisAlignment:
                          CrossAxisAlignment.start,
                          children: <Widget>[
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Pays',
                                          style: TextStyle(
                                              fontSize: 16.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 20.0,
                                    right: 20.0,
                                    top: 20.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Flexible(
                                        child: Container(
                                          padding: const EdgeInsets.only(
                                              left: 100.0, right: 90.0),
                                          decoration: BoxDecoration(
                                              borderRadius:
                                              BorderRadius.circular(
                                                  5.0),
                                              border: Border.all()),
                                          child:
                                          DropdownButtonHideUnderline(
                                            child: DropdownButton(
                                              hint:
                                              Text("Choisir un pays"),
                                              items: countrydata
                                                  ?.map((item) {
                                                return DropdownMenuItem(
                                                  child: Text(item[
                                                  'country_name']),
                                                  value: item['id'],
                                                );
                                              })?.toList() ??
                                                  [],
                                              onChanged: (country) {
                                                setState(() {
                                                  // showLoaderDialog(context);
                                                  saveReceiver_countryEntreprise =
                                                      country;
                                                  setState(() {
                                                    var selectedReceiverCountry =
                                                    countrydata
                                                        .map((item) =>
                                                    item)
                                                        .toList();
                                                    selectedReceiverCountry
                                                        .forEach((f) => {
                                                      if (f['id'] ==
                                                          country)
                                                        {
                                                          if (!f[
                                                          'country_isdisponible'])
                                                            {
                                                              saveReceiver_countryEntreprise =
                                                              1,
                                                              showAlertDialogContry(context),
                                                            }
                                                        }
                                                    });
                                                    saveReceiver_countryEntreprise =
                                                        country;
                                                  });
                                                });
                                              },
                                              value: 1,
                                            ),
                                          ),
                                        ))
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Raison Sociale*',
                                          style: TextStyle(
                                              fontSize: 16.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )),
                            //  const SizedBox(height: 5.0),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
                                child: Row(
                                  children: <Widget>[
                                    Flexible(
                                        child: TextFormField(
                                          validator: (value) {
                                            if (value.isEmpty) {
                                              return 'Veuillez saisir une raison socaile';
                                            }
                                            return null;
                                          },
                                          onSaved: (val) => setState(() =>
                                          saveReceiver_raisonEntreprise
                                              .text = val),
                                          controller:
                                                saveReceiver_raisonEntreprise,
                                          decoration:
                                          const InputDecoration(
                                            hintText:
                                            "Entrez la raison sociale",
                                            border: OutlineInputBorder(),
                                          ),
                                        )),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Site Web(optionnel)',
                                          style: TextStyle(
                                              fontSize: 16.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
                                child: Row(
                                  children: <Widget>[
                                    Flexible(
                                        child: TextFormField(
                                          onSaved: (val) => setState(() =>
                                          saveReceiver_sitewebEntreprise
                                              .text = val),
                                          controller:
                                                saveReceiver_sitewebEntreprise,
                                          decoration:
                                          const InputDecoration(
                                            hintText:
                                            "Entrez le site Web",
                                            border: OutlineInputBorder(),
                                          ),
                                        )),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Nom du contact*',
                                          style: TextStyle(
                                              fontSize: 16.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
                                child: Row(
                                  children: <Widget>[
                                    Flexible(
                                        child: TextFormField(
                                          validator: (value) {
                                            if (value.isEmpty) {
                                              return 'Veuillez entre un nom';
                                            }
                                            else {
                                              return null;
                                            }
                                          },
                                          onSaved: (val) => setState(() =>
                                          saveReceiver_first_nameEntreprise
                                              .text = val),
                                          controller:saveReceiver_first_nameEntreprise,
                                          decoration:
                                          const InputDecoration(
                                            hintText: "Entrez le Nom",
                                            border: OutlineInputBorder(),
                                          ),
                                        )),
                                  ],
                                )),

                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Prenom du contact*',
                                          style: TextStyle(
                                              fontSize: 16.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
                                child: Row(
                                  children: <Widget>[
                                    Flexible(
                                        child: TextFormField(
                                          validator: (value) {
                                            if (value.isEmpty) {
                                              return 'Veuillez entre un prenom';
                                            }
                                            else {
                                              return null;
                                            }
                                          },
                                          onSaved: (val) => setState(() =>
                                          saveReceiver_last_nameEntreprise.text = val),
                                          controller: saveReceiver_last_nameEntreprise,
                                          decoration:const InputDecoration(
                                            hintText: "Entrez le Nom",
                                            border: OutlineInputBorder(),
                                          ),
                                        )),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Email(optionnel)',
                                          style: TextStyle(
                                              fontSize: 16.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
                                child: Row(
                                  children: <Widget>[
                                    Flexible(
                                        child: TextFormField(
                                          onSaved: (val) => setState(() =>
                                          saveReceiver_emailEntreprise.text = val),
                                          /*validator: (value) => EmailValidator
                                                .validate(value)
                                                ? null
                                                : "Veuillez saisir un e-mail valide",*/
                                          controller:saveReceiver_emailEntreprise,
                                          decoration:
                                          const InputDecoration(
                                            hintText:
                                            "Entre un email",
                                            border: OutlineInputBorder(),
                                          ),
                                        )),
                                  ],
                                )),

                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Telephone*',
                                          style: TextStyle(
                                              fontSize: 16.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )),
                           /* Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
                                child: Row(
                                  children: <Widget>[
                                    Flexible(
                                        child: TextFormField(
                                          onSaved: (val) => setState(() =>
                                          saveReceiver_phoneEntreprise
                                              .text = val),
                                          validator: (value) {
                                            if (value.isEmpty) {
                                              return 'Veuillez saisir un telephone';
                                            }
                                            return null;
                                          },
                                          controller: TextEditingController()
                                            ..text =
                                                saveReceiver_phoneEntreprise
                                                    .text,
                                          decoration:
                                          const InputDecoration(
                                            hintText:
                                            "Entre un telephone",
                                            border: OutlineInputBorder(),
                                          ),
                                        )),
                                  ],
                                )),*/
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
                                child: Row(
                                  children: <Widget>[
                                    Flexible(
                                      child:
                                      DropdownButtonHideUnderline(
                                        child: ButtonTheme(
                                          alignedDropdown: true,
                                          child: DropdownButton(
                                            value: _selectedCountryCodeEntreprise,
                                            items: _countryCodes.map((String value) {
                                              return new DropdownMenuItem<String>(
                                                  value: value,
                                                  child: new Text(
                                                    value,
                                                    style: TextStyle(fontSize: 12.0),
                                                  ));
                                            }).toList(),
                                            onChanged: (value) {
                                              setState(() {
                                                _selectedCountryCodeEntreprise = value;
                                              });
                                            },
                                            style: Theme.of(context).textTheme.title,
                                          ),
                                        ),
                                      ),

                                      /*     child: TextFormField(
                                                validator: (value) {
                                                  if (value.isEmpty) {
                                                    return 'Veuillez saisir un telephone';
                                                  }
                                                  return null;
                                                },
                                                onSaved: (val) => setState(() =>
                                                    saveReceiver_phone.text =
                                                        val),
                                                controller:
                                                    TextEditingController()
                                                      ..text =
                                                          saveReceiver_phone
                                                              .text,
                                                decoration:
                                                    const InputDecoration(
                                                  hintText:
                                                      "Entre un telephone",
                                                  border: OutlineInputBorder(),
                                                ),
                                              )*/
                                    ),
                                    SizedBox(
                                      width: 250,
                                      child: Row(
                                        children: <Widget>[
                                          Expanded(child: Container(
                                            width: double.infinity,
                                            margin: new EdgeInsets.only(top: 10.0, bottom: 10.0, right: 3.0),
                                            color: Colors.white,
                                            child: new TextFormField(
                                              maxLength: 9,
                                              onSaved: (val) => setState(() => saveReceiver_phoneEntreprise.text = val),
                                              controller: saveReceiver_phoneEntreprise,
                                              validator: (value) {
                                                if (value.isEmpty) {
                                                  return 'Veuillez entrer un telephone';
                                                }
                                                else {
                                                  return null;
                                                }
                                              },
                                              keyboardType: TextInputType.number,
                                              decoration: new InputDecoration(
                                                  counter: Offstage(),
                                                  contentPadding: const EdgeInsets.all(12.0),
                                                  border: new OutlineInputBorder(
                                                      borderSide:
                                                      new BorderSide(color: const Color(0xFFE0E0E0), width: 0.1)),
                                                  fillColor: Colors.white,
                                                  //prefixIcon: countryDropDown,
                                                  hintText: 'Telephone',
                                                  labelText: 'Telephone'),
                                            ),
                                          )),
                                          // more widgets
                                        ],
                                      ),
                                    )
                                  ],
                                )
                            ),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 25.0),
                                child: new Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: <Widget>[
                                    new Column(
                                      mainAxisAlignment:
                                      MainAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: <Widget>[
                                        new Text(
                                          'Informations complémentaire(optionnel)',
                                          style: TextStyle(
                                              fontSize: 12.0,
                                              fontWeight:
                                              FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                )),
                            Padding(
                                padding: EdgeInsets.only(
                                    left: 25.0,
                                    right: 25.0,
                                    top: 5.0),
                                child: Row(
                                  children: <Widget>[
                                    Flexible(
                                        child: TextFormField(
                                          maxLines: 10,
                                          onSaved: (val) => setState(() =>
                                          saveReceiver_infoEntreprise
                                              .text = val),
                                          controller:
                                          saveReceiver_infoEntreprise,
                                          decoration:
                                          const InputDecoration(
                                            hintText:
                                            "Information complémentaire",
                                            border: OutlineInputBorder(),
                                          ),
                                        )
                                    ),
                                  ],
                                )),
                            const SizedBox(height: 20.0),
                            Row(
                              mainAxisAlignment:
                              MainAxisAlignment.center,
                              children: <Widget>[
                                Flexible(
                                  child: Container(
                                    width: double.infinity,
                                    child: RaisedButton(
                                      elevation: 0,
                                      /*padding: const EdgeInsets.only(
                                          left: 170, right: 170),*/
                                      shape: RoundedRectangleBorder(
                                          borderRadius:
                                          BorderRadius.circular(
                                              10.0)),
                                      child: Text("Valider"),
                                      color: kPrimaryColor,
                                      textColor: Colors.white,
                                      onPressed: () {

                                        final form =
                                            _formKey2.currentState;
                                        if (_formKey2.currentState
                                            .validate()) {
                                          Random random =
                                          new Random();
                                          int randomId =
                                          random.nextInt(100);
                                          print(
                                              {
                                                "id": randomId,
                                                "receiver_last_name":
                                              saveReceiver_last_nameEntreprise.text,
                                                "receiver_first_name":
                                                saveReceiver_first_nameEntreprise.text,
                                                "receiver_company":
                                                saveReceiver_raisonEntreprise
                                                    .text,
                                                "receiver_phone":
                                                saveReceiver_phoneEntreprise
                                                    .text,
                                                "receiver_country":
                                                saveReceiver_countryEntreprise,
                                                "receiver_email":
                                                saveReceiver_emailEntreprise
                                                    .text,
                                                "receiver_siteweb":
                                                saveReceiver_sitewebEntreprise
                                                    .text,
                                                "receiver_description":
                                                saveReceiver_infoEntreprise
                                                    .text,
                                                "is_company": true,
                                              }
                                          );
                                          form.save();
                                          storage.write(
                                              key: "beneficiaireNew",
                                              value: json.encode([
                                                {
                                                  "id": randomId,
                                                  "receiver_last_name": saveReceiver_last_nameEntreprise.text,
                                                  "receiver_first_name":saveReceiver_first_nameEntreprise.text,
                                                  "receiver_company": saveReceiver_raisonEntreprise.text,
                                                  "receiver_phone": saveReceiver_phoneEntreprise.text,
                                                  "receiver_country": saveReceiver_countryEntreprise,
                                                  "receiver_email": saveReceiver_emailEntreprise.text,
                                                  "receiver_siteweb": saveReceiver_sitewebEntreprise.text,
                                                  "receiver_description": saveReceiver_infoEntreprise.text,
                                                  "is_company": true,
                                                }
                                              ]));
                                         Navigator.push(
                                            context,
                                            MaterialPageRoute(
                                                builder: (context) =>
                                                    ExpenseTrackerApp()),
                                          );
                                        }
                                      },
                                    ),
                                  ),
                                )
                              ],
                            )
                          ],
                        )
                            : FutureBuilder<Beneficiaire>(
                          future: _futureBeneficiaire,
                          builder: (context, snapshot) {
                            if (snapshot.hasData) {
                              return Text(
                                  snapshot.data.receiver_first_name);
                            } else if (snapshot.hasError) {
                              return Text("${snapshot.error}");
                            }
                            return CircularProgressIndicator();
                          },
                        ),
                      ),
                    ),
                  )),
            ],
          ),
        ),
      ),
    );
  }

  showAlertDialogContry(BuildContext context) {  // set up the button
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
                      'Cette distination est indisponible'
                  )
                ],
              ),
            ),
          ),
          actions: <Widget>[
            FlatButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text("Ok"))
          ],
        );
      },
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

