import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:direct_select/direct_select.dart';
import 'package:fancy_alert_dialog/fancy_alert_dialog.dart';
//import 'package:fancy_dialog/fancy_dialog.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/mesclasses/beneficiaireClasses.dart';
import 'package:mktransfert/src/page/operations/beneficiaireOperations.dart';
import 'package:mktransfert/src/page/pagePrincipale.dart';
import 'package:mktransfert/src/page/payement-NoTouch.dart';
import 'package:mktransfert/src/page/paymentPageXYX.dart';
import 'package:mktransfert/src/page/registerBeneficiaire.dart';
import 'package:mktransfert/src/utils/oval-right-clipper.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
//import 'package:stripe_payment/stripe_payment.dart';

import 'AccueilBottomBar.dart';

class TransactionPage extends StatefulWidget {
  static final String path = "lib/src/pages/login/auth3.dart";

  @override
  _TransactionState createState() => _TransactionState();
}

class _TransactionState extends State<TransactionPage> {
  final fromTextControllerSender = TextEditingController();
  final fromTextControllerReceiver = TextEditingController();
  final fromTextControllerToReceiveMontant = TextEditingController();
  final fromTextControllerCommission = TextEditingController();
  final fromTextControllerTotal = TextEditingController();

  var editReceiver_last_name = TextEditingController();
  var editReceiver_first_name = TextEditingController();
  var editReceiver_email = TextEditingController();
  var editReceiver_phone = TextEditingController();
  var editReceiver_country = TextEditingController();

  int _beneficiaireID;
  int _mySelectionPointRetrait;
  String _senderCurrency="eur";
  String _receiverCurrency;
  double _convertResult;

  double _stripeAmount;

  double _taux;
  double _conversion_eur;
  double _conversion_usd;

  var country_isdisponible;

  String _mySelectionCountry;
  var receiver_point_retait = List();
  String _nom(dynamic beneficiaire) {
    return beneficiaire['nom'];
  }

  final _beneficiaire = Beneficiaire();
  List AllBeneficiaire;
  List data = List();
  var testCountry = List();
  List countrydata = List();
  Future<List<dynamic>> getSWData() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var res = await http.get(Uri.encodeFull(apiUrl + '$user_id'), headers: {
      "Accept": "application/json",
      'Authorization': 'Bearer $token',
    });
    var countryList = List();
    var point_retait = List();
    var beneficiaireList = List();
    var resBody = json.decode(res.body);
    var beneficiaireInfo = await storage.read(key: "beneficiaire");

    if(beneficiaireInfo != null){
      List responseJsonBeneficiaire = json.decode(beneficiaireInfo);
      responseJsonBeneficiaire.forEach((element) {
        beneficiaireList.add(element);
      });
    }
    resBody['data_beneficiaire']?.forEach((k, v) {
      beneficiaireList.add(v[0]);
    });
    resBody['data_country']?.forEach((k, v) {
      countryList.add(v[0]);
    });
    data = beneficiaireList;
    countrydata = countryList;
    setState(() {
      data = beneficiaireList;
      countrydata = countryList;
    });
    return beneficiaireList;
  }

  displayPaymentInfo() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var res = await http.get(
        Uri.encodeFull(
            'https://www.mktransfert.com/api/payment/' +
                '$user_id'),
        headers: {
          "Accept": "application/json",
          'Authorization': 'Bearer $token',
        });
    if (res.statusCode == 200) {

      var resBody = json.decode(res.body);

      _senderCurrency = resBody['API_transac_data']['devise_sender'];
      _taux=resBody['API_transac_data']['taux'];
      _conversion_eur=resBody['API_transac_data']['conversion_eur'];
      _conversion_usd=resBody['API_transac_data']['conversion_usd'];

      resBody['point_retait']?.forEach((k, v) {
        receiver_point_retait.add(v[0]);
      });
    }
  }

  //PaymentMethod _paymentMethod;
  String _error;
  List<String> currencies;
  String fromCurrency = "USD";
  String toCurrency = "GBP";
  String result;
  Color color2 = _colorFromHex("#b74093");
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  int selectedIndex1 = 0;
  int _valueSender = 1;
  int _valueReceiver = 1;

  void _showBeneficiaireInfo() {
    String dialogText;
    showDialog(
      context: context,
      builder: (BuildContext context) {
        // return object of type Dialog
        return StatefulBuilder(
            builder: (BuildContext context, StateSetter setState) {
              return AlertDialog(
                title: Container(
                  child: Text("Informations du bénéficiaire"),
                ),
                content: SingleChildScrollView(
                    child: Container(
                        height: 400.0, // Change as per your requirement
                        width: 400.0,
                        child: FutureBuilder<List<dynamic>>(
                            future: getSWData(),
                            builder:
                                (BuildContext context, AsyncSnapshot snapshot) {
                              if (snapshot.hasData) {
                                testCountry = List();
                                countrydata.forEach((element) {
                                  testCountry.add(element);
                                });
                                var selectedBeneficiaire= data.map((item) => item).toList();
                                selectedBeneficiaire.where((f) => f["id"] == _beneficiaireID);
                                print(selectedBeneficiaire);

                                selectedBeneficiaire.forEach((b) {
                                  if(b['id']==_beneficiaireID){
                                    print(b);
                                    editReceiver_first_name.text =
                                    b["receiver_first_name"];
                                    editReceiver_last_name.text =
                                    b["receiver_last_name"];
                                    editReceiver_country.text = b["receiver_country"];
                                    editReceiver_phone.text = b["receiver_phone"];
                                    editReceiver_email.text = b["receiver_email"];
                                  }
                                });
                                return ListView.builder(
                                    shrinkWrap: true,
                                    padding: EdgeInsets.all(8),
                                    itemCount: 1,
                                    itemBuilder: (BuildContext context, int index) {
                                      return Container(
                                        child: Form(
                                          child: Column(
                                            children: <Widget>[
                                              Padding(
                                                  padding: EdgeInsets.only(
                                                      left: 25.0,
                                                      right: 25.0,
                                                      top: 2.0),
                                                  child: new Row(
                                                    mainAxisSize: MainAxisSize.max,
                                                    children: <Widget>[
                                                      new Flexible(
                                                          child: Container(
                                                            padding:
                                                            const EdgeInsets.only(
                                                                left: 10.0,
                                                                right: 10.0),
                                                            decoration: BoxDecoration(
                                                                borderRadius:
                                                                BorderRadius
                                                                    .circular(5.0),
                                                                border: Border.all()),
                                                            child:
                                                            DropdownButtonHideUnderline(
                                                              child: DropdownButton(
                                                                hint: Text(
                                                                    "Choisir un pays"),
                                                                items: testCountry
                                                                    ?.map((item) {
                                                                  return DropdownMenuItem(
                                                                    child: Text(item[
                                                                    'country_name']),
                                                                    value: item[
                                                                    'id']
                                                                        .toString(),
                                                                  );
                                                                })?.toList() ??
                                                                    [],
                                                                onChanged: (country) {
                                                                  setState(() {
                                                                    // showLoaderDialog(context);
                                                                    _mySelectionCountry =
                                                                        country;
                                                                  });
                                                                },
                                                                value:
                                                                _mySelectionCountry,
                                                              ),
                                                            ),
                                                          )
                                                      )
                                                    ],
                                                  )
                                              ),
                                              const SizedBox(height: 20.0),
                                              Padding(
                                                  padding: EdgeInsets.only(
                                                      left: 25.0,
                                                      right: 25.0,
                                                      top: 2.0),
                                                  child: Row(
                                                    mainAxisSize: MainAxisSize.max,
                                                    children: <Widget>[
                                                      Flexible(
                                                        child: new TextFormField(
                                                          onSaved: (val) =>
                                                              setState(() =>
                                                              editReceiver_last_name
                                                                  .text = val),
                                                          controller:
                                                          TextEditingController()
                                                            ..text =
                                                                editReceiver_last_name
                                                                    .text,
                                                          decoration:
                                                          const InputDecoration(
                                                            hintText:
                                                            "Entrez un nom",
                                                            border:
                                                            OutlineInputBorder(),
                                                          ),
                                                        ),
                                                      ),
                                                    ],
                                                  )),
                                              const SizedBox(height: 20.0),
                                              Padding(
                                                padding: EdgeInsets.only(
                                                    left: 25.0,
                                                    right: 25.0,
                                                    top: 2.0),
                                                child: new Row(
                                                  mainAxisSize: MainAxisSize.max,
                                                  children: <Widget>[
                                                    new Flexible(
                                                      child: new TextFormField(
                                                        onSaved: (val) => setState(
                                                                () =>
                                                            editReceiver_first_name
                                                                .text = val),
                                                        controller:
                                                        TextEditingController()
                                                          ..text =
                                                              editReceiver_first_name
                                                                  .text,
                                                        decoration:
                                                        const InputDecoration(
                                                          hintText:
                                                          "Entrez un prenom",
                                                          border:
                                                          OutlineInputBorder(),
                                                        ),
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                              ),
                                              const SizedBox(height: 20.0),
                                              Padding(
                                                  padding: EdgeInsets.only(
                                                      left: 25.0,
                                                      right: 25.0,
                                                      top: 2.0),
                                                  child: new Row(
                                                    mainAxisSize: MainAxisSize.max,
                                                    children: <Widget>[
                                                      new Flexible(
                                                        child: new TextFormField(
                                                          onSaved: (val) =>
                                                              setState(() =>
                                                              editReceiver_email
                                                                  .text = val),
                                                          controller:
                                                          TextEditingController()
                                                            ..text =
                                                                editReceiver_email
                                                                    .text,
                                                          decoration:
                                                          const InputDecoration(
                                                            hintText:
                                                            "exemple@gmail.com",
                                                            border:
                                                            OutlineInputBorder(),
                                                          ),
                                                        ),
                                                      ),
                                                    ],
                                                  )),
                                              const SizedBox(height: 20.0),
                                              Padding(
                                                  padding: EdgeInsets.only(
                                                      left: 25.0,
                                                      right: 25.0,
                                                      top: 2.0),
                                                  child: new Row(
                                                    mainAxisSize: MainAxisSize.max,
                                                    children: <Widget>[
                                                      new Flexible(
                                                        child: new TextFormField(
                                                          onSaved: (val) =>
                                                              setState(() =>
                                                              editReceiver_phone
                                                                  .text = val),
                                                          controller:
                                                          TextEditingController()
                                                            ..text =
                                                                editReceiver_phone
                                                                    .text,
                                                          decoration: const InputDecoration(
                                                              hintText:
                                                              "Entre un téléphone",
                                                              border:
                                                              OutlineInputBorder()),
                                                        ),
                                                      ),
                                                    ],
                                                  )),
                                              const SizedBox(height: 20.0),
                                            ],
                                          ),
                                        ),
                                      );
                                    });
                              } else {
                                return Center(child: CircularProgressIndicator());
                              }
                            }))),
                actions: <Widget>[
                  // usually buttons at the bottom of the dialog
                  Row(
                    children: <Widget>[
                      new FlatButton(
                        child: new Text("Annulez"),
                        onPressed: () {
                          Navigator.of(context).pop();
                        },
                      ),
                      new FlatButton(
                          onPressed: () async {
                            Navigator.pop(context, true);
                          },
                          child: new Text("OK"))
                    ],
                  ),
                ],
              );
            });
      },
    );
  }

  showLoaderDialog(BuildContext context) {
    AlertDialog alert = AlertDialog(
      content: new Row(
        children: [
          CircularProgressIndicator(),
          Container(
              margin: EdgeInsets.only(left: 7), child: Text("Loading...")),
        ],
      ),
    );
    showDialog(
      barrierDismissible: false,
      context: context,
      builder: (BuildContext context) {
        return alert;
      },
    );
    new Future.delayed(new Duration(seconds: 2), () {
      Navigator.of(context).pop(); //pop dialog
    });
  }

  GlobalKey<ScaffoldState> _globalKey = GlobalKey();
  void getError(dynamic error) {
    _globalKey.currentState.showSnackBar(SnackBar(
      content: Text(error.toString()),
    ));
    setState(() {
      _error = error;
    });
  }

  @override
  void initState() {
    super.initState();
    this.getSWData();
    this.displayPaymentInfo();
    _loadCurrencies();
    _mySelectionCountry = "1";
    _dropdownMenuItemsGnf = buildDropDownMenuItemsGnf(_dropdownItemsGnf);
    _selectedItemGnf = _dropdownMenuItemsGnf[0].value;
  }

  Future<String> _loadCurrencies() async {
    String uri = "https://api.exchangeratesapi.io/latest";
    var response = await http
        .get(Uri.encodeFull(uri), headers: {"Accept": "application/json"});
    var responseBody = json.decode(response.body);
    Map curMap = responseBody['rates'];
    currencies = curMap.keys.toList();
    currencies.where((f) => f == 'EUR' || f == 'USD').toList();
    setState(() {});
    return "Success";
  }

  Future<double> _doConversion(String valeurSaisie) async {
    _convertResult=0;
    fromTextControllerReceiver.text="";
    fromTextControllerToReceiveMontant.text="";
    fromTextControllerCommission.text="";
    var a =this._taux;
    var b =this._conversion_eur;
    _convertResult=(double.parse(valeurSaisie)*b)+a;
    fromTextControllerReceiver.text=_convertResult.toString();
    fromTextControllerToReceiveMontant.text=fromTextControllerReceiver.text;
    fromTextControllerCommission.text=a.toString();
    fromTextControllerTotal.text=(double.parse(fromTextControllerToReceiveMontant.text)+double.parse(fromTextControllerCommission.text)).toString();

    _stripeAmount=double.parse(valeurSaisie)+double.parse(fromTextControllerCommission.text);

  }
  Future<double> _doConversionDollard() async {
    var b =this._conversion_usd;
    var a =this._taux;
    _convertResult=0;
    fromTextControllerReceiver.text="";
    fromTextControllerToReceiveMontant.text="";
    fromTextControllerCommission.text="";

    _convertResult=(double.parse(fromTextControllerSender.text)*b)+a;
    fromTextControllerReceiver.text=fromTextControllerSender.text;
    fromTextControllerToReceiveMontant.text=fromTextControllerReceiver.text;
    fromTextControllerCommission.text=a.toString();
    fromTextControllerTotal.text=(double.parse(fromTextControllerToReceiveMontant.text)+double.parse(fromTextControllerCommission.text)).toString();

    _stripeAmount=double.parse(fromTextControllerSender.text)+double.parse(fromTextControllerCommission.text);

  }
  _onFromChanged(String value) {
    setState(() {
      fromCurrency = value;
    });
  }

  _onToChanged(String value) {
    setState(() {
      toCurrency = value;
    });
  }

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

  List<DropdownMenuItem<dynamic>> buildDropDownMenuCountry(List listCountries) {
    List<DropdownMenuItem<ListItem>> items = List();
    for (dynamic country in listCountries) {
      items.add(
        DropdownMenuItem(
          child: Text(country.country_name),
          value: country,
        ),
      );
    }
    return items;
  }


  List<DropdownMenuItem<ListItem>> _dropdownMenuItems;

  List<DropdownMenuItem<dynamic>> _dropdownMenuPays;
  ListItem _selectedItem;
  dynamic _selectedCountry;

  Language _selectedLanguage;
  List<ListItemReceiver> _dropdownItemsGnf = [
    ListItemReceiver("assets/Image/gnf.png", "GNF",1),
  ];

  List<DropdownMenuItem<ListItemReceiver>> _dropdownMenuItemsGnf;
  ListItemReceiver _selectedItemGnf;

  //------

  List<DropdownMenuItem<ListItemReceiver>> buildDropDownMenuItemsGnf(
      List listItems) {
    List<DropdownMenuItem<ListItemReceiver>> items = List();
    for (ListItemReceiver listItem in listItems) {
      items.add(
        DropdownMenuItem(
          child: Row(
            children: <Widget>[
              Text(listItem.name),
              Image.asset(listItem.imageReceiver, width: 50),
            ],
          ),
          value: listItem,
        ),
      );
    }
    return items;
  }

  Widget _buildDropButtonFrom() {
    return Row(
      children: <Widget>[
        DropdownButtonHideUnderline(
          child: DropdownButton(
              value: _selectedItem,
              items: _dropdownMenuItems,
              onChanged: (value) {
                setState(() {
                  _selectedItem = value;
                  //.. _user.pays=_selectedItem.name;
                });
              }),
        )
      ],
    );
  }
  Divider _buildDivider() {
    final Color divider = Colors.grey.shade600;
    return Divider(
      color: divider,
    );
  }

  Widget _buildRow(IconData icon,
      String title, {bool showBadge = false}) {
    final TextStyle tStyle = TextStyle(color: active, fontSize: 16.0);
    return Container(
        padding: const EdgeInsets.symmetric(vertical: 5.0),
        child:GestureDetector(
          child: Row(children: [
            Icon(
              icon,
              color: active,
            ),
            SizedBox(width: 10.0),
            Text(
              title,
              style: tStyle,
            ),
            Spacer(),
          ]),
        )
    );
  }
  _buildDrawer() {

    return ClipPath(
      clipper: OvalRightBorderClipper(),
      child: Drawer(
        child: Container(
          padding: const EdgeInsets.only(left: 16.0, right: 40),
          decoration: BoxDecoration(
              color: primary, boxShadow: [BoxShadow(color: Colors.black45)]),
          width: 300,
          child: SafeArea(
            child: SingleChildScrollView(
              child: Column(
                children: <Widget>[
                  Container(
                    alignment: Alignment.centerRight,
                    child: IconButton(
                      icon: Icon(
                        Icons.power_settings_new,
                        color: active,
                      ),
                      onPressed: () {},
                    ),
                  ),
                  Container(
                    height: 90,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(
                            colors: [Colors.blue, Colors.deepOrange])
                    ),
                    child: CircleAvatar(
                      radius: 40,
                      backgroundImage: NetworkImage('https://firebasestorage.googleapis.com/v0/b/mktransfert-d6990.appspot.com/o/Me.png?alt=media&token=044e199c-908b-4d22-9a2c-a720e4a6c6f3'),
                    ),
                  ),
                  SizedBox(height: 5.0),
                  Text(
                    "Cephas ZOUBGA",
                    style: TextStyle(
                        color: Colors.black,
                        fontSize: 18.0,
                        fontWeight: FontWeight.w600),
                  ),
                  Text(
                    "cephaszoubga@gmail.com",
                    style: TextStyle(color: active, fontSize: 16.0),
                  ),
                  SizedBox(height: 30.0),
                  // _buildRow(Icons.home, "Accueil"),
                  _buildDivider(),
                  _buildRow(Icons.person_pin, "Mon profil"),
                       _buildDivider(),
               // _buildRow(Icons.message, "Messages", showBadge: true),*/
                 // _buildDivider(),
                   _buildRow(Icons.settings, "Reglages"),
                  _buildDivider(),
              _buildRow(Icons.email, "Nous contacter"),
                //  _buildDivider(),
                  //  _buildRow(Icons.info_outline, "Aide"),
                  _buildDivider(),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Effectuer votre transfert"),
      ),
      body: currencies == null
          ? Center(child: CircularProgressIndicator())
          : Container(
        width: MediaQuery.of(context).size.width,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Card(
              color: _colorFromHex("#F7FAFF"),
              elevation: 3.0,
              child: ListView(
                children: <Widget>[
                  Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      ListTile(
                        title: Container(
                          width: 50,
                          padding: const EdgeInsets.only(
                              left: 10.0, right: 10.0),
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(5.0),
                              border: Border.all()),
                          child: DropdownButtonHideUnderline(
                            child: DropdownButton(
                              hint: Text("Choisir un bénéficiaire"),
                              items:
                              data?.map((item) {
                                return DropdownMenuItem(
                                  child: Text(
                                      item['receiver_last_name']),
                                  value: item['id'],
                                );
                              })?.toList() ??
                                  [],
                              onChanged: (newVal) {
                                setState(() {
                                  _beneficiaireID = newVal;
                                  _showBeneficiaireInfo();
                                });
                              },
                              value: _beneficiaireID,

                            ),
                          ),
                        ),
                        trailing: IconButton(
                          color: Colors.blue,
                          icon: Icon(Icons.person_add),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) =>
                                      RegisterBeneficiairePage()),
                            );
                          },
                        ),
                      ),
                      const SizedBox(height: 10.0),
                      ListTile(
                        title: TextFormField(
                          decoration: InputDecoration(
                            hintText: "Saisir le montant à envoyer",
                            border: OutlineInputBorder(),
                          ),
                          controller: fromTextControllerSender,
                          style: TextStyle(
                              fontSize: 20.0, color: Colors.black),
                          keyboardType: TextInputType.numberWithOptions(
                              decimal: true),
                          onChanged: (text) {
                            // result=(double.parse(fromTextController.text) * (10)).toStringAsFixed(2);
                            _doConversion(fromTextControllerSender.text);
                            // fromTextControllerTotal.text=(double.parse(fromTextControllerSender.text)+_taux).toString();
                            /* fromTextControllergnf.text = result;
                                  fromTextControllerReceive.text =
                                      fromTextControllergnf.text +
                                          12.toString();
                                  fromTextControllerTotal.text =
                                      fromTextControllergnf.text +
                                          10.toString();
                                  fromTextControllerCommission.text =
                                      10.toString();*/
                          },
                        ),
                        trailing: _buildDropDownSender(),
                      ),
                      const SizedBox(height: 20.0),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Text(
                            "1€ = 11900.0 GNF | Montant Reçu en dévise locale",
                            style: TextStyle(
                                color: Colors.blue,
                                fontWeight: FontWeight.w500),
                          )
                        ],
                      ),
                      const SizedBox(height: 20.0),
                      ListTile(
                        title: TextFormField(
                          readOnly: true,
                          decoration: InputDecoration(
                            hintText: "Resultat attendu",
                            border: OutlineInputBorder(),
                          ),
                          controller: fromTextControllerReceiver,
                          style: TextStyle(
                              fontSize: 20.0, color: Colors.black),
                        ),
                        trailing: _buildDropDownReceiver(),
                      ),
                      const SizedBox(height: 20.0),
                      ListTile(
                        title:  _buildDropDownPointRetrait(),
                      ),
                      const SizedBox(height: 20.0),
                      Container(
                        decoration: const BoxDecoration(
                          border: Border(
                            left: BorderSide(
                                width: 10.0, color: Colors.indigoAccent),
                          ),
                        ),
                        height: 80,
                        child: Card(
                          color: _colorFromHex("#F7FAFF"),
                          elevation: 3.0,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: <Widget>[
                              Padding(
                                padding:
                                const EdgeInsets.only(left: 10.0),
                                child: Text(
                                  "Montant à recevoir :" +
                                      fromTextControllerToReceiveMontant.text,
                                  style: TextStyle(
                                      color: Colors.black,
                                      fontWeight: FontWeight.w500),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(height: 20.0),
                      Container(
                        decoration: const BoxDecoration(
                          border: Border(
                            left: BorderSide(
                                width: 10.0, color: Colors.black54),
                          ),
                        ),
                        height: 80,
                        child: Card(
                          color: _colorFromHex("#F7FAFF"),
                          elevation: 3.0,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: <Widget>[
                              Padding(
                                padding:
                                const EdgeInsets.only(left: 10.0),
                                child: Text(
                                  "Montant commission :" +
                                      fromTextControllerCommission.text,
                                  style: TextStyle(
                                      color: Colors.black,
                                      fontWeight: FontWeight.w500),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(height: 20.0),
                      Container(
                        decoration: const BoxDecoration(
                          border: Border(
                            left: BorderSide(
                                width: 10.0, color: Colors.redAccent),
                          ),
                        ),
                        height: 80,
                        child: Card(
                          color: _colorFromHex("#F7FAFF"),
                          elevation: 3.0,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: <Widget>[
                              Padding(
                                padding:
                                const EdgeInsets.only(left: 10.0),
                                child: Text(
                                  "Montant total à payer :" +
                                      fromTextControllerTotal.text,
                                  style: TextStyle(
                                      color: Colors.black,
                                      fontWeight: FontWeight.w500),
                                ),
                              ),
                              /* Chip(
                                backgroundColor: Colors.transparent,
                                label: result != null ?
                                Text(
                                  (double.parse(fromTextController.text) + 12).toStringAsFixed(2),
                                  style: Theme.of(context).textTheme.display1,
                                )
                                    : Text(""),
                              )*/
                            ],
                          ),
                        ),
                      ),
                      SizedBox(
                        width: double.infinity,
                        height: 50.0,
                        child: RaisedButton(
                          color: Colors.blue,
                          textColor: Colors.white,
                          elevation: 0,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10.0),
                          ),
                          child: Text("Effectuer un transfert"),
                          onPressed: () {
                            if (fromTextControllerSender.text.isEmpty) {
                              FancyAlertDialog.showFancyAlertDialog(
                                context,
                                'Alerte',
                                'Veillez remplir le montant',
                                Colors.red,
                                icon: Icon(
                                  Icons.warning,
                                  color: Colors.white,
                                ),
                                labelPositiveButton: 'Ok',
                                onTapPositiveButton: () {
                                  Navigator.pop(context);
                                },
                                labelNegativeButton: '',
                                onTapNegativeButton: () {
                                  Navigator.pop(context);
                                  print('tap negative button');
                                },
                              );
                            } else {
                              FancyAlertDialog.showFancyAlertDialog(
                                context,
                                'Confirmation',
                                'Le montant a envoyé est de' +
                                    fromTextControllerSender.text +
                                    '.Le montant à recevoir est de' +
                                    fromTextControllerReceiver.text
                                    +
                                    '.Le montant de la commission est de' +
                                    fromTextControllerCommission.text+
                                    '.Le montant total est de ' +
                                    fromTextControllerTotal.text,
                                Colors.blue,
                                icon: Icon(
                                  Icons.clear,
                                  color: Colors.white,
                                ),
                                labelPositiveButton: 'OK',
                                onTapPositiveButton: () {

                                  storage.write(key: "transaction", value: json.encode([
                                    {
                                      "montant_send":fromTextControllerSender.text,
                                      "montant_receive":fromTextControllerReceiver.text,
                                      "transac_commission":fromTextControllerCommission.text,
                                      "transac_total":_stripeAmount,
                                      "devise_send":_senderCurrency,
                                      "receiver_name":editReceiver_first_name.text,
                                      "receiver_email":editReceiver_email.text,
                                      "devise_receive":_valueReceiver,
                                      "point_retrait":_mySelectionPointRetrait,
                                    }
                                  ]
                                  ));
                                  storage.write(key: "transactionBackend", value: json.encode([
                                    {
                                      "montant_send":fromTextControllerSender.text,
                                      "montant_receive":fromTextControllerReceiver.text,
                                      "transac_commission":fromTextControllerCommission.text,
                                      "transac_total":_stripeAmount,
                                      "devise_receive":_valueReceiver,
                                      "point_retrait":_mySelectionPointRetrait,
                                    }
                                  ]));

                                  Navigator.pop(context);
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) =>
                                            PaymentPage()),
                                  );
                                },
                                labelNegativeButton: 'Annulez',
                                onTapNegativeButton: () {
                                  Navigator.pop(context);
                                  print('tap negative button');
                                },
                              );
                            }
                          },
                        ),
                      ),
                    ],
                  ),
                ],
              )),
        ),
      ),
    );
  }

  Widget _buildDropDownSender() {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
          color: Colors.blue, borderRadius: BorderRadius.circular(10)),
      child: DropdownButton(
        icon: Icon(Icons.arrow_drop_down),
        iconSize: 42,
        underline: SizedBox(),
        items: [
          DropdownMenuItem(
            child: Text(_senderCurrency ?? 'default value'),
            value: 1,
          ),
        ],
        onChanged: (value) {
          setState(() {
            _valueSender = value;
          });
        },
        value: _valueSender,
      ),
    );
  }

  Widget _buildDropDownReceiver() {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
          color: Colors.blue, borderRadius: BorderRadius.circular(10)),
      child: DropdownButton(
        icon: Icon(Icons.arrow_drop_down),
        iconSize: 42,
        underline: SizedBox(),
        items: [
          DropdownMenuItem(
            child: Text('GNF'),
            value: 1,
          ),
          DropdownMenuItem(
            child: Text(_senderCurrency ?? 'default value'),
            value: 2,
          ),
        ].toList(),
        onChanged: (value) {
          if(value==2){
            _doConversionDollard();
          }
          if(value==1){
            _doConversion(fromTextControllerSender.text);
          };
          setState(() {
            _valueReceiver = value;
          });
        },
        value: _valueReceiver,
      ),
    );
  }

  Widget _buildDropDownPointRetrait() {
    return  Container(
      width: 50,
      padding: const EdgeInsets.only(
          left: 10.0, right: 10.0),
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(5.0),
          border: Border.all()),
      child: DropdownButtonHideUnderline(
        child: DropdownButton(
          hint: Text("Choisir un point de retrait"),
          items: receiver_point_retait?.map((item) {
            country_isdisponible=item['country_isdisponible'];
            return DropdownMenuItem(
              child: Text(item['agence_name']),
              value: item['id'],
            );
          })?.toList() ??
              [],
          onChanged: (newVal) {
            /*  where((f) => f["id"] == _beneficiaireID);*/
            setState(() {
              var selectedPoint= receiver_point_retait.map((item) => item).toList();
              selectedPoint.forEach((f) => {
                if (f['id']==newVal){
                  if (!f['agence_isdisponible']){
                    print(f),
                    showAlertDialogContry(context)
                  }
                }
              });
              _mySelectionPointRetrait = newVal;
            });
          },
          value: _mySelectionPointRetrait,
        ),
      ),
    );
  }
}
/*showAlertDialog(BuildContext context) {  // set up the button
  Alert(
    context: context,
    type: AlertType.info,
    title: "Alerte",
    desc: "cette destionation n'est pas encore  fonctionnelle",
    buttons: [
      DialogButton(
        child: Text(
          "OK",
          style: TextStyle(color: Colors.white, fontSize: 20),
        ),
        onPressed: () => Navigator.pop(context),
        color: kPrimaryColor,
        radius: BorderRadius.circular(10.0),
      ),
    ],
  ).show();
}*/
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
Color _colorFromHex(String hexColor) {
  final hexCode = hexColor.replaceAll('#', '');
  return Color(int.parse('FF$hexCode', radix: 16));
}

class MySelectionItem extends StatelessWidget {
  final String title;
  final bool isForList;
  final int _value = 1;
  const MySelectionItem({Key key, this.title, this.isForList = true})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 60.0,
      child: isForList
          ? Padding(
        child: _buildItem(context),
        padding: EdgeInsets.all(10.0),
      )
          : Card(
        margin: EdgeInsets.symmetric(horizontal: 10.0),
        child: Stack(
          children: <Widget>[
            _buildItem(context),
            Align(
              alignment: Alignment.centerRight,
              child: Icon(Icons.arrow_drop_down),
            )
          ],
        ),
      ),
    );
  }

  Widget _buildItem(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      alignment: Alignment.center,
      child: FittedBox(
          child: Text(
            title,
          )),
    );
  }
}

class ListItem {
  int value;
  String name;
  ListItem(this.value, this.name);
}

class ListItemBeneficiaire {
  int id;
  String name;
  ListItemBeneficiaire(this.id, this.name);
}

class Language {
  final int id;
  final String name;
  final String languageCode;

  Language(this.id, this.name, this.languageCode);

  static List<Language> getLanguages() {
    return <Language>[
      Language(1, 'English', 'en'),
      Language(2, 'فارسی', 'fa'),
      Language(3, 'پشتو', 'ps'),
    ];
  }
}
