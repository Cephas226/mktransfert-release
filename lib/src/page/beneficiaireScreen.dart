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
  double amountWaitted=1;
  int _beneficiaireID;
  int _mySelectionPointRetrait;
  String _senderCurrency="EUR";
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
  List<ListItemGnf> _dropdownItemsGnf = [
    ListItemGnf("assets/Image/gnf.png", "GNF"),
    ListItemGnf("assets/Image/eu.png", "EUR"),
  ];

  List<DropdownMenuItem<ListItemGnf>> _dropdownMenuItemsGnf;
  ListItemGnf _selectedItemGnf;

  List<DropdownMenuItem<ListItemGnf>> buildDropDownMenuItemsGnf(
      List listItems) {
    List<DropdownMenuItem<ListItemGnf>> items = List();
    for (ListItemGnf listItem in listItems) {
      items.add(
        DropdownMenuItem(
          child: Row(
            children: <Widget>[
              Text(listItem.name),
              Image.asset(listItem.imageGnf, width: 30),
            ],
          ),
          value: listItem,
        ),
      );
    }
    return items;
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
    //print(_taux);
  }
  @override
  Future<void> initState()  {
    super.initState();
    this.displayPaymentInfo();
    _dropdownMenuItemsGnf = buildDropDownMenuItemsGnf(_dropdownItemsGnf);
    _selectedItemGnf = _dropdownMenuItemsGnf[0].value;
  }
  Future<double> _doConversionEur() async {
   /* _convertResult=0;
    fromTextControllerReceiver.text="";
    fromTextControllerToReceiveMontant.text="";
    fromTextControllerCommission.text="";
    --
    _convertResult=(double.parse(valeurSaisie)*b)+a;
    fromTextControllerReceiver.text=_convertResult.toString();
    fromTextControllerToReceiveMontant.text=fromTextControllerReceiver.text;
    fromTextControllerCommission.text=a.toString();
    fromTextControllerTotal.text=(double.parse(fromTextControllerToReceiveMontant.text)+double.parse(fromTextControllerCommission.text)).toString();

    _stripeAmount=double.parse(valeurSaisie)+double.parse(fromTextControllerCommission.text);
    */
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
                      this.amount = int.parse(amount);
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
    return Row(
      children: <Widget>[
        DropdownButtonHideUnderline(
          child: DropdownButton(
              value: _selectedItemGnf,
              items: _dropdownMenuItemsGnf,
              onChanged: (value) {
                setState(() {
                  _selectedItemGnf = value;
                  //.. _user.pays=_selectedItem.name;
                  if (_selectedItemGnf.name!='GNF'){
                    this.amountWaitted=this.amount.toDouble();
                  }
                  if (_selectedItemGnf.name=='GNF'){
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
                    if (_selectedItemGnf.name!='GNF'){
                      amount--;
                      this.amountWaitted=this.amount.toDouble();
                    }
                    if (_selectedItemGnf.name=='GNF'){
                      amount--;
                      _doConversionEur();
                    }
                  });
                },
                icon: Icons.remove,
              ),
              Text(
                this._senderCurrency.toUpperCase()+" "+"$amount",
                style: TextStyle(
                  color: kPrimaryColor,
                  fontSize: 42,
                ),
              ),
              RoundButton(
                onTap: () {
                  setState(() {
                    if (_selectedItemGnf.name!='GNF'){
                      amount++;
                      this.amountWaitted=this.amount.toDouble();
                    }
                    if (_selectedItemGnf.name=='GNF'){
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
                amount = newValue.toInt();
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
