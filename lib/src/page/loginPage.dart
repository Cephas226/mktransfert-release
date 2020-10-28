import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'package:mktransfert/src/page/navigation.dart';
import 'package:http/http.dart';
import 'package:mktransfert/src/page/pagePrincipale.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import 'mesclasses/user.model.dart';
import 'operations/beneficiaireOperations.dart';

final storage = FlutterSecureStorage();

class LoginPage extends StatefulWidget {
  static final String path = "lib/src/pages/login/auth3.dart";

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final String backImg = accueil;
  bool formVisible;
  int _formsIndex;
  bool _isLoading = false;
  @override
  void initState() {
    super.initState();
    formVisible = false;
    _formsIndex = 1;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage(accueil),
          fit: BoxFit.cover,
        ),
      ),
      child: Stack(
        children: <Widget>[
          Container(
            color: Colors.black54,
            child: Column(
              children: <Widget>[
                Expanded(
                  child: ListView(
                    children: <Widget>[
                      Image.network(
                          'https://firebasestorage.googleapis.com/v0/b/mktransfert-d6990.appspot.com/o/LogoMKWhite_Plan%20de%20travail%201%20copie%204.png?alt=media&token=15bd19f2-0ca8-4058-81cb-bcbdf09201f6',
                          height: 250),
                      Text(
                        "Bienvenu",
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w500,
                          fontSize: 30.0,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      const SizedBox(height: 10.0),
                      Text(
                        "Envoyez de l'argent partout en Guinee\n avec des taux défiants toutes concurrences.",
                        style: TextStyle(
                          color: Colors.white70,
                          fontSize: 18.0,
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                ),
                Row(
                  children: <Widget>[
                    Expanded(
                      child: RaisedButton(
                        color: Colors.blue,
                        textColor: Colors.white,
                        elevation: 0,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20.0),
                        ),
                        child: Text("Connexion"),
                        onPressed: () {
                          setState(() {
                            formVisible = true;
                            _formsIndex = 1;
                          });
                        },
                      ),
                    ),
                    const SizedBox(width: 10.0),
                    Expanded(
                      child: RaisedButton(
                        color: Colors.grey.shade700,
                        textColor: Colors.white,
                        elevation: 0,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20.0),
                        ),
                        child: Text("S'inscrire"),
                        onPressed: () {
                          /* Navigator.push(context, MaterialPageRoute(builder: (context) => NavigationPage()),);*/
                          setState(() {
                            formVisible = true;
                            _formsIndex = 2;
                          });
                        },
                      ),
                    ),
                    const SizedBox(width: 10.0),
                  ],
                ),
                const SizedBox(height: 40.0),
                OutlineButton.icon(
                  borderSide: BorderSide(color: Colors.blue),
                  color: Colors.blue,
                  textColor: Colors.white,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20.0),
                  ),
                  icon: Icon(FontAwesomeIcons.google),
                  label: Text("Continuer avec Google"),
                  onPressed: () {},
                ),
                const SizedBox(height: 20.0),
              ],
            ),
          ),
          AnimatedSwitcher(
            duration: Duration(milliseconds: 200),
            child: (!formVisible)
                ? null
                : Container(
                    color: Colors.black54,
                    alignment: Alignment.center,
                    child: Column(
                      children: <Widget>[
                        const SizedBox(height: 50.0),
                        Expanded(
                          child: ListView(
                            children: <Widget>[
                              Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: <Widget>[
                                  RaisedButton(
                                    textColor: _formsIndex == 1
                                        ? Colors.white
                                        : Colors.black,
                                    color: _formsIndex == 1
                                        ? Colors.blue
                                        : Colors.white,
                                    child: Text("Connexion"),
                                    shape: RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius.circular(20.0)),
                                    onPressed: () {
                                      /*   Navigator.push(context, MaterialPageRoute(builder: (context) => NavigationPage()),);*/
                                      setState(() {
                                        _formsIndex = 1;
                                      });
                                    },
                                  ),
                                  const SizedBox(width: 10.0),
                                  RaisedButton(
                                    textColor: _formsIndex == 2
                                        ? Colors.white
                                        : Colors.black,
                                    color: _formsIndex == 2
                                        ? Colors.blue
                                        : Colors.white,
                                    child: Text("S'enregistrer"),
                                    shape: RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius.circular(20.0)),
                                    onPressed: () {
                                      /*  Navigator.push(context, MaterialPageRoute(builder: (context) => NavigationPage()),);*/
                                      setState(() {
                                        _formsIndex = 2;
                                      });
                                    },
                                  ),
                                  const SizedBox(width: 10.0),
                                  IconButton(
                                    color: Colors.white,
                                    icon: Icon(Icons.clear),
                                    onPressed: () {
                                      setState(() {
                                        formVisible = false;
                                      });
                                    },
                                  )
                                ],
                              ),
                              Container(
                                child: AnimatedSwitcher(
                                  duration: Duration(milliseconds: 300),
                                  child: _formsIndex == 1
                                      ? LoginForm()
                                      : SignupPage(),
                                ),
                              )
                            ],
                          ),
                        )
                      ],
                    )),
          )
        ],
      ),
    ));
  }
}

class LoginForm extends StatefulWidget {
  static final String path = "lib/src/pages/login/auth3.dart";

  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<LoginForm> {
  bool _isLoading = false;
  final formKey = new GlobalKey<FormState>();
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final _user = User();
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: const EdgeInsets.all(16.0),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16.0),
        ),
        child: new Form(
          key: _formKey,
          child: ListView(
            shrinkWrap: true,
            padding: const EdgeInsets.all(16.0),
            children: <Widget>[
              TextFormField(
                onSaved: (val) => setState(() => _user.email = val),
                decoration: InputDecoration(
                  hintText: "Entrer un email",
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 10.0),
              TextFormField(
                onSaved: (val) => setState(() => _user.password = val),
                obscureText: true,
                decoration: InputDecoration(
                  hintText: "Entrer un mot de passe",
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 10.0),
              RaisedButton(
                color: Colors.blue,
                textColor: Colors.white,
                elevation: 0,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20.0),
                ),
                child: Text("Connexion"),
                /*onPressed: _user.email == "" || _user.password  == "" ? null : () {
                  final form = _formKey.currentState;
                  if (form.validate()){
                    form.save();
                    print( _user.email);
                    signIn( _user.email, _user.password );
                  }
                  setState(() {
                    _isLoading = true;
                  });
                },*/
                onPressed: _user.email == "" || _user.password == ""
                    ? null
                    : () async {
                        final form = _formKey.currentState;
                        if (form.validate()) {
                          form.save();
                          var jwt = await logMe(_user.email, _user.password);
                          storage.write(key: "jwt", value: jwt);
                          if (jwt != null) {
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) => PagePrincipale()));
                          }
                          else {
                            displayDialog(context, "An Error Occurred",
                                "No account was found matching that username and password");
                          }
                        }
                      },
              ),
            ],
          ),
        ));
  }

/*
  Future<String> attemptLogIn(String email, String password) async {
    var res = await http.post("$apiUrlUser/login",
        body: {"email": email, "password": password});
    if (res.statusCode == 200) {
      return res.body;
    } else {
      return null;
    }
  }
*/

  Future<String> logMe(
    String email,
    String password,
  ) async {
    Map data = {
      'email': email,
      'password': password,
    };

     var response  = await post(
      '$apiUrlLogin',
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(data),
    );
    if (response.statusCode == 200) {
      print('Login User');
      return response.body;
    } else {
      return null;
    }
  }
}

class SignupPage extends StatefulWidget {
  SignupPage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _SignupFormState createState() => _SignupFormState();
}

class _SignupFormState extends State<SignupPage> {
  String _myActivity;
  String _myActivityResult;
  final formKey = new GlobalKey<FormState>();
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final _user = User();
  final elements1 = [
    "Guinée",
    "Sénégal",
    "Cote d'Ivoire",
  ];
  int selectedIndex1 = 0;
  List<Widget> _buildItems1() {
    return elements1
        .map((val) => MySelectionItem(
              title: val,
            ))
        .toList();
  }

  @override
  void initState() {
    super.initState();
    _myActivity = '';
    _myActivityResult = '';
    _dropdownMenuItems = buildDropDownMenuItems(_dropdownItems);
    _selectedItem = _dropdownMenuItems[0].value;
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
    ListItem(1, "France"),
    ListItem(2, "Allemagne"),
    ListItem(3, "Danemark"),
    ListItem(4, "Suisse"),
    ListItem(5, "Finlande"),
    ListItem(6, "Italie"),
    ListItem(7, "Luxembourg"),
    ListItem(8, "Monaco"),
    ListItem(9, "Pays Bas"),
    ListItem(10, "Australie"),
    ListItem(11, "Norvège"),
    ListItem(12, "Portugal"),
    ListItem(13, "Pologne"),
    ListItem(14, "Espagne"),
    ListItem(15, "Suède"),
    ListItem(16, "Etats unis"),
    ListItem(16, "Canada")
  ];
  List<DropdownMenuItem<ListItem>> _dropdownMenuItems;
  ListItem _selectedItem;
  @override
  Widget build(BuildContext context) {
    return Container(
        height: 550.0,
        margin: const EdgeInsets.all(10.0),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(10.0),
        ),
        child: new Form(
          key: _formKey,
          child: Column(
            children: <Widget>[
              Expanded(
                child: ListView(
                  children: <Widget>[
                    ListView(
                      shrinkWrap: true,
                      padding: const EdgeInsets.all(10.0),
                      children: <Widget>[
                        TextFormField(
                          onSaved: (val) => setState(() => _user.last_name = val),
                          decoration: InputDecoration(
                            hintText: "Entrer votre nom *",
                            border: OutlineInputBorder(),
                          ),
                        ),
                        const SizedBox(height: 10.0),
                        TextFormField(
                          onSaved: (val) => setState(() => _user.first_name = val),
                          decoration: InputDecoration(
                            hintText: "Entrer votre prenom(s) *",
                            border: OutlineInputBorder(),
                          ),
                        ),
                        const SizedBox(height: 10.0),
                        TextFormField(
                          onSaved: (val) => setState(() => _user.email = val),
                          decoration: InputDecoration(
                            hintText: "example@gmail.com *",
                            border: OutlineInputBorder(),
                          ),
                        ),
                        const SizedBox(height: 10.0),
                        TextFormField(
                          onSaved: (val) =>
                              setState(() => _user.phone = val),
                          decoration: InputDecoration(
                            hintText: "Entrer votre téléphone *",
                            border: OutlineInputBorder(),
                          ),
                        ),
                        const SizedBox(height: 10.0),
                        Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: <Widget>[
                              Padding(
                                  padding: const EdgeInsets.all(0.0),
                                  child: Container(
                                      padding: const EdgeInsets.only(
                                          left: 10.0, right: 10.0),
                                      decoration: BoxDecoration(
                                          borderRadius:
                                              BorderRadius.circular(5.0),
                                          border: Border.all()),
                                      child: DropdownButtonHideUnderline(
                                        child: DropdownButton(
                                            value: _selectedItem,
                                            items: _dropdownMenuItems,
                                            onChanged: (value) {
                                              setState(() {
                                                _selectedItem = value;
                                                _user.country = _selectedItem.name;
                                              });
                                            }),
                                      ))),
                            ]),
                        const SizedBox(height: 10.0),
                        TextFormField(
                          obscureText: true,
                          onSaved: (val) =>
                              setState(() => _user.password = val),
                          decoration: InputDecoration(
                            hintText: "Mot de passe *",
                            border: OutlineInputBorder(),
                          ),
                        ),
/*                        const SizedBox(height: 10.0),
                        TextFormField(
                          obscureText: true,
                          onSaved: (val) =>
                              setState(() => _user.cpassword = val),
                          decoration: InputDecoration(
                            hintText: "Confirmer Mot de passe *",
                            border: OutlineInputBorder(),
                          ),
                        ),*/
                        const SizedBox(height: 10.0),
                        SizedBox(
                          width: double.infinity,
                          child: RaisedButton(
                            color: Colors.blue,
                            textColor: Colors.white,
                            elevation: 0,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20.0),
                            ),
                            child: Text("S'inscrire"),
                            onPressed: () async {
                              final form = _formKey.currentState;
                              _user.country = _selectedItem.name;
                              if (form.validate()) {
                                form.save();
                                if (_user.email.length < 4)
                                  displayDialog(context, "Invalid Username",
                                      "The username should be at least 4 characters long");
                                else if (_user.password.length < 4)
                                  displayDialog(context, "Invalid Password",
                                      "The password should be at least 4 characters long");
                                else {
                                  var res = await _user.saveMe(
                                    _user.last_name,
                                    _user.first_name,
                                    _user.email,
                                    _user.phone,
                                    _user.country,
                                    _user.password,
                                  );
                                  if (res == 200){
                                    Navigator.push(
                                        context,
                                        MaterialPageRoute(
                                            builder: (context) => PagePrincipale()));
                                    _showDialog(context);
                                   /* displayDialog(context, "Success",
                                        "The user was created. Log in now.");*/
                                  }
                                  else if (res == 409)
                                    displayDialog(
                                        context,
                                        "That username is already registered",
                                        "Please try to sign up using another username or log in if you already have an account.");
                                  else {
                                    displayDialog(context, "Error",
                                        "An unknown error occurred.");
                                  }
                                }
                                //  {Navigator.push(context, MaterialPageRoute(builder: (context) => f()));};
                              }
                            },
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              )
            ],
          ),
        ));
  }
}

_showDialog(BuildContext context) {
  Scaffold.of(context).showSnackBar(SnackBar(content: Text('Submitting form')));
}

class MySelectionItem extends StatelessWidget {
  final String title;
  final bool isForList;

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

void displayDialog(context, title, text) => showDialog(
      context: context,
      builder: (context) =>
          AlertDialog(title: Text(title), content: Text(text)),
    );
