
import 'dart:convert';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/transaction.dart';
import 'package:mktransfert/src/widget/round_corner_image.dart';
import 'package:http/http.dart' as http;
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
      theme: ThemeData.dark().copyWith(
        primaryColor: Color(0xff1C1934),
        accentColor: Colors.pink,
      ),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final List<IconData> bottomBarIcons = [Icons.calendar_today, Icons.insert_chart, Icons.person_outline];


  double amount = 10;
  int currentTabSelected = 0;
  var receiver_point_retait = List();
  int _mySelectionPointRetrait;
  var country_isdisponible;

  List AllBeneficiaire;
  List data = List();
  var testCountry = List();
  List countrydata = List();
  var editReceiver_last_name = TextEditingController();
  var editReceiver_first_name = TextEditingController();
  var editReceiver_email = TextEditingController();
  var editReceiver_phone = TextEditingController();
  var editReceiver_country = TextEditingController();

  int _beneficiaireID;
  String _mySelectionCountry;

  displayPaymentInfo() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var res = await http.get(
        Uri.encodeFull(
            'https://gracetechnologie.pythonanywhere.com/api/payment/' +
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
  Future<List<dynamic>> fetchMyBeneficiaire() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var res = await http.get(Uri.encodeFull(apiUrl + '$user_id'), headers: {
      "Accept": "application/json",
      'Authorization': 'Bearer $token',
    });
    var countryList = List();
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
    return beneficiaireList;
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
  @override
  void initState() {
    super.initState();
    this.displayPaymentInfo();
    this.fetchMyBeneficiaire();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).primaryColor,
      body: Stack(
        children: <Widget>[
          _buildBody()
          /*Align(
            child: _buildBottomBar(),
            alignment: Alignment.bottomCenter,
          )*/,
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
              borderRadius: BorderRadius.only(bottomLeft: Radius.circular(66,)),
              gradient: LinearGradient(colors: [Color(0xff682CFC),
                Color(0xffB730F9),],
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
              ),
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: <Widget>[
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.only(top: 48, bottom: 42, left: 24,),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[

                        MaterialButton(
                          color: Colors.black,
                          shape: CircleBorder(),
                          elevation: 0,
                          child: Icon(Icons.arrow_back),
                          onPressed: () {
                            Navigator.push(context,
                                MaterialPageRoute(builder: (BuildContext context) => AccueilBootomBarPage()),
                             //   ModalRoute.withName('/')
                            );
                            //_showUserPassword();
                          },
                        ),
                        Text("Transfert", style: TextStyle(
                          fontSize: 28,
                          fontWeight: FontWeight.w600,
                        ),),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Text("\$4.12", style: TextStyle(
                              fontSize: 42, fontWeight: FontWeight.bold,
                            ),),

                            SizedBox(height: 8,),

                            Text("Total Contributions", style: TextStyle(
                              fontSize: 15,
                            ),),
                          ],
                        ),

                        Text("Will be collected on Monday",
                          style: TextStyle(
                            fontSize: 15,
                          ),),

                      ],
                    ),
                  ),
                ),
                Expanded(child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: 36, horizontal: 12),
                  child: Icon(FontAwesomeIcons.piggyBank,
                    color: Color(0xffFB71BC),
                    size: 100,
                  ),
                ),),
              ],
            ),
          ),
        ),
        Expanded(child: Container(
          child: _buildRecepientsSection(),
        )),
      ],
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
           /* print(item);
            country_isdisponible=item['country_isdisponible'];*/
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
                    showAlertDialog(context)
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
  Widget _buildRecepientsSection() {
    return Container(
        color: Colors.transparent,
      child: Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.symmetric(
              vertical: 16,
            ),
            child: Text("Choisissez un point de retrait",
              style: TextStyle(
                  fontWeight: FontWeight.w600,
                  color: Colors.grey.shade600
              ),
            ),
          ),
          ListTile(
            title:  _buildDropDownPointRetrait(),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(
              vertical: 16,
            ),
            child: Text("Choisissez un destinataire",
              style: TextStyle(
                  fontWeight: FontWeight.w600,
                  color: Colors.grey.shade600
              ),
            ),
          ),
          Flexible(
            child: FutureBuilder<List<dynamic>>(
              future: fetchMyBeneficiaire(),
              builder: (BuildContext context,AsyncSnapshot<dynamic> snapshot) {
                if(snapshot.hasData){
                  return ListView.builder(
                      padding: EdgeInsets.all(8),
                      itemCount: snapshot.data.length,
                      itemBuilder: (BuildContext context, int index){
                        return
                          Card(
                            child: Column(
                              children: <Widget>[
                                ListTile(
                                  title:Text(snapshot.data[index]['receiver_first_name']),
                                  leading: new CircleAvatar(
                                      backgroundColor: Colors.blue,
                                      child: Text(
                                          '${snapshot.data[index]['receiver_first_name'].substring(0, 1)}')),
                                  onTap: () {
                                    storage.write(key: "beneficiaireInfo", value: json.encode([
                                      {
                                        "id":snapshot.data[index]['id'],
                                        "receiver_first_name":snapshot.data[index]['receiver_first_name'],
                                        "receiver_last_name":snapshot.data[index]['receiver_last_name'],
                                        "receiver_email":snapshot.data[index]['receiver_email'],
                                        "receiver_phone":snapshot.data[index]['receiver_phone'],
                                        "receiver_country":snapshot.data[index]['receiver_country'],
                                        "receiver_description":snapshot.data[index]['receiver_description']
                                      }
                                    ]));
                                    /*Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                        builder: (context) => TransactionPage(),
                                      ),
                                    );*/
                                    _beneficiaireID=snapshot.data[index]['id'];
                                    _showBeneficiaireInfo();
                                  },
                                )
                              ],
                            ),
                          );
                      });
                }else {
                  return Center(child: CircularProgressIndicator());
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
  Widget _buildBottomBar() {

    return Card(
      color: Color(0xff2D294A),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.only(bottomLeft: Radius.circular(36), bottomRight: Radius.circular(36),)),
      margin: EdgeInsets.all(16),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 6,),
        child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Expanded(
                child: IconButton(icon: Icon(bottomBarIcons[0],
                  color: currentTabSelected == 0 ? Colors.pink : Color(0xff757495),
                ), onPressed: () {
                  setState(() {
                    currentTabSelected = 0;
                  });
                }),
              ),
              Expanded(
                child: IconButton(icon: Icon(bottomBarIcons[1],
                  color: currentTabSelected == 1 ? Colors.pink : Color(0xff757495),
                ), onPressed: () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => StatisticsPage()));
                }),
              ),
              Expanded(
                child: IconButton(icon: Icon(bottomBarIcons[2],
                  color: currentTabSelected == 2 ? Colors.pink : Color(0xff757495),
                ), onPressed: () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => HelpPage(),));
                }),
              ),
            ]
        ),
      ),
    );
  }

}
