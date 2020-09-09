import 'dart:convert';

import 'package:direct_select/direct_select.dart';
import 'package:fancy_alert_dialog/fancy_alert_dialog.dart';
import 'package:fancy_dialog/fancy_dialog.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
class TransactionPage extends StatefulWidget {
  static final String path = "lib/src/pages/login/auth3.dart";

  @override
  _TransactionState createState() => _TransactionState();
}

class _TransactionState extends State<TransactionPage> {
  final fromTextController = TextEditingController();
  List<String> currencies;
  String fromCurrency = "USD";
  String toCurrency = "GBP";
  String result;
  Color color2 = _colorFromHex("#b74093");
  final formKey = new GlobalKey<FormState>();
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
  Widget _buildDropButton() {
    return  Container(
        padding:
        EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(
            color: Colors.blue,
            borderRadius: BorderRadius.circular(10)),
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
         })
    );
  }
  @override
  void initState() {
    super.initState();
    _loadCurrencies();
  }

  Future<String> _loadCurrencies() async {
    String uri = "https://api.exchangeratesapi.io/latest";
    var response = await http
        .get(Uri.encodeFull(uri), headers: {"Accept": "application/json"});
    var responseBody = json.decode(response.body);
    Map curMap = responseBody['rates'];
    currencies = curMap.keys.toList();
    setState(() {});
    print(currencies);
    return "Success";
  }

  Future<String> _doConversion() async {
    String uri = "https://api.exchangeratesapi.io/latest?base=$fromCurrency&symbols=$toCurrency";
    var response = await http
        .get(Uri.encodeFull(uri), headers: {"Accept": "application/json"});
    var responseBody = json.decode(response.body);
    setState(() {
      result = (double.parse(fromTextController.text) * (responseBody["rates"][toCurrency])).toStringAsFixed(2);
    });
    print(result);
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Estimation du transfert"),
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
                      title: TextField(
                        decoration: InputDecoration(
                          hintText: "Saisir le montant à envoyer",
                          border: OutlineInputBorder(),
                        ),
                        controller: fromTextController,
                        style: TextStyle(fontSize: 20.0, color: Colors.black),
                        keyboardType:
                        TextInputType.numberWithOptions(decimal: true),
                      ),
                      trailing: _buildDropDownButton(fromCurrency),
                    ),
                    IconButton(
                      icon: Icon(Icons.arrow_downward),
                      onPressed: _doConversion,
                    ),
                        ListTile(
                          title: Chip(
                            backgroundColor: Colors.transparent,
                            label: result != null ?
                            Text(
                              result,
                              style: Theme.of(context).textTheme.display1,
                            ) : Text("Resultat attendu"),
                          ),
                          trailing: _buildDropButton(),
                        ),
                    const SizedBox(height: 30.0),
                    Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          Padding(
                            padding: const EdgeInsets.only(left: 20.0),
                            child: Text(
                              "Choisir un point de retrait",
                              style: TextStyle(
                                  color: Colors.black, fontWeight: FontWeight.w500),
                            ),
                          ),
                          const SizedBox(height: 20.0),
                          DirectSelect(
                              itemExtent: 35.0,
                              selectedIndex: selectedIndex1,
                              child: MySelectionItem(
                                isForList: false,
                                title: point_retrait[selectedIndex1],
                              ),
                              onSelectedItemChanged: (index) {
                                setState(() {
                                  selectedIndex1 = index;
                                });
                              },
                              items: _buildItems1()),
                          const SizedBox(height: 20.0),
                        ]
                    ),
                   Container(
                     decoration: const BoxDecoration(
                       border: Border(
                         left: BorderSide(width: 10.0, color: Colors.indigoAccent),
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
                             padding: const EdgeInsets.only(left: 10.0),
                             child: Text(
                               "Montant à recevoir :",
                               style: TextStyle(
                                   color: Colors.black, fontWeight: FontWeight.w500),
                             ),
                           ),
                           Chip(
                             backgroundColor: Colors.transparent,
                             label: result != null ?
                             Text(
                               (double.parse(result) + 12).toStringAsFixed(2),
                               style: Theme.of(context).textTheme.display1,
                             ) : Text(""),
                           )
                         ],
                       ),
                     ),
                   ),
                    const SizedBox(height: 20.0),
                    Container(
                      decoration: const BoxDecoration(
                        border: Border(
                          left: BorderSide(width: 10.0, color: Colors.black54),
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
                              padding: const EdgeInsets.only(left: 10.0),
                              child: Text(
                                "Montant commission :",
                                style: TextStyle(
                                    color: Colors.black, fontWeight: FontWeight.w500),
                              ),
                            ),
                            Chip(
                              backgroundColor: Colors.transparent,
                              label: result != null ?
                              Text(
                                12.toString(),
                                style: Theme.of(context).textTheme.display1,
                              ) : Text(""),
                            )
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(height: 20.0),
                    Container(
                      decoration: const BoxDecoration(
                        border: Border(
                          left: BorderSide(width: 10.0, color: Colors.redAccent),
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
                              padding: const EdgeInsets.only(left: 10.0),
                              child: Text(
                                "Montant total à payer :",
                                style: TextStyle(
                                    color: Colors.black, fontWeight: FontWeight.w500),
                              ),
                            ),
                            Chip(
                              backgroundColor: Colors.transparent,
                              label: result != null ?
                              Text(
                                (double.parse(fromTextController.text) + 12).toStringAsFixed(2),
                                style: Theme.of(context).textTheme.display1,
                              )
                                  : Text(""),
                            )
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
                          if(fromTextController.text.isEmpty){
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
                          }
                          else{
                            FancyAlertDialog.showFancyAlertDialog(
                              context,
                              'Confirmation',
                              'Le montant a envoyé est de'+fromTextController.text
                                  +'.Le montant à recevoir est de' + (double.parse(result) + 12).toStringAsFixed(2)
                                  +'.Le montant de la commission est de' + 12.toString()
                                  +'.Le montant total est de ' + (double.parse(fromTextController.text) + 12).toStringAsFixed(2),
                              Colors.blue,
                              icon: Icon(
                                Icons.clear,
                                color: Colors.white,
                              ),
                              labelPositiveButton: 'OK',
                              onTapPositiveButton: () {
                                Navigator.pop(context);
                                // Navigator.pop(context);
                               /* Navigator.push(context, MaterialPageRoute(builder: (context) =>PaymentPage()),);*/
                              },
                              labelNegativeButton: 'Annulez',
                              onTapNegativeButton: () {
                                Navigator.pop(context);
                                print('tap negative button');
                              },
                            );
                          }
                          // Navigator.push(context, MaterialPageRoute(builder: (context) =>PaymentPage()),);
                        },
                      ),
                    ),
                  ],
                ),
              ],
            )
          ),
        ),
      ),
    );
  }

  Widget _buildDropDownButton(String currencyCategory) {
    return Container(
      padding:
      EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
          color: Colors.blue,
          borderRadius: BorderRadius.circular(10)),
      child: DropdownButton(
        value: currencyCategory,
        icon: Icon(Icons.arrow_drop_down),
        iconSize: 42,
        underline: SizedBox(),
        items: currencies.map((String value) => DropdownMenuItem(
          value: value,
          child: Container(
            child: Row(
              children: <Widget>[
                Text(value, style:TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.w500
                )),
              ],
            ),
          ),
        )
        )
            .toList(),
        onChanged: (String value) {
          if(currencyCategory == fromCurrency){
            _onFromChanged(value);
          }else {
            _onToChanged(value);
          }
        },
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
      width: MediaQuery
          .of(context)
          .size
          .width,
      alignment: Alignment.center,
      child: FittedBox(
          child: Text(
            title,
          )),
    );
  }
}
