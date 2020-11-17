import 'dart:convert';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/paymentPage.dart';
import 'package:mktransfert/src/page/registerBeneficiaire.dart';
import 'package:mktransfert/src/page/transaction.dart';
import 'package:mktransfert/src/widget/round_corner_image.dart';
import 'package:http/http.dart' as http;
import 'package:rflutter_alert/rflutter_alert.dart';
import '../../recipients_provider.dart';
import 'AccueilBottomBar.dart';
import 'beneficiaireScreen.dart';
import 'items/help_page.dart';
import 'items/stats_page.dart';
import 'loginPage.dart';
import 'operations/beneficiaireOperations.dart';

class ExpenseTrackerApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Expense Tracker",
      debugShowCheckedModeBanner: false,
      home: HomePage(),
      theme: ThemeData.light().copyWith(
        primaryColor: Color(0xff1346A1),
        accentColor: Color(0xff1346A1),
      ),
    );
  }
}
Future<AlertDialog> showAlertDialogPointRetrait(BuildContext context) {
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
                  ' Montant Reçu en dévise locale'
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
class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final List<IconData> bottomBarIcons = [
    Icons.calendar_today,
    Icons.insert_chart,
    Icons.person_outline
  ];

  double amount;
  int currentTabSelected = 0;
  var receiver_point_retait = List();
  int _mySelectionPointRetrait;
  var country_isdisponible;
  double screenWidth = 0.0;
  List AllBeneficiaire;
  List data = List();
  var testCountry = List();
  List countrydata = List();
  List transactionInfoRecap = List();
  List transactionUserRecap = List();
  String _transac_num;
  var editReceiver_last_name = TextEditingController();
  var editReceiver_first_name = TextEditingController();
  var editReceiver_email = TextEditingController();
  var editReceiver_phone = TextEditingController();
  var editReceiver_country = TextEditingController();
  var editReceiver_description = TextEditingController();

  int user_id;
  String first_name="";
  String last_name="";
  String country="";
  String phone= "";
  String email="";

  int _beneficiaireID;
  int _mySelectionCountry=1;

  double _amount;
  int _montant_send;
  double _transac_commission;
  double _montant_receive;
  double _stripeAmount;

  String _devise_receive="";
  String _currencySend="";
  String _senderCurrencySymbole="";

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
      resBody['point_retait']?.forEach((k, v) {
        receiver_point_retait.add(v[0]);
      });
    }
    setState(() {
      receiver_point_retait;
    });
  }
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
    var beneficiaireInfo = await storage.read(key: "beneficiaireNew");

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

  Future<List> fetchMyBeneficiaire() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    http.Response response = await http.get(Uri.encodeFull(apiUrl + '$user_id'), headers: {
      "Accept": "application/json",
      'Authorization': 'Bearer $token',
    });
    var countryList = List();
    var beneficiaireList = List();
    var resBody = json.decode(response.body);
    var beneficiaireInfo = await storage.read(key: "beneficiaireNew");
    if (beneficiaireInfo != null) {
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
     setState(() {
       data = beneficiaireList;
     });
    return json.decode(response.body);
  }

   getSuccesInfo()async {
    print('hello');
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    http.Response response = await http.
    get(
        'https://www.mktransfert.com/api/success/'+'$user_id',
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer $token',
        }
    );
    var resBody = json.decode(response.body);
    print(resBody["API_transac_data"]);
    _transac_num=resBody["API_transac_data"];
  /* resBody?.forEach((k, v) {
      print(v['transac_num']);
      _transac_num=v['transac_num'];
    });
    print(_transac_num);
    setState(() {
      _transac_num;
    });*/
    //return json.decode(response.body);
  }

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
                physics: ClampingScrollPhysics(),
                child:Stack(
                  children: <Widget>[

                    Container(
                        height: 400.0, // Change as per your requirement
                        width: 400.0,
                        child: FutureBuilder<List<dynamic>>(
                            future: this.getSWData(),
                            builder:
                                (BuildContext context, AsyncSnapshot snapshot) {
                              if (snapshot.hasData) {
                                testCountry = List();
                                countrydata.forEach((element) {
                                  testCountry.add(element);
                                });
                                var selectedBeneficiaire =
                                data.map((item) => item).toList();
                                selectedBeneficiaire
                                    .where((f) => f["id"] == _beneficiaireID);
                                selectedBeneficiaire.forEach((b) {
                                  if (b['id'] == _beneficiaireID) {
                                    editReceiver_first_name.text =
                                    b["receiver_first_name"];
                                    editReceiver_last_name.text =
                                    b["receiver_last_name"];
                                    editReceiver_country.text =
                                    b["receiver_country"];
                                    editReceiver_phone.text = b["receiver_phone"];
                                    editReceiver_email.text = b["receiver_email"];
                                    editReceiver_description.text = b["receiver_info"];
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
                                                                    value:
                                                                    item['id'],
                                                                  );
                                                                })?.toList() ??
                                                                    [],
                                                                onChanged: (country) {
                                                                  setState(() {
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
                                                                            .forEach(
                                                                                (f) => {

                                                                              if (f['id'] == _mySelectionCountry)
                                                                                {
                                                                                  if (!f['country_isdisponible'])
                                                                                    {
                                                                                      showAlertDialogContry(context),
                                                                                    }
                                                                                }
                                                                            });
                                                                        _mySelectionCountry =
                                                                            country;
                                                                      });
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
                                                        controller :
                                                        editReceiver_first_name
                                                        ,
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
                                                  )
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
                                                              editReceiver_description
                                                                  .text = val),
                                                          controller: editReceiver_description,

                                                          decoration: const InputDecoration(
                                                              hintText:
                                                              "Description",
                                                              border:
                                                              OutlineInputBorder()),
                                                        ),
                                                      ),
                                                    ],
                                                  )
                                              ),
                                            ],
                                          ),
                                        ),
                                      );
                                    });
                              } else {
                                return Center(child: CircularProgressIndicator());
                              }
                            }))
                  ],
                )
            ),
            actions: <Widget>[
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  Container(
                    width:120 ,
                    child: RaisedButton(
                      onPressed: () { Navigator.of(context).pop();},
                      color: Colors.grey.shade300,
                      textColor: Colors.grey.shade600,
                      child: Text(
                        "Annuler",
                        style: TextStyle(
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.all(Radius.circular(
                            8,
                          ))),
                    ),
                  ),
                  SizedBox(
                    width: 16,
                  ),
                  Container(
                    width:120 ,
                    child:   RaisedButton(
                      onPressed: () {
                        //updateUserProfile();
                      //  print(user_id);
                        storage.write(
                            key: "beneficiaireInfo",
                            value: json.encode([
                              {
                                "id":_beneficiaireID,
                                "receiver_first_name": editReceiver_first_name.text,
                                "receiver_last_name": editReceiver_last_name.text,
                                "receiver_email": editReceiver_email.text,
                                "receiver_phone": editReceiver_phone.text,
                                "receiver_country": editReceiver_country.text,
                                "receiver_description":  editReceiver_description.text,
                              }
                            ]));
                        Navigator.of(context).pop();
                        storage.write(key: "transactionBackend", value: json.encode([
                          {
                            "user_id":user_id,
                            //sender
                            "first_name":first_name,
                            "last_name":last_name,
                            "country":country,
                            "phone":phone,
                            "email":email,

                            //receiver

                            "receiver_first_name": editReceiver_first_name.text,
                            "receiver_last_name": editReceiver_last_name.text,
                            "receiver_email": editReceiver_email.text,
                            "receiver_phone": editReceiver_phone.text,
                            "receiver_country": _mySelectionCountry,
                            "receiver_description":  editReceiver_description.text,

                            //transaction

                            "montant_send":_montant_send*100,
                            "montant_receive":_montant_receive*100,
                            "transac_commission":_transac_commission,
                            "transac_total":_stripeAmount,
                            "devise_receive":_devise_receive,
                            "devise_sender":_currencySend,
                            "point_retrait":_mySelectionPointRetrait,
                            "transac_num":_transac_num
                          }
                        ]));
                        storage.write(key: "transaction", value: json.encode([
                            {
                            "montant_send":this._montant_send*100,
                            "montant_receive":this._montant_receive*100,
                            "transac_commission":this._transac_commission,
                            "transac_total":_stripeAmount,
                            "devise_send":_currencySend,
                            "receiver_name":editReceiver_first_name.text,
                            "receiver_last_name": editReceiver_last_name.text,
                            "receiver_email":editReceiver_email.text,
                            "devise_receive":_devise_receive,
                            "point_retrait":_mySelectionPointRetrait,
                            }
                            ]));
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => PaymentPage()),
                        );
                      },
                      color: kPrimaryColor,
                      textColor: Colors.white,
                      child: Text(
                        "Confirmer",
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
              ),
            ],
          );
        });
      },
    );
  }
  _displaySnackMessage (){
  }
displayRecap() async {
  var transactionResume = await storage.read(key: "transactionResume");
  transactionInfoRecap=json.decode(transactionResume);
  transactionInfoRecap.forEach((transaction) {
    _amount=transaction['transac_total'];
    _montant_send=transaction['montant_send'];
    _senderCurrencySymbole=transaction['devise_send_symbol'];
    _transac_commission=transaction['transac_commission'];
    _montant_receive=transaction['montant_receive'];
    _stripeAmount=transaction['transac_total'];
    _devise_receive=transaction['devise_receive'];
    _currencySend=transaction['devise_send'];

   setState(() {
     _amount;
     _montant_send;
     _senderCurrencySymbole;
     _transac_commission;
     _montant_receive;
     _stripeAmount;
     _currencySend;
   });
  });
}

  displayUserInfo() async {
    var jwt = await storage.read(key: "userInfo");
    Map<String, dynamic> responseStorageUser = json.decode(jwt);
    user_id=responseStorageUser["user_id"];
    first_name = responseStorageUser["first_name"];
    last_name = responseStorageUser["last_name"];
    email = responseStorageUser["email"];
    phone = responseStorageUser["phone"];
    country = responseStorageUser["country"];

  }

  @override
  void initState() {
    super.initState();
    this.getSuccesInfo();
    this.getSWData();
    this.getRecepient();
    this.displayPaymentInfo();
    this.displayRecap();
    this.displayUserInfo();
    //storage.delete(key: "beneficiaireNew");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: <Widget>[
          _buildBody()
          /*Align(
            child: _buildBottomBar(),
            alignment: Alignment.bottomCenter,
          )*/
          ,
        ],
      ),
    );
  }

  Widget _buildBody() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Expanded(
          child: Container(
            decoration: BoxDecoration(
              color:kPrimaryColor ,
              borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(
                66,
              )),

            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: <Widget>[
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.only(
                     // top: 48,
                      //bottom: 42,
                      left: 24,
                    ),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                      Expanded(
                        child:   MaterialButton(
                          minWidth:10,
                          color: Colors.white,
                          shape: CircleBorder(),
                          elevation: 0,
                          child: Icon(Icons.arrow_back),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (BuildContext context) =>
                                      AccueilBootomBarPage()),
                              //   ModalRoute.withName('/')
                            );
                            //_showUserPassword();
                          },
                        ),
                      ),
                        Text(
                          "Vous envoyez",
                          style: TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.w600,
                            color: Colors.white
                          ),
                        ),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Text(
                              _amount.toString()+' '+_senderCurrencySymbole,
                              style: TextStyle(
                                fontSize: 42,
                                fontWeight: FontWeight.bold,
                                  color: Colors.white
                              ),
                            ),
                            SizedBox(
                              height: 8,
                            ),
                            ListTile(
                              title: Text('Commission',
                                style: TextStyle(
                                fontWeight: FontWeight.w600,
                                    color: Colors.white
                                ),
                              ),
                              subtitle: Text(_transac_commission.toString()+' '+_senderCurrencySymbole,
                                  style: TextStyle(
                                     fontWeight: FontWeight.w600,
                                      color: Colors.white
                                  )
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 36, horizontal: 12),
                    child: Icon(
                      FontAwesomeIcons.moneyCheckAlt,
                      color: Colors.white,
                      size: 100,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
        Expanded(
            child: Container(
          child: _buildRecepientsSection(),
        )),
      ],
    );
  }

  Widget _buildDropDownPointRetrait() {
    return Container(
      width: 50,
      padding: const EdgeInsets.only(left: 10.0, right: 10.0),
      decoration: BoxDecoration(
        color: kPrimaryColor,
          borderRadius: BorderRadius.circular(5.0), border: Border.all()),
      child: ButtonTheme(
      alignedDropdown: true,
      child: DropdownButtonHideUnderline(
        child: DropdownButton(
          hint: Text("Choisir un point de retrait",
         style: TextStyle(fontSize: 14.0, color: Color(0xFFF5F5F5)),),
          items: receiver_point_retait?.map((item) {
            return DropdownMenuItem(
              child: Text(item['agence_name']),
              value: item['id'],
            );
          })?.toList() ??
              [],
          onChanged: (newVal) {
            setState(() {
              var selectedPoint =
              receiver_point_retait.map((item) => item).toList();
              selectedPoint.forEach((f) => {
                if (f['id'] == newVal)
                  {
                    if (!f['agence_isdisponible'])
                      {
                        print("indispo"),
                        showAlertDialogPointRetrait(context)
                      }
                  }
              });
              _mySelectionPointRetrait = newVal;
            });
          },
          value: _mySelectionPointRetrait,
          style: new TextStyle(
            color: Colors.black,
          ),
        ),
      ),
      )
    );
  }

  Future<List> getRecepient() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var beneficiaireInfo = await storage.read(key: "beneficiaireNew");
    http.Response response = await http.get(apiUrl + '$user_id',
        headers: {
          "Accept": "application/json",
          'Authorization': 'Bearer $token',
        }
    );
    List allBeneficiaireList = List();
    json.decode(response.body)['data_beneficiaire']?.forEach((k, v) {
      allBeneficiaireList.add(v[0]);
    });
    if(beneficiaireInfo != null){
      List responseJsonBeneficiaire = json.decode(beneficiaireInfo);
      responseJsonBeneficiaire.forEach((element) {
        allBeneficiaireList.add(element);
      });
    }
    /*setState(() {
      allBeneficiaireList;
    });*/
    return allBeneficiaireList;
  }

  Widget _buildRecepientsSection() {
    var smallItemPadding = EdgeInsets.only(
        left: 12.0, right: 12.0, top: 12.0);
    if (screenWidth <= 320) {
      smallItemPadding = EdgeInsets.only(
          left: 10.0, right: 10.0, top: 12.0);
    }
    return Container(
      color: Colors.transparent,
      child: Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.symmetric(
              vertical: 16,
            ),
            child: Text(
              "Choisissez un point de retrait",
              style: TextStyle(
                  fontWeight: FontWeight.w600, color: Colors.black),
            ),
          ),
          ListTile(
            title: _buildDropDownPointRetrait(),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(
              vertical: 16,
            ),
            child: ListTile(
                    title: Text(
                      "Choisissez un destinataire",
                      style: TextStyle(
                      fontWeight: FontWeight.w600, color: Colors.black),
                      ),
                    trailing: MaterialButton(
                      color: kPrimaryColor,
                      shape: CircleBorder(),
                      elevation: 0,
                      child: Icon(Icons.person_add,color: Colors.white),
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (BuildContext context) =>
                                  RegisterBeneficiairePage()),
                          //   ModalRoute.withName('/')
                        );
                        //_showUserPassword();
                      },
                    )
                   )
          ),
          Flexible(
            child: FutureBuilder<List<dynamic>>(

              future: getRecepient(),
              builder: (BuildContext context, AsyncSnapshot<List<dynamic>> snapshot) {
                if (snapshot.hasData) {
                  final List<dynamic> data = snapshot.data;
                  return
                    ListView.builder(
                      padding: EdgeInsets.all(8),
                      itemCount: snapshot.data.length,
                      itemBuilder: (BuildContext context, int index) {
                        return
                         Container(
                           child:  Card(
                             color: kPrimaryColor,
                             child: Column(
                               children: <Widget>[
                                 ListTile(
                                   title: Text(snapshot.data[index]
                                   ['receiver_first_name']+' '+snapshot.data[index]
                                   ['receiver_last_name'].toString().toUpperCase(),
                                       style: TextStyle(
                                           fontWeight: FontWeight.w600,
                                           color: Colors.white
                                       )
                                   ),
                                   leading: new CircleAvatar(
                                     backgroundColor: Colors.white,
                                     child: Text(
                                       '${snapshot.data[index]['receiver_first_name'].substring(0, 1)}',
                                     ),
                                   ),
                                   trailing: MaterialButton(
                                     color: Colors.white,
                                     shape: CircleBorder(),
                                     elevation: 0,
                                     child: Icon(Icons.arrow_forward_ios,color: kPrimaryColor),
                                     onPressed: () {
                                       if (_mySelectionPointRetrait == null){
                                         final snackBar = SnackBar(
                                           content: Text('Veuillez choisir le point de retrait'),
                                           action: SnackBarAction(
                                             label: 'Ok',
                                             onPressed: () {
                                               //Navigator.pop(context,true);
                                             },
                                           ),
                                         );

                                         // Find the Scaffold in the widget tree and use
                                         // it to show a SnackBar.
                                         Scaffold.of(context).showSnackBar(snackBar);
                                       }
                                       else {
                                         _beneficiaireID = snapshot.data[index]['id'];
                                         _showBeneficiaireInfo();
                                       }
                                     },
                                   ),

                                 )
                               ],
                             ),
                           ),
                         );
                      }
                      );
                } else {
                  return Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Text('En cours'),
                          CircularProgressIndicator()
                        ],
                      )
                  );
                }
              },
            ),
          ),
          /*   CarouselSlider(
            enableInfiniteScroll: true,
            items: data.map((recipient) {
              return
                Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  CircleAvatar(
                      backgroundColor: Colors.blue,
                      child: Text(
                          '${recipient['receiver_first_name'].substring(0, 1)}')),
                  SizedBox(
                    height: 4,
                  ),
                 Text(
                  recipient['receiver_first_name'],
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ],
              );
            }).toList(),
            initialPage: 0,
            height: 150,
            viewportFraction: 0.3,
            enlargeCenterPage: true,
            scrollDirection: Axis.horizontal,
          )*/
        ],
      ),
    );
  }
/*  Widget _buildBottomBar() {
    return Card(
      color: Color(0xff2D294A),
      shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.only(
        bottomLeft: Radius.circular(36),
        bottomRight: Radius.circular(36),
      )),
      margin: EdgeInsets.all(16),
      child: Padding(
        padding: const EdgeInsets.symmetric(
          vertical: 6,
        ),
        child:
            Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
          Expanded(
            child: IconButton(
                icon: Icon(
                  bottomBarIcons[0],
                  color:
                      currentTabSelected == 0 ? Colors.pink : Color(0xff757495),
                ),
                onPressed: () {
                  setState(() {
                    currentTabSelected = 0;
                  });
                }),
          ),
          Expanded(
            child: IconButton(
                icon: Icon(
                  bottomBarIcons[1],
                  color:
                      currentTabSelected == 1 ? Colors.pink : Color(0xff757495),
                ),
                onPressed: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (_) => StatisticsPage()));
                }),
          ),
          Expanded(
            child: IconButton(
                icon: Icon(
                  bottomBarIcons[2],
                  color:
                      currentTabSelected == 2 ? Colors.pink : Color(0xff757495),
                ),
                onPressed: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => HelpPage(),
                      ));
                }),
          ),
        ]),
      ),
    );
  }*/
}
