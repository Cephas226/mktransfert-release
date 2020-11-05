import 'dart:convert';
import 'dart:ffi';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/navigation.dart';
import 'package:mktransfert/src/page/pagePrincipale.dart';
import 'package:mktransfert/src/widget/round_button.dart';
import 'package:mktransfert/src/widget/round_corner_button.dart';
import 'package:mktransfert/src/widget/round_corner_image.dart';
import 'package:http/http.dart' as http;
import '../../recipients_provider.dart';

class PaymentsScreen extends StatefulWidget {
  @override
  _PaymentsScreenState createState() => _PaymentsScreenState();
}

class _PaymentsScreenState extends State<PaymentsScreen> {
  int amount = 10;
  double amountWaitted=10;
  int _beneficiaireID;
  int _mySelectionPointRetrait;
  String _senderCurrency="";
  String _senderCurrencySymbole="";
  String _receiverCurrency;
  double _convertResult;

  double _stripeAmount;

  double _taux;
  double _conversion_eur;
  double _conversion_usd;

  var country_isdisponible;

  String _mySelectionCountry;
  var receiver_point_retait = List();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Envoyer de l'argent",
        ),
        elevation: 0,
        centerTitle: true,
      ),
      backgroundColor: kPrimaryColor,
      body: _buildBody(),
      bottomNavigationBar: _buildButtonsSection(),
    );
  }

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
        }).then((value) => {
          if (value.statusCode==200){
            _senderCurrency = json.decode(value.body)['API_transac_data']['devise_sender'],
             _taux=json.decode(value.body)['API_transac_data']['taux'],
            _conversion_eur=json.decode(value.body)['API_transac_data']['conversion_eur'],
            _conversion_usd=json.decode(value.body)['API_transac_data']['conversion_usd'],
            json.decode(value.body)['point_retait']?.forEach((k, v) {
                  receiver_point_retait.add(v[0]);
                }),
              },}
              ).catchError((erreur)=>print(erreur));

            if(_senderCurrency=='eur'){
             setState(() {
               _dropdownMenuItemsReceiver.add(
                   DropdownMenuItem(
                     child: Row(
                       children: <Widget>[
                         Text('EUR'),
                         Image.asset("assets/Image/eu.png", width: 30),
                       ],
                     ),
                     value:  ListItemReceiver("assets/Image/eu.png", "EUR",2),
                   ));
               _doConversionEur();
               this._senderCurrencySymbole='€';
             });
            }
    if(_senderCurrency=='usd'){
      _dropdownMenuItemsReceiver.add(
          DropdownMenuItem(
            child: Row(
              children: <Widget>[
                Text('EUR'),
                Image.asset("assets/Image/eu.png", width: 30),
              ],
            ),
            value:  ListItemReceiver("assets/Image/us.png", "USD",2),
          ));
      this._senderCurrencySymbole='\$';
    }
  }
  @override
  Future<void> initState()  {
    super.initState();
    this.displayPaymentInfo();
    _dropdownMenuItemsReceiver = buildDropDownMenuItemsReceiver(_dropdownItemsReceiver);
    _selectedItemReceiver = _dropdownMenuItemsReceiver[0].value;
  }
  List<ListItemReceiver> _dropdownItemsReceiver = [
    ListItemReceiver("assets/Image/gnf.png", "GNF",1),
  /*  ListItemReceiver("assets/Image/eu.png", "EUR",2),
    ListItemReceiver("assets/Image/us.png", "USD",3),*/
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
              Text(listItem.name),
              Image.asset(listItem.imageReceiver, width: 30),
            ],
          ),
          value: listItem,
        ),
      );
    }
    return items;
  }
  Future<double> _doConversionEur() async {
    this.amountWaitted=(this.amount*this._taux)+this._conversion_eur;
    print(amountWaitted);
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
            padding: const EdgeInsets.only(left: 50,right: 50,top: 0,bottom: 0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: kAmounts.map((amount) {
                return RoundCornerButton(
                  text: amount,
                  onTap: () {
                    setState(() {
                      if (_selectedItemReceiver.name!='GNF'){
                        this.amount = int.parse(amount);
                        this.amountWaitted=this.amount.toDouble();
                      }
                      if (_selectedItemReceiver.name=='GNF'){
                        this.amount = int.parse(amount);
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
        ],
      ),
    );
  }
  Widget _buildDropButtonTo() {
   // this.displayPaymentInfo();
  //  print(_senderCurrency);

    return Row(
      children: <Widget>[
        DropdownButtonHideUnderline(
          child: DropdownButton(
              value: _selectedItemReceiver,
              items: _dropdownMenuItemsReceiver,
              onChanged: (value) {
                setState(() {
                  _selectedItemReceiver = value;
                  if (_selectedItemReceiver.name!='GNF'){
                    this.amountWaitted=this.amount.toDouble();
                  }
                  if (_selectedItemReceiver.name=='GNF'){
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
      padding: const EdgeInsets.only(left: 30,right: 30,top: 0,bottom: 0),
      child: Column(
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              RoundButton(
                onTap: () {
                  setState(() {
                    if (_selectedItemReceiver.name!='GNF'){
                      amount--;
                      this.amountWaitted=this.amount.toDouble();
                    }
                    if (_selectedItemReceiver.name=='GNF'){
                      amount--;
                      _doConversionEur();
                    }
                  });
                },
                icon: Icons.remove,
              ),
              Text(
                this._senderCurrencySymbole+" "+"$amount",
                style: TextStyle(
                  color: kPrimaryColor,
                  fontSize: 42,
                ),
              ),
              RoundButton(
                onTap: () {
                  setState(() {
                    if (_selectedItemReceiver.name!='GNF'){
                      amount++;
                      this.amountWaitted=this.amount.toDouble();
                    }
                    if (_selectedItemReceiver.name=='GNF'){
                      amount++;
                      _doConversionEur();
                    }
                  });
                },
                icon: Icons.add,
              ),
            ],
          ),
          Slider(
            value: amount.toDouble(),
            onChanged: (newValue) {
              _doConversionEur();
              setState(() {
                if (_selectedItemReceiver.name!='GNF'){
                  amount = newValue.toInt();
                  this.amountWaitted=this.amount.toDouble();
                }
                if (_selectedItemReceiver.name=='GNF'){
                  amount = newValue.toInt();
                  _doConversionEur();
                }
              });
            },
            min: 10,
            max: 2000,
          ),

          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                padding: EdgeInsets.only(left: 40),
                child: Row(
                  children: <Widget>[
                    Text(
                      "$amountWaitted",
                      style: TextStyle(
                        color: kPrimaryColor,
                        fontSize: 42,
                      ),
                    ),
                    SizedBox(
                      width: 16,
                    ),
                    _buildDropButtonTo()
                   /* RoundButton(

                      onTap: () {
                        setState(() {
                          amount++;
                        });
                      },
                      icon: Icons.add,
                    )*/,
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
    return
    Container (
      color: kBackgroundWhiteColor,
      child: Column(
        children: <Widget>[
          Container(
            margin: EdgeInsets.only(left: 10),
            decoration: const BoxDecoration(
              border: Border(
                left: BorderSide(width: 10.0, color: Colors.indigoAccent),
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
                                color: Colors.white, fontWeight: FontWeight.w500),
                          ),
                          trailing: Text("22",
                              style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.w500)),
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
                left: BorderSide(
                    width: 10.0, color: Colors.black54),
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
                                color: Colors.black, fontWeight: FontWeight.w500),
                          ),
                          trailing: Text("22",
                              style: TextStyle(
                                  color: Colors.black,
                                  fontWeight: FontWeight.w500)),
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
                left: BorderSide(
                    width: 10.0, color: Colors.red),
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
                                color: Colors.black, fontWeight: FontWeight.w500),
                          ),
                          trailing: Text("22",
                              style: TextStyle(
                                  color: Colors.black,
                                  fontWeight: FontWeight.w500)),
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
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => NavigationPage()),
                  );
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
