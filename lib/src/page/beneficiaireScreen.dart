import 'dart:convert';
import 'dart:ffi';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:minimize_app/minimize_app.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/navigation.dart';
import 'package:mktransfert/src/page/pagePrincipale.dart';
import 'package:mktransfert/src/page/transaction.dart';
import 'package:mktransfert/src/utils/oval-right-clipper.dart';
import 'package:mktransfert/src/widget/round_button.dart';
import 'package:mktransfert/src/widget/round_corner_button.dart';
import 'package:mktransfert/src/widget/round_corner_image.dart';
import 'package:http/http.dart' as http;
import '../../recipients_provider.dart';
import 'AccueilBottomBar.dart';
import 'accueil.dart';
import 'transfertRecap.dart';
final storage = FlutterSecureStorage();
class PaymentsScreen extends StatefulWidget {
  @override
  _PaymentsScreenState createState() => _PaymentsScreenState();
}

class _PaymentsScreenState extends State<PaymentsScreen> {
  String displayUser_last_name;
  String displayUser_first_name;
  String displayUser_email;
  int amount = 10;

  double amountWaitted = 10;
  double amountTotal;
  double commission;
  int _beneficiaireID;
  int _mySelectionPointRetrait;
  String _senderCurrency = "";
  String _senderCurrencySymbole = "";
  String _receiverCurrency;
  double _convertResult;
  int maxSlider = 9999;
  double _stripeAmount;
  var myAmountController = TextEditingController();
  double _taux;
  double _conversion_eur;
  double _conversion_usd;

  var country_isdisponible;

  String _mySelectionCountry;
  var receiver_point_retait = List();
  @override
  Widget build(BuildContext context) {
    Future<bool> _onBackPressed() {
      return showDialog(
        context: context,
        builder: (context) => new AlertDialog(
          title: new Text('Êtes-vous sûr?'),
          content: new Text('Voulez-vous quitter l\'application'),
          actions: <Widget>[
            new GestureDetector(
              onTap: () => Navigator.of(context).pop(false),
              child: Text("Non"),
            ),
            SizedBox(height: 16),
            new GestureDetector(
              onTap: () => {
                Navigator.of(context).pop(false),
                Navigator.push(context,  MaterialPageRoute(
                    builder: (context) => AccueilPage()),
                ),
               // MinimizeApp.minimizeApp(),
              },
              child: Text("Oui"),
            ),
          ],
        ),
      ) ??
          false;
    }
    return
      new WillPopScope(
        onWillPop: _onBackPressed,
        child: Scaffold(
          drawerEnableOpenDragGesture: false,
          // drawer:   _buildDrawer(),
          appBar: AppBar(
            leading: IconButton(
                icon: Icon(Icons.arrow_back, color: Colors.white),
                onPressed: () => Navigator.push(context,
                    MaterialPageRoute(builder: (context) => PagePrincipale()))
            ),
            backgroundColor: Colors.transparent,
            automaticallyImplyLeading: true,
            title: Text(
              "Envoyer de l'argent",
            ),
            elevation: 0,
            centerTitle: true,
          ),
          backgroundColor: kPrimaryColor,
          body: _buildBody(),

          bottomNavigationBar: _buildButtonsSection(),
        ));
  }

  displayMontantSend() async {
    var montantSend = await storage.read(key: "montantSend");
    if (montantSend == '') {
      this.amount = 10;
      this.myAmountController.text=this.amount.toString();
      _doConversionEur();
    } else {
      this.amount = int.parse(montantSend);
      this.myAmountController.text=this.amount.toString();
      _doConversionEur();
    }
  }

  displayUserInfo() async {
    var jwt = await storage.read(key: "userInfo");
    Map<String, dynamic> responseStorageUser = json.decode(jwt);
    displayUser_first_name = responseStorageUser["first_name"];
    displayUser_last_name = responseStorageUser["last_name"];
    displayUser_email = responseStorageUser["email"];
  }

  Future<AlertDialog> maxAlert(BuildContext context) {
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
                      'Pour ce montant merci de contacter MK Tranfert pour effectuer votre opération  Numéros de téléphone 0033760562143 et 0033661217174 ')
                ],
              ),
            ),
          ),
          actions: <Widget>[
            FlatButton(
                onPressed: () {
                  setState(() {
                    /*this.amountWaitted=9999;
                    this.amount=9999;
                    this.myAmountController.text=this.amount.toString();*/
                    if (_selectedItemReceiver.name != 'GNF') {
                      this.amount = 9999;
                      this.amountWaitted = this.amount.toDouble();
                      this.commission = this.amount * this._taux;
                      this.myAmountController.text=this.amount.toString();
                    }
                    if (_selectedItemReceiver.name == 'GNF') {
                      this.amount = 9999;
                      this.myAmountController.text=this.amount.toString();
                      _doConversionEur();
                    }
                  });
                  Navigator.of(context).pop();
                },
                child: Text("Ok")
            )
          ],
        );
      },
    );
  }

  displayPaymentInfo() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var res = await http
        .get(
            Uri.encodeFull(
                'https://www.mktransfert.com/api/payment/' + '$user_id'),
            headers: {
              "Accept": "application/json",
              'Authorization': 'Bearer $token',
            })
        .then((value) => {
              if (value.statusCode == 200)
                {
                  _senderCurrency = json.decode(value.body)['API_transac_data']
                      ['devise_sender'],
                  _taux = json.decode(value.body)['API_transac_data']['taux'],
                  _conversion_eur = json.decode(value.body)['API_transac_data']
                      ['conversion_eur'],
                  _conversion_usd = json.decode(value.body)['API_transac_data']
                      ['conversion_usd'],
                  json.decode(value.body)['point_retait']?.forEach((k, v) {
                    receiver_point_retait.add(v[0]);
                  }),
                    setState(() {
                    _conversion_eur = json.decode(value.body)['API_transac_data']
                    ['conversion_eur'];
                    _conversion_usd = json.decode(value.body)['API_transac_data']
                    ['conversion_usd'];
                    })
                },
            })
        .catchError((erreur) => print(erreur));

    if (_senderCurrency == 'eur') {
      setState(() {
        _dropdownMenuItemsReceiver.add(DropdownMenuItem(
          child: Row(
            children: <Widget>[
              Text('EUR'),
              Image.asset("assets/Image/eu.png", width: 20),
            ],
          ),
          value: ListItemReceiver("assets/Image/eu.png", "EUR", 2),
        ));
        _doConversionEur();
        this._senderCurrencySymbole = '€';
      });
    }
    if (_senderCurrency == 'usd') {
      _dropdownMenuItemsReceiver.add(DropdownMenuItem(
        child: Row(
          children: <Widget>[
            Text('USD'),
            Image.asset("assets/Image/us.png", width: 20),
          ],
        ),
        value: ListItemReceiver("assets/Image/us.png", "USD", 2),
      ));
      _doConversionEur();
      this._senderCurrencySymbole = '\$';
    }

  }

  @override
  Future<void> initState() {
    super.initState();
    this.displayPaymentInfo();
    _doConversionEur();
    _dropdownMenuItemsReceiver = buildDropDownMenuItemsReceiver(_dropdownItemsReceiver);
    _selectedItemReceiver = _dropdownMenuItemsReceiver[0].value;
    displayUserInfo();
    displayMontantSend();
  }

  List<ListItemReceiver> _dropdownItemsReceiver = [
    ListItemReceiver("assets/Image/gnf.png", "GNF", 1),
  ];

  List<DropdownMenuItem<ListItemReceiver>> _dropdownMenuItemsReceiver;
  ListItemReceiver _selectedItemReceiver;

  List<DropdownMenuItem<ListItemReceiver>> buildDropDownMenuItemsReceiver(
      List listItems) {
    List<DropdownMenuItem<ListItemReceiver>> items = List();
    for (ListItemReceiver listItem in listItems) {
      items.add(
        DropdownMenuItem(
          child: Row(
            children: <Widget>[
              Text(listItem.name, style: TextStyle(fontSize: 10)),
              Image.asset(listItem.imageReceiver, width: 20),
            ],
          ),
          value: listItem,
        ),
      );
    }
    return items;
  }

  Future<double> _doConversionEur() async {
    if (_senderCurrency =='eur'){
      this.amountWaitted = this.amount * this._conversion_eur;
      this.commission = this.amount * this._taux;
      this.amountTotal = this.amount + this.commission;
    }
    if (_senderCurrency =='usd'){
      this.amountWaitted = this.amount * this._conversion_usd;
      this.commission = this.amount * this._taux;
      this.amountTotal = this.amount + this.commission;
    }
  }

  Future<double> _doConversionUSD() async {
    this.amountWaitted = this.amount * this._conversion_usd;
    this.commission = this.amount * this._taux;
    this.amountTotal = this.amount + this.commission;
  }

  Widget _buildBody() {
    return Container(
      margin: EdgeInsets.only(top: 50),
      height: double.maxFinite,
      width: double.maxFinite,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.only(
          topRight: Radius.circular(48),
          topLeft: Radius.circular(48),
        ),
        color: Colors.white,
      ),
      child: ListView(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: 20,
              vertical: 28,
            ),
            child: Text(
              "Combien souhaitez-vous envoyer",
              textAlign: TextAlign.center,
              style: kTextStyle.copyWith(color: Colors.grey.shade700),
            ),
          ),
          Padding(
            padding:
                const EdgeInsets.only(left: 50, right: 50, top: 0, bottom: 0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: kAmounts.map((amount) {
                return RoundCornerButton(
                  text: amount,
                  onTap: () {
                    setState(() {
                      if (_selectedItemReceiver.name != 'GNF') {
                        this.amount = int.parse(amount);
                        this.amountWaitted = this.amount.toDouble();
                        this.commission = this.amount * this._taux;
                        this.myAmountController.text=this.amount.toString();
                      }
                      if (_selectedItemReceiver.name == 'GNF') {
                        this.amount = int.parse(amount);
                        this.myAmountController.text=this.amount.toString();
                        _doConversionEur();
                      }
                    });
                  },
                );
              }).toList(),
            ),
          ),
          Divider(),
          _buildAmountSection(),
          _buildRecepientsSection(),
         /* amountTotal != null
              ? _buildRecepientsSection()
              : Center(
                  child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Text('En cours'),
                    CircularProgressIndicator()
                  ],
                )
          )*/
        ],
      ),
    );
  }

  Widget _buildDropButtonTo() {
    return Row(
      children: <Widget>[
        DropdownButtonHideUnderline(
          child: DropdownButton(
              value: _selectedItemReceiver,
              items: _dropdownMenuItemsReceiver,
              onChanged: (value) {
                setState(() {
                  _selectedItemReceiver = value;
                  if (_selectedItemReceiver.name != 'GNF') {
                    this.amountWaitted = this.amount.toDouble();
                    this.commission = this.amount * this._taux;
                    this.amountTotal = this.amount + this.commission;
                  }
                  if (_selectedItemReceiver.name == 'GNF') {
                    _doConversionEur();
                  }
                });
              }),
        )
      ],
    );
  }

  Widget _buildAmountSection() {
    return Padding(
      padding: const EdgeInsets.only(left: 30, right: 30, top: 0, bottom: 0),
      child: Column(
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              RoundButton(
                onTap: () {
                  setState(() {
                    if (_selectedItemReceiver.name != 'GNF') {
                      amount--;
                      this.amountWaitted = this.amount.toDouble();
                      this.commission = this.amount * this._taux;
                      this.amountTotal = this.amount + this.commission;
                      this.myAmountController.text=this.amount.toString();
                    }
                    if (_selectedItemReceiver.name == 'GNF') {
                      amount--;
                      this.myAmountController.text=this.amount.toString();
                      _doConversionEur();
                    }
                  });
                },
                icon: Icons.remove,
              ),
              Flexible(
                child: TextFormField(
                  controller: myAmountController,
                  decoration: InputDecoration(
                    hintText: "1000€",
                  ),
                  keyboardType: TextInputType.numberWithOptions(decimal: true),
                  onChanged: (val) => {
                    setState(() {
                      this.amount=int.parse(val);
                      _doConversionEur();
                      if (int.parse(val) > 9999) {
                        this.maxAlert(context);
                        amount = 9999;
                      }
                    }),
                    //myAmountController.text=this.amount.toString()
                  },
                ),
              ),
              _senderCurrency == "eur"? Flexible(child: Text(
                'Euros',
                style: TextStyle(
                  color: kPrimaryColor,
                 fontSize: 20,
                ),
              )
              ):
              Flexible(child: Text(
                'USD',
                style: TextStyle(
                  color: kPrimaryColor,
                  fontSize: 20,
                ),
              )
              ),
              RoundButton(
                onTap: () {
                  setState(() {
                    if (_selectedItemReceiver.name != 'GNF') {
                      amount++;
                      if (amount > 9999) {
                        this.maxAlert(context);
                        amount = 9999;
                      }
                      this.amountWaitted = this.amount.toDouble();
                      this.commission = this.amount * this._taux;
                      this.amountTotal = this.amount + this.commission;
                      this.myAmountController.text=this.amount.toString();
                    }
                    if (_selectedItemReceiver.name == 'GNF') {
                      amount++;
                      this.myAmountController.text=this.amount.toString();
                      if (amount > 9999) {
                        this.maxAlert(context);
                        amount = 9999;
                      }
                      _doConversionEur();
                    }
                  });
                },
                icon: Icons.add,
              ),
            ],
          ),
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                //padding: EdgeInsets.only(left: 2),
                child: Row(
                  children: <Widget>[
                    Center(
                      child: Text(
                        "Choisissez votre monnaie de réception",
                        style: TextStyle(
                          color: kPrimaryColor,
                          fontSize: 15,
                        ),
                      ),
                    )
                  ],
                ),
              )
            ],
          ),
          Divider(),
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Container(
                padding: EdgeInsets.only(left: 2),
                child:
                Row(
                  children: <Widget>[
                    Text(
                      "$amountWaitted",
                      style: TextStyle(
                        color: kPrimaryColor,
                        fontSize: 30,
                      ),
                    ),
                    SizedBox(
                      width: 10,
                    ),
                    _buildDropButtonTo()
                  ],
                ),
              )
            ],
          ),
          Divider(),
        ],
      ),
    );
  }

  Widget _buildRecepientsSection() {
    _doConversionEur();
    return Container(
      color: kBackgroundWhiteColor,
      child: Column(
        children: <Widget>[
          Container(
            margin: EdgeInsets.only(left: 10),
            decoration: const BoxDecoration(
              border: Border(
                left: BorderSide(width: 10.0, color: kPrimaryColor),
              ),
            ),
            height: 60,
            child: Card(
              color: Theme.of(context).primaryColor,
              elevation: 3.0,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  Expanded(
                    child: Padding(
                        padding: const EdgeInsets.only(left: 10.0),
                        child: ListTile(
                          leading: Text(
                            "Montant à recevoir",
                            style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.w500),
                          ),
                          trailing:
                          _selectedItemReceiver.name=='GNF'?
                          Text(
                              this.amountWaitted.toString() +
                                  ' ' +
                                  _selectedItemReceiver.name,
                              style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.w500)
                          ):Text(
                              this.amount.toString() +
                                  ' ' +
                                  _selectedItemReceiver.name,
                              style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.w500)
                          ),
                        )),
                  )
                ],
              ),
            ),
          ),
          const SizedBox(height: 10.0),
          Container(
            margin: EdgeInsets.only(left: 10),
            decoration: const BoxDecoration(
              border: Border(
                left: BorderSide(width: 10.0, color: Colors.black54),
              ),
            ),
            height: 60,
            child: Card(
              color: kBackgroundBorderCommissionColor,
              elevation: 3.0,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  Expanded(
                    child: Padding(
                        padding: const EdgeInsets.only(left: 10.0),
                        child: ListTile(
                          leading: Text(
                            "Montant commission",
                            style: TextStyle(
                                color: Colors.black,
                                fontWeight: FontWeight.w500),
                          ),
                          trailing: this.commission != null?Text(
                          this.commission.toStringAsFixed(2)+ ' ' +
                             _senderCurrencySymbole,
                              style: TextStyle(
                                  color: Colors.black,
                                  fontWeight: FontWeight.w500)
                          ):CircularProgressIndicator(),
                        )),
                  )
                ],
              ),
            ),
          ),
          const SizedBox(height: 10.0),
          Container(
            margin: EdgeInsets.only(left: 10),
            decoration: const BoxDecoration(
              border: Border(
                left: BorderSide(width: 10.0, color: Colors.red),
              ),
            ),
            height: 60,
            child: Card(
              color: kBackgroundBorderCommissionColor,
              elevation: 3.0,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  Expanded(
                    child: Padding(
                        padding: const EdgeInsets.only(left: 10.0),
                        child: ListTile(
                          leading: Text(
                            "Montant total à payer",
                            style: TextStyle(
                                color: Colors.black,
                                fontWeight: FontWeight.w500),
                          ),
                          trailing:
                          this.commission != null?
                          Text(
                              this.amountTotal.toStringAsFixed(2) +
                                  ' ' +
                                  _senderCurrencySymbole,
                              style: TextStyle(
                                  color: Colors.black,
                                  fontWeight: FontWeight.w500)
                          ):CircularProgressIndicator(),
                        )),
                  )
                ],
              ),
            ),
          ),
        ],
      ),
    );

/*      Container(
      color: kBackgroundWhiteColor,
      child: Column(
        children: <Widget>[
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
          CarouselSlider(
            enableInfiniteScroll: true,
            items: RecipientsProvider.recipients.map((recipient) {
              return
               SingleChildScrollView(
                 child:  Column(
                   mainAxisSize: MainAxisSize.min,
                   crossAxisAlignment: CrossAxisAlignment.center,
                   mainAxisAlignment: MainAxisAlignment.start,
                   children: <Widget>[
                     RoundCornerImage(
                       imageUrl: recipient.imageUrl,
                     ),
                     SizedBox(
                       height: 4,
                     ),
                     Text(
                       recipient.name,
                       style: TextStyle(
                         color: Theme.of(context).primaryColor,
                         fontSize: 12,
                         fontWeight: FontWeight.w600,
                       ),
                     ),
                   ],
                 ),
               );
            }).toList(),
            initialPage: 0,
            height: 150,
            viewportFraction: 0.3,
            enlargeCenterPage: true,
            scrollDirection: Axis.horizontal,
          )
        ],
      ),
    );*/
  }

  Widget _buildButtonsSection() {
    return Container(
      color: kBackgroundWhiteColor,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: <Widget>[
            /*   Expanded(
              child: RaisedButton(
                onPressed: () {},
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
            ),*/
            /*SizedBox(
              width: 16,
            ),*/
            Expanded(
              child: RaisedButton(
                onPressed: () {
                  double reciprocal(double d) => 1 / d;
                  storage.write(
                      key: "transactionResume",
                      value: json.encode([
                        {
                          "montant_send": this.amount,
                          "montant_receive": _selectedItemReceiver.name=='GNF'?this.amountWaitted:this.amount.toDouble(),
                          "transac_commission": this.commission.toStringAsFixed(2),
                          "transac_total": this.amountTotal,
                          "devise_send": _senderCurrency,
                          "devise_send_symbol": _senderCurrencySymbole,
                          "devise_receive": _selectedItemReceiver.name
                        }
                      ]));
                   Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => ExpenseTrackerApp()),
                  );
                  print({
                    "montant_send": this.amount,
                    "montant_receive": _selectedItemReceiver.name=='GNF'?this.amountWaitted:this.amount,
                    "transac_commission": this.commission.toStringAsFixed(2),
                    "transac_total": this.amountTotal,
                    "devise_send": _senderCurrency,
                    "devise_send_symbol": _senderCurrencySymbole,
                    "devise_receive": _selectedItemReceiver.name
                  });
                },
                color: kPrimaryColor,
                textColor: Colors.white,
                child: Text(
                  "Envoyer",
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
          ],
        ),
      ),
    );
  }
}
