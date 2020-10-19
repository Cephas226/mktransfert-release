import 'dart:convert';

import 'package:direct_select/direct_select.dart';
import 'package:fancy_alert_dialog/fancy_alert_dialog.dart';
import 'package:fancy_dialog/fancy_dialog.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/core/presentation/res/assets.dart';
class TransactionPage extends StatefulWidget {
  static final String path = "lib/src/pages/login/auth3.dart";

  @override
  _TransactionState createState() => _TransactionState();

}

class _TransactionState extends State<TransactionPage> {
  final fromTextController = TextEditingController();
  final fromTextControllergnf = TextEditingController();
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
         },)
    );
  }
  @override
  void initState() {
    super.initState();
    _loadCurrencies();
    _dropdownMenuItems = buildDropDownMenuItems(_dropdownItems);
    _selectedItem = _dropdownMenuItems[0].value;
   // fromTextController.addListener(_printLatestValue);
  }
  _printLatestValue() {

    print("Hello");

  }

  Future<String> _loadCurrencies() async {
    String uri = "https://api.exchangeratesapi.io/latest";
    var response = await http
        .get(Uri.encodeFull(uri), headers: {"Accept": "application/json"});
    var responseBody = json.decode(response.body);
    Map curMap = responseBody['rates'];
    currencies = curMap.keys.toList();
    currencies.where((f) => f=='EUR'||f=='USD').toList();
    setState(() {});
    print( currencies.where((f) => f=='EUR'||f=='USD').toList());
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
    //print(result);
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
  List<ListItem> _dropdownItems = [
  ListItem(1,  "Boffa"),
  ListItem(2,  "Boke"),
  ListItem(3, "Conakry – Kaloum"),
  ListItem(4, "Conakry – Madina"),
  ListItem(5,  "Conakry - Bambeto"),
  ListItem(6, "Conakry – Enco"),
  ListItem(7,  "Conakry - Matoto"),
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
  ListItem(19,  "Labe"),
  ListItem(20, "Lelouma"),
  ListItem(21, "Mamou"),
  ListItem(22, "N’Zerekore"),
  ListItem(23, "Pita"),
  ListItem(24,"Sangaredji"),
  ListItem(25,  " Timbi Madina"),
  ListItem(26,  "Touba"),
  ];
  List<DropdownMenuItem<ListItem>> _dropdownMenuItems;
  ListItem _selectedItem;
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
                    const SizedBox(height: 10.0),
                    ListTile(
                      title: TextFormField(
                        decoration: InputDecoration(
                          hintText: "Saisir le montant à envoyer",
                          border: OutlineInputBorder(),
                        ),
                        controller: fromTextController,
                        style: TextStyle(fontSize: 20.0, color: Colors.black),
                        keyboardType:
                        TextInputType.numberWithOptions(decimal: true),
                        onChanged: (text) {
                          result=(double.parse(fromTextController.text) * (10)).toStringAsFixed(2);
                          print("$text");
                          fromTextControllergnf.text=result;
                        },
                      ),
                      trailing: _buildDropDownButton(fromCurrency),
                    ),
/*                    IconButton(
                      icon: Icon(Icons.arrow_downward),
                      onPressed: _doConversion,
                    ),*/
                    ListTile(
                      title: TextFormField(
                        decoration: InputDecoration(
                          hintText: "Resultat attendu",
                          border: OutlineInputBorder(),
                        ),
                        controller: fromTextControllergnf,
                        style: TextStyle(fontSize: 20.0, color: Colors.black),

                      ),
                      trailing: _buildDropDownButton(fromCurrency),
                    ),
                        /*ListTile(
                          title: Chip(
                            backgroundColor: Colors.transparent,
                            label: result != null ?
                            Text(
                              result,
                              style: Theme.of(context).textTheme.display1,
                            ) : Text("Resultat attendu"),
                          ),
                          trailing: _buildDropButton(),
                        ),*/
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
                                  color: Colors.black, fontWeight: FontWeight.w500),
                            ),
                          ),
                          const SizedBox(height: 10.0),
                          Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: <Widget>[
                                Padding(
                                    padding: const EdgeInsets.all(10.0),
                                    child: Container(
                                        padding: const EdgeInsets.only(left: 10.0, right: 10.0),
                                        decoration: BoxDecoration(
                                            borderRadius: BorderRadius.circular(5.0),
                                            border: Border.all()),
                                        child: DropdownButtonHideUnderline(
                                          child: DropdownButton(
                                              value: _selectedItem,
                                              items: _dropdownMenuItems,
                                              onChanged: (value) {
                                                setState(() {
                                                  _selectedItem = value;
                                                });
                                              }),
                                        ))),
                              ]
                          ),
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
        items: currencies.where((f) => f=='USD').toList().map((String value) => DropdownMenuItem(
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
class ListItem {
  int value;
  String name;
  ListItem(this.value, this.name);
}

