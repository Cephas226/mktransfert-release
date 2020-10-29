import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:direct_select/direct_select.dart';
import 'package:fancy_alert_dialog/fancy_alert_dialog.dart';
import 'package:fancy_dialog/fancy_dialog.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/src/page/mesclasses/beneficiaireClasses.dart';
import 'package:mktransfert/src/page/operations/beneficiaireOperations.dart';
import 'package:mktransfert/src/page/pagePrincipale.dart';
import 'package:mktransfert/src/page/payement.dart';
import 'package:mktransfert/src/page/test.dart';
import 'package:stripe_payment/stripe_payment.dart';

class TransactionPage extends StatefulWidget {
  static final String path = "lib/src/pages/login/auth3.dart";

  @override
  _TransactionState createState() => _TransactionState();
}

class _TransactionState extends State<TransactionPage> {
  final fromTextController = TextEditingController();
  final fromTextControllergnf = TextEditingController();
  final fromTextControllerMontant = TextEditingController();
  final fromTextControllerReceive = TextEditingController();
  final fromTextControllerCommission = TextEditingController();
  final fromTextControllerTotal = TextEditingController();

  var editReceiver_last_name = TextEditingController();
  var editReceiver_first_name = TextEditingController();
  var editReceiver_email = TextEditingController();
  var editReceiver_phone = TextEditingController();
  var editReceiver_country = TextEditingController();
  String _mySelection;
  String _senderCurrency;
  String _mySelectionCountry;
  String _nom(dynamic beneficiaire) {
    return beneficiaire['nom'];
  }
  final _beneficiaire=Beneficiaire();
  List AllBeneficiaire;
  List data = List();
  var testCountry = List();
  List countrydata = List();
  getToken() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    return responseJson;

  }
  Future<List<dynamic>> getSWData() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token =responseJson["access_token"];
    int user_id =responseJson["user_id"];
    var res = await http
        .get(Uri.encodeFull(apiUrl+'$user_id'), headers: {
      "Accept": "application/json",
      'Authorization': 'Bearer $token',
    });
    var beneficiaireList;
    var countryList=List ();
    var resBody = json.decode(res.body);
    resBody['data_beneficiaire']?.forEach((k, v) {
      beneficiaireList=v;
    });
    resBody['data_country']?.forEach((k, v) {
      countryList.add(v[0]);
    });
    data=beneficiaireList;
    countrydata=countryList;
    setState(() {
      data=beneficiaireList;
      countrydata=countryList;
    });
    return beneficiaireList;
  }
  displayPaymentInfo() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token =responseJson["access_token"];
    int user_id =responseJson["user_id"];
    var res = await http
        .get(Uri.encodeFull('https://gracetechnologie.pythonanywhere.com/api/payment/'+'$user_id'), headers: {
      "Accept": "application/json",
      'Authorization': 'Bearer $token',
    });
    if (res.statusCode==200){
      var resBody = json.decode(res.body);
      print('cooly');
      print(_senderCurrency);
      return _senderCurrency=resBody['API_transac_data']['devise_sender'];
    }
  }
  PaymentMethod _paymentMethod;
  String _error;
  List<String> currencies;
  String fromCurrency = "USD";
  String toCurrency = "GBP";
  String result;
  Color color2 = _colorFromHex("#b74093");
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final point_retrait = [
    "Boffa",
    "Boke",
    "Conakry – Kaloum",
    "Conakry – Madina",
    "Conakry - Bambeto",
    "Conakry – Enco",
    "Conakry - Matoto",
    "Conakry – Lambanyi",
    "Cosa - Rond-Point",
    "Conakry - cimenterie carrefour",
    "Conakry – Dabompa",
    "Coyah",
    "Dubreka Km",
    "Fria",
    "Kamsar",
    "Kankan",
    "Kindia",
    "Koundara",
    "Labe",
    "Lelouma",
    "Mamou",
    "N’Zerekore",
    "Pita",
    "Sangaredji",
    " Timbi Madina",
    "Touba",
  ];
  int selectedIndex1 = 0;
  int _value = 1;
  List<Widget> _buildItems1() {
    return point_retrait
        .map((val) => MySelectionItem(
      title: val,
    ))
        .toList();
  }
  void _showBeneficiaireInfo() {
    String dialogText;
    showDialog(
      context: context,
      builder: (BuildContext context) {
        // return object of type Dialog
        return StatefulBuilder(
            builder: (BuildContext context, StateSetter setState){
              return AlertDialog(
                title: Container(
                  child: Text("Informations du bénéficiaire"),
                ),
                content:SingleChildScrollView(
                    child: Container(
                        height: 400.0, // Change as per your requirement
                        width: 400.0,
                        child: FutureBuilder<List<dynamic>>(
                            future: getSWData(),
                            builder: (BuildContext context, AsyncSnapshot snapshot) {
                              if(snapshot.hasData){
                                testCountry=List();
                                countrydata.forEach((element) {
                                  testCountry.add(element);
                                });
                                //   data.where((f) =>  item["id"]==_mySelection).toList();
                                var selectedBeneficiaire = data.map((item) => item).toList();
                                selectedBeneficiaire.where((f) =>  f["id"]==_mySelection);
                                selectedBeneficiaire.forEach((b) {
                                  editReceiver_first_name.text=b["receiver_first_name"];
                                  editReceiver_last_name.text=b["receiver_last_name"];
                                  editReceiver_country.text=b["receiver_country"];
                                  editReceiver_phone.text=b["receiver_phone"];
                                  editReceiver_email.text=b["receiver_email"];
                                });
                                return ListView.builder(
                                    shrinkWrap: true,
                                    padding: EdgeInsets.all(8),
                                    itemCount: 1,
                                    itemBuilder: (BuildContext context, int index){

                                      return
                                        Container(
                                          child: Form(
                                            child: Column(
                                              children: <Widget>[
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
                                                                  borderRadius: BorderRadius.circular(5.0),
                                                                  border: Border.all()),
                                                              child:  DropdownButtonHideUnderline(
                                                                child: DropdownButton(
                                                                  hint: Text("Choisir un pays"),
                                                                  items: testCountry?.map((item) {
                                                                    return DropdownMenuItem(
                                                                      child:  Text(item['country_name']),
                                                                      value: item['id'].toString(),
                                                                    );
                                                                  })?.toList() ??
                                                                      [],
                                                                  onChanged: (country) {
                                                                    setState(() {
                                                                      // showLoaderDialog(context);
                                                                      _mySelectionCountry=country;
                                                                    });
                                                                  },
                                                                  value: _mySelectionCountry,
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
                                                        left: 25.0, right: 25.0, top: 2.0),
                                                    child: Row(
                                                      mainAxisSize: MainAxisSize.max,
                                                      children: <Widget>[
                                                        Flexible(
                                                          child: new TextFormField(
                                                            onSaved: (val) => setState(() => editReceiver_last_name.text = val),
                                                            controller: TextEditingController()..text =editReceiver_last_name.text,
                                                            decoration: const InputDecoration(
                                                              hintText: "Entrez un nom",
                                                              border: OutlineInputBorder(),
                                                            ),
                                                          ),
                                                        ),
                                                      ],
                                                    )),
                                                const SizedBox(height: 20.0),
                                                Padding(
                                                  padding: EdgeInsets.only(
                                                      left: 25.0, right: 25.0, top: 2.0),
                                                  child: new Row(
                                                    mainAxisSize: MainAxisSize.max,
                                                    children: <Widget>[
                                                      new Flexible(
                                                        child: new TextFormField(
                                                          onSaved: (val) => setState(() => editReceiver_first_name.text = val),
                                                          controller: TextEditingController()..text =editReceiver_first_name.text,
                                                          decoration: const InputDecoration(
                                                            hintText: "Entrez un prenom",
                                                            border: OutlineInputBorder(),
                                                          ),
                                                        ),
                                                      ),
                                                    ],
                                                  ),
                                                ),
                                                const SizedBox(height: 20.0),
                                                Padding(
                                                    padding: EdgeInsets.only(
                                                        left: 25.0, right: 25.0, top: 2.0),
                                                    child: new Row(
                                                      mainAxisSize: MainAxisSize.max,
                                                      children: <Widget>[
                                                        new Flexible(
                                                          child: new TextFormField(
                                                            onSaved: (val) => setState(() => editReceiver_email.text = val),
                                                            controller: TextEditingController()..text =editReceiver_email.text,
                                                            decoration: const InputDecoration(
                                                              hintText: "exemple@gmail.com",
                                                              border: OutlineInputBorder(),
                                                            ),
                                                          ),
                                                        ),
                                                      ],
                                                    )),
                                                const SizedBox(height: 20.0),
                                                Padding(
                                                    padding: EdgeInsets.only(
                                                        left: 25.0, right: 25.0, top: 2.0),
                                                    child: new Row(
                                                      mainAxisSize: MainAxisSize.max,
                                                      children: <Widget>[
                                                        new Flexible(
                                                          child: new TextFormField(
                                                            onSaved: (val) => setState(() => editReceiver_phone.text = val),
                                                            controller: TextEditingController()..text =editReceiver_phone.text,
                                                            decoration: const InputDecoration(
                                                                hintText: "Entre un téléphone",
                                                                border: OutlineInputBorder()),
                                                          ),
                                                        ),
                                                      ],
                                                    )
                                                ),
                                                const SizedBox(height: 20.0),

                                              ],

                                            ),
                                          ),

                                        );
                                    }
                                );
                              }
                              else {
                                return Center(child: CircularProgressIndicator());
                              }
                            }
                        )
                    )
                ),
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
            }
        );

      },
    );
  }
  showLoaderDialog(BuildContext context){
    AlertDialog alert=AlertDialog(
      content: new Row(
        children: [
          CircularProgressIndicator(),
          Container(margin: EdgeInsets.only(left: 7),child:Text("Loading..." )),
        ],),
    );
    showDialog(barrierDismissible: false,
      context:context,
      builder:(BuildContext context){
        return alert;
      },
    );
    new Future.delayed(new Duration(seconds: 2), () {
      Navigator.of(context).pop(); //pop dialog
    });
  }
  Widget _buildDropButton() {
    return Container(
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(
            color: Colors.blue, borderRadius: BorderRadius.circular(10)),
        child: DropdownButton(
          value: _value,
          icon: Icon(Icons.arrow_drop_down),
          iconSize: 42,
          underline: SizedBox(),
          items: [
            DropdownMenuItem(
              child: Text("GNF"),
              value: 1,
            ),
          ],
          onChanged: (value) {
            setState(() {
              _value = value;
            });
          },
        ));
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
    displayPaymentInfo();
    _loadCurrencies();
    _dropdownMenuItems = buildDropDownMenuItems(_dropdownItems);
    _selectedItem = _dropdownMenuItems[0].value;
    _mySelectionCountry="1";
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
    // print(currencies.where((f) => f == 'EUR' || f == 'USD').toList());
    return "Success";
  }

  Future<String> _doConversion() async {
    String uri =
        "https://api.exchangeratesapi.io/latest?base=$fromCurrency&symbols=$toCurrency";
    var response = await http
        .get(Uri.encodeFull(uri), headers: {"Accept": "application/json"});
    var responseBody = json.decode(response.body);
    setState(() {
      result = (double.parse(fromTextController.text) *
          (responseBody["rates"][toCurrency]))
          .toStringAsFixed(2);
    });
    return "Success";
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

  List<ListItem> _dropdownItems = [
    ListItem(1, "Boffa"),
    ListItem(2, "Boke"),
    ListItem(3, "Conakry – Kaloum"),
    ListItem(4, "Conakry – Madina"),
    ListItem(5, "Conakry - Bambeto"),
    ListItem(6, "Conakry – Enco"),
    ListItem(7, "Conakry - Matoto"),
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
    ListItem(19, "Labe"),
    ListItem(20, "Lelouma"),
    ListItem(21, "Mamou"),
    ListItem(22, "N’Zerekore"),
    ListItem(23, "Pita"),
    ListItem(24, "Sangaredji"),
    ListItem(25, " Timbi Madina"),
    ListItem(26, "Touba"),
  ];
  List<DropdownMenuItem<ListItem>> _dropdownMenuItems;

  List<DropdownMenuItem<dynamic>> _dropdownMenuPays;
  ListItem _selectedItem;
  dynamic _selectedCountry;

  Language _selectedLanguage;
  List<ListItemGnf> _dropdownItemsGnf = [
    ListItemGnf("assets/Image/gnf.png", "GNF"),
  ];

  List<DropdownMenuItem<ListItemGnf>> _dropdownMenuItemsGnf;
  ListItemGnf _selectedItemGnf;

  //------


  List<DropdownMenuItem<ListItemGnf>> buildDropDownMenuItemsGnf(
      List listItems) {
    List<DropdownMenuItem<ListItemGnf>> items = List();
    for (ListItemGnf listItem in listItems) {
      items.add(
        DropdownMenuItem(
          child: Row(
            children: <Widget>[
              Text(listItem.name),
              Image.asset(listItem.imageGnf, width: 50),
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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Effectuer votre transfert"),
        automaticallyImplyLeading: true,
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
                        title: Text(
                          "Choisir un beneficiaire",
                          style: TextStyle(
                              color: Colors.black,
                              fontWeight: FontWeight.w500),
                        ),
                      ),
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
                              items: data?.map((item) {
                                return DropdownMenuItem(
                                  child:  Text(item['receiver_last_name']),
                                  value: item['id'].toString(),
                                );
                              })?.toList() ??
                                  [],
                              onChanged: (newVal) {
                                setState(() {
                                  _mySelection = newVal;
                                  _showBeneficiaireInfo();
                                });
                              },
                              value: _mySelection,
                            ),
                          ),
                        ),
                        trailing: IconButton(
                          color: Colors.blue,
                          icon: Icon(Icons.person_add),
                          onPressed: () {},
                        ),
                      ),
                      const SizedBox(height: 10.0),
                      ListTile(
                        title: TextFormField(
                          decoration: InputDecoration(
                            hintText: "Saisir le montant à envoyer",
                            border: OutlineInputBorder(),
                          ),
                          controller: fromTextController,
                          style: TextStyle(
                              fontSize: 20.0, color: Colors.black),
                          keyboardType: TextInputType.numberWithOptions(
                              decimal: true),
                          onChanged: (text) {
                            // result=(double.parse(fromTextController.text) * (10)).toStringAsFixed(2);
                            _doConversion();
                            fromTextControllergnf.text = result;
                            fromTextControllerReceive.text =
                                fromTextControllergnf.text +
                                    12.toString();
                            fromTextControllerTotal.text =
                                fromTextControllergnf.text +
                                    10.toString();
                            fromTextControllerCommission.text =
                                10.toString();
                          },
                        ),
                        trailing: _buildDropDownSender(),
                      ),
                      const SizedBox(height: 20.0),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Text(
                            "1€ = 1.0 GNF | Montant Reçu en dévise locale",
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
                          controller: fromTextControllergnf,
                          style: TextStyle(
                              fontSize: 20.0, color: Colors.black),
                        ),
                        trailing: _buildDropDownReceiver(),
                      ),
                      const SizedBox(height: 20.0),
                      Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: <Widget>[
                            Padding(
                              padding: const EdgeInsets.only(left: 20.0),
                              child: Text(
                                "Choisir un point de retrait",
                                style: TextStyle(
                                    color: Colors.black,
                                    fontWeight: FontWeight.w500),
                              ),
                            ),
                            const SizedBox(height: 10.0),
                            Column(
                                mainAxisAlignment:
                                MainAxisAlignment.start,
                                crossAxisAlignment:
                                CrossAxisAlignment.stretch,
                                children: <Widget>[
                                  Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Container(
                                          padding: const EdgeInsets.only(
                                              left: 10.0, right: 10.0),
                                          decoration: BoxDecoration(
                                              borderRadius:
                                              BorderRadius.circular(
                                                  5.0),
                                              border: Border.all()),
                                          child:
                                          DropdownButtonHideUnderline(
                                            child: DropdownButton(
                                                value: _selectedItem,
                                                items: _dropdownMenuItems,
                                                onChanged: (value) {
                                                  setState(() {
                                                    _selectedItem = value;
                                                  });
                                                }),
                                          ))),
                                ]),
                            const SizedBox(height: 20.0),
                          ]),
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
                                      fromTextControllerReceive.text,
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
                            if (fromTextController.text.isEmpty) {
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
                                    fromTextController.text +
                                    '.Le montant à recevoir est de' +
                                    (double.parse(result) + 12)
                                        .toStringAsFixed(2) +
                                    '.Le montant de la commission est de' +
                                    12.toString() +
                                    '.Le montant total est de ' +
                                    (double.parse(
                                        fromTextController.text) +
                                        12)
                                        .toStringAsFixed(2),
                                Colors.blue,
                                icon: Icon(
                                  Icons.clear,
                                  color: Colors.white,
                                ),
                                labelPositiveButton: 'OK',
                                onTapPositiveButton: () {
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
          items:  [
            DropdownMenuItem(
              child: Text(_senderCurrency??'default value'),
              value: 1,
            ),
          ],
          onChanged: (value) {
            setState(() {
              _value = value;
            });
          },
        value: 1,
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
          items:  [
            DropdownMenuItem(
              child: Text('GNF'),
              value: 1,
            ),
            DropdownMenuItem(
              child: Text(_senderCurrency??'default value'),
              value: 2,
            ),
          ].toList(),
          onChanged: (value) {
            print(value);
            setState(() {
              _value = value;
            });
          },
        value: 1,
          ),

    );
  }
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
