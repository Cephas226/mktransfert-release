import 'dart:convert';

import 'package:direct_select/direct_select.dart';
import 'package:fancy_alert_dialog/fancy_alert_dialog.dart';
import 'package:fancy_dialog/fancy_dialog.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/core/presentation/res/assets.dart';
class MainPage extends StatefulWidget {
  static final String path = "lib/src/pages/login/auth3.dart";

  @override
  _MainPageState createState() => _MainPageState();

}

class _MainPageState extends State<MainPage> {
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
  String _value1;
  final List<String> currencyList = <String>[
    "USD",
    "EUR",
  ];
  Widget _buildDropButtonTo() {
    return  Row(
      children: <Widget>[
        DropdownButtonHideUnderline(
          child: DropdownButton(
              value: _selectedItemGnf,
              items: _dropdownMenuItemsGnf,
              onChanged: (value) {
                setState(() {
                  _selectedItemGnf = value;
                  //.. _user.pays=_selectedItem.name;
                });
              }),
        )
      ],
    );
  }
  Widget _buildDropButtonFrom() {
    return  Row(
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
  void initState() {
    super.initState();
    _loadCurrencies();
    _dropdownMenuItems = buildDropDownMenuItems(_dropdownItems);
    _selectedItem = _dropdownMenuItems[0].value;
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
    currencies.toList();
    setState(() {});
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
          child: Row(
            children: <Widget>[
              Text( listItem.name),
              Image.asset(
                  listItem.image,
                width: 50),
            ],
          ),
          value: listItem,
        ),
      );
    }
    return items;
  }
  List<ListItem> _dropdownItems = [
    ListItem("assets/Image/eu.png",  "USD"),
    ListItem("assets/Image/us.png",  "EUR"),
  ];
  List<DropdownMenuItem<ListItem>> _dropdownMenuItems;
  ListItem _selectedItem;


  //-----------

  List<ListItemGnf> _dropdownItemsGnf = [
    ListItemGnf("assets/Image/gnf.png",  "USD"),
  ];

  List<DropdownMenuItem<ListItemGnf>> _dropdownMenuItemsGnf;
  ListItemGnf _selectedItemGnf;

  List<DropdownMenuItem<ListItemGnf>> buildDropDownMenuItemsGnf(List listItems) {
    List<DropdownMenuItem<ListItemGnf>> items = List();
    for (ListItemGnf listItem in listItems) {
      items.add(
        DropdownMenuItem(
          child: Row(
            children: <Widget>[
              Text( listItem.name),
              Image.asset(
                  listItem.imageGnf,
                  width: 50),
            ],
          ),
          value: listItem,
        ),
      );
    }
    return items;
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
                   // mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      const SizedBox(height: 30.0),
                      Container(
                        child:Row(
                          children: <Widget>[
                            Expanded(
                              child: Row(
                                children: <Widget>[
                                  Container(
                                    width: 270,
                                    margin: EdgeInsets.only(left: 10),
                                    child: TextFormField(
                                      decoration: InputDecoration(
                                        hintText: "1000€",
                                        labelText: 'Montant à Envoyer en USD',
                                        border: OutlineInputBorder(),
                                      ),
                                      keyboardType:
                                      TextInputType.numberWithOptions(decimal: true),
                                    ),
                                  ),
                                  Expanded(
                                    child:  Container(
                                      child:  _buildDropButtonFrom(),
                                    ),
                                  )
                                ],
                              ),
                            )
                          ],
                        ),
                      ),
                      const SizedBox(height: 50.0),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Row(
                              children: <Widget>[
                                Container(
                                  margin: EdgeInsets.only(left: 10),
                                  width: 270,
                                  child: TextFormField(
                                    readOnly: true,
                                    decoration: InputDecoration(
                                      hintText: "1000€",
                                      labelText: 'Montant à Recevoir en GNF',
                                      border: OutlineInputBorder(),
                                    ),
                                    keyboardType:
                                    TextInputType.numberWithOptions(decimal: true),
                                  ),
                                ),
                                Expanded(
                                  child:  Container(
                                    child:  _buildDropButtonTo(),
                                  ),
                                )
                              ],
                            ),
                          )
                        ],
                      ),
                      const SizedBox(height: 50.0),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Row(
                              children: <Widget>[
                                Container(
                                  margin: EdgeInsets.only(left: 10),
                                  width: 270,
                                  child: TextFormField(
                                    decoration: InputDecoration(
                                      labelText: 'Montant à Recevoir en USD',
                                      hintText: "1000€",
                                      border: OutlineInputBorder(),
                                    ),
                                    keyboardType:
                                    TextInputType.numberWithOptions(decimal: true),
                                  ),
                                ),
                                Expanded(
                                  child:  Container(
                                    child:  _buildDropButtonFrom(),
                                  ),
                                )
                              ],
                            ),
                          )
                        ],
                      ),
                      const SizedBox(height: 120),
                      SizedBox(
                        width: 360,
                        height: 50.0,
                        child: RaisedButton(
                          color: Colors.blue,
                          textColor: Colors.white,
                          elevation: 0,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(5.0),
                          ),
                          child: ListTile(
                            title: Text(("Effectuer un transfert"),style: TextStyle(color:Colors.white)),
                            trailing: Icon(
                              Icons.arrow_forward,
                              color: Colors.white,
                            ),
                          ),
                          onPressed: () {
                            if(fromTextController.text.isEmpty){
                              FancyAlertDialog.showFancyAlertDialog(
                                context,
                                'Alerte',
                                'Veillez remplir le montant',
                                Colors.blue,
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
        items: currencies.toList().map((String value) => DropdownMenuItem(
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

class ListItemGnf {
  String imageGnf;
  String name;

  ListItemGnf(this.imageGnf, this.name);
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
  String image;
  String name;
  ListItem(this.image, this.name);
}

