import 'dart:convert';
import 'dart:io';

import 'package:awesome_dialog/awesome_dialog.dart';
import 'package:email_validator/email_validator.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart'; 
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart' hide Response;
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/navigation.dart';
import 'package:http/http.dart';
import 'package:mktransfert/src/page/pagePrincipale.dart';
import 'package:http/http.dart' as http;
import 'accueil.dart';
import 'mesclasses/user.model.dart';
import 'package:url_launcher/url_launcher.dart';

import 'package:http/io_client.dart';
import 'dart:io';
import 'operations/beneficiaireOperations.dart';
import 'sms-verification.dart';

final storage = FlutterSecureStorage();

class LoginPage extends StatefulWidget {
  static final String path = "lib/src/pages/login/auth3.dart";

  @override
  _LoginPageState createState() => _LoginPageState();
}

final TextEditingController _usernameController = TextEditingController();
final TextEditingController _passwordController = TextEditingController();
class _LoginPageState extends State<LoginPage> {
  final String backImg = accueil;
  bool formVisible;
  int _formsIndex;
  bool _isLoading = false;
  @override
  void initState() {
    super.initState();
   checkLoginStatus();
    formVisible = false;
    _formsIndex = 1;
  }

  checkLoginStatus() async {
    var jwt = await storage.read(key: "jwt");
    if (jwt == null){
      setState(() {
        formVisible = false;
        _formsIndex = 1;
      });
      return 'null';
    }
    else {
      Navigator.of(context).pushAndRemoveUntil(
          MaterialPageRoute(builder: (BuildContext context) => PagePrincipale()),
          ModalRoute.withName("/principale"));
      return jwt;
    }
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        //resizeToAvoidBottomPadding: true,
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
                               'https://firebasestorage.googleapis.com/v0/b/africanstyle-15779.appspot.com/o/logomk.png?alt=media&token=85cfbbb5-ccb9-4478-9b45-2af5167cf8da',
                               height: 250),
                           Text(
                             "Bienvenue",
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
                             color: kPrimaryColor,
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
                     const SizedBox(height: 20.0),
                     RaisedButton(
                       color: Colors.grey.shade700,
                       textColor: Colors.white,
                       elevation: 0,
                       shape: RoundedRectangleBorder(
                         borderRadius: BorderRadius.circular(20.0),
                       ),
                       child: Text("Mot de passe oublié"),
                       onPressed: ()async{
                         const url = 'http://demo.mktransfert.com/reset';

                         if (await canLaunch(url)) {
                         await launch(url, forceSafariVC: false);
                         } else {
                         throw 'Could not launch $url';
                         }
                       }),
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
                                         ? kPrimaryColor
                                         : Colors.white,
                                     child: Text("Connexion"),
                                     shape: RoundedRectangleBorder(
                                         borderRadius:
                                         BorderRadius.circular(20.0)),
                                     onPressed: () {
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
                                         ? kPrimaryColor
                                         : Colors.white,
                                     child: Text("S'enregistrer"),
                                     shape: RoundedRectangleBorder(
                                         borderRadius:
                                         BorderRadius.circular(20.0)),
                                     onPressed: () {
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
           )));
  }
}

_launchURL() async {
  const url = "https://google.com";
  if (await canLaunch(url)) {
    await launch(url, forceWebView: true); //forceWebView
  } else {
    throw 'Could not launch $url';
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
  Future<String> logMe(
      String email,
      String password,
      ) async {
    Map data = {
      'email': email,
      'password': password,
    };
  //    final ioc = new HttpClient();
  //    ioc.badCertificateCallback =
  //  (X509Certificate cert, String host, int port) => true;
     //final https = new IOClient(ioc);
    final Response response = await  http.post(
      'http://demo.mktransfert.com/api/login',
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(data),
    ); 
    return response.body;
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
                controller: _usernameController,
                onSaved: (val) => setState(() => _user.email = val.trim()),
                validator: (value) => EmailValidator.validate(value.trim()) ? null : "Veuillez saisir un e-mail valide",
                decoration: InputDecoration(
                  hintText: "Entrer un email",
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 10.0),
              TextFormField(
                controller: _passwordController,
                validator: (value) {
                  if (value.isEmpty) {
                    return 'Veuillez saisir un mot de passe ';
                  }
                  return null;
                },
                onSaved: (val) => setState(() => _user.password = val),
                obscureText: true,
                decoration: InputDecoration(
                  hintText: "Entrer un mot de passe",
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 10.0),
              RaisedButton(
                color: kPrimaryColor,
                textColor: Colors.white,
                elevation: 0,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20.0),
                ),
                child: Text("Connexion"), 
                onPressed: () async {
                    var username = _usernameController.text;
                    var password = _passwordController.text;
                    var jwtUser = await logMe(username, password);
                    var jwt = await logMe(username, password);
                    if (_formKey.currentState.validate()) {
                  Map<String, dynamic> responseJwtLogin = json.decode(jwt);
                  print(responseJwtLogin["message"]);
                    if (responseJwtLogin['message']=='invalide'){
                      _onAlertLogin(context);
                    }
                    if (responseJwtLogin["message"]=="Vous n\'avez pas confirmé votre inscription par mail"){
                      _onAlertMailCheck(context);
                    }
                     if (responseJwtLogin['message']!='invalide'){
                      storage.write(key: "jwt", value: jwt);
                      storage.write(key: "userInfo", value: jwtUser);
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => PagePrincipale()));
                    }
                  }
                },
              ),
            ],
          ),
        ));
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
  final TextEditingController _pass = TextEditingController();
  final TextEditingController _confirmPass = TextEditingController();


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
  showAlertDialogSuccess(BuildContext context) {  // set up the button
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
                      'Merci pour votre inscription.Merci de'
                          +' confirmer en cliquant sur le lien envoyé par mail '
                  )
                ],
              ),
            ),
          ),
          actions: <Widget>[
            FlatButton(
                onPressed: () {
                  Navigator.pop(context);
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) =>
                              LoginPage())
                  );
                },
                child: Text("Ok")),
          ],
        );
      },
    );
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
    return
      Container(
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
                child: SingleChildScrollView(
                  physics: ClampingScrollPhysics(),
                  child: Stack(
                    children: <Widget>[
                      ListView(
                        shrinkWrap: true,
                        padding: const EdgeInsets.all(6.0),
                        children: <Widget>[
                          TextFormField(
                            validator: (value) {
                              if (value.isEmpty) {
                                return 'Veuillez saisir un nom';
                              }
                              return null;
                            },
                            onSaved: (val) =>
                                setState(() => _user.last_name = val),
                            decoration: InputDecoration(
                              hintText: "Entrer votre nom *",
                              border: OutlineInputBorder(),
                            ),
                          ),
                          const SizedBox(height: 10.0),
                          TextFormField(
                            validator: (value) {
                              if (value.isEmpty) {
                                return 'Veuillez saisir un prenom';
                              }
                              return null;
                            },
                            onSaved: (val) =>
                                setState(() => _user.first_name = val),
                            decoration: InputDecoration(
                              hintText: "Entrer votre prenom(s) *",
                              border: OutlineInputBorder(),
                            ),
                          ),
                          const SizedBox(height: 10.0),
                          TextFormField(
                            validator: (value) => EmailValidator.validate(value) ? null : "Veuillez saisir un e-mail valide",
                            onSaved: (val) => setState(() => _user.email = val),
                            decoration: InputDecoration(
                              hintText: "example@gmail.com *",
                              border: OutlineInputBorder(),
                            ),
                          ),
                          const SizedBox(height: 10.0),
                          TextFormField(
                            validator: (value) {
                              if (value.isEmpty) {
                                return 'Veuillez saisir un telephone';
                              }
                              return null;
                            },
                            onSaved: (val) => setState(() => _user.phone = val),
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
                                                  _user.country =
                                                      _selectedItem.name;
                                                });
                                              }),
                                        )
                                    )),
                              ]),
                          const SizedBox(height: 10.0),
                          TextFormField(
                            obscureText: true,
                            controller: _pass,
                            validator: (value) {
                              if (value.isEmpty) {
                                return 'Veuillez saisir un mot de passe';
                              }
                              return null;
                            },
                            onSaved: (val) =>
                                setState(() => _user.password = val),
                            decoration: InputDecoration(
                              hintText: "Mot de passe",
                              border: OutlineInputBorder(),
                            ),
                          ),
                          const SizedBox(height: 10.0),
                          TextFormField(
                            obscureText: true,
                            controller: _confirmPass,
                            validator: (value) {
                              if (value.isEmpty)
                                return 'Veuillez confirmer votre mot de passe';
                              if(value != _pass.text)
                                return 'Mot de passe incorrect';
                              return null;
                            },
                            decoration: InputDecoration(
                              hintText: "confirmer votre mot de passe*",
                              border: OutlineInputBorder(),
                            ),
                          ),

                          const SizedBox(height: 10.0),
                          SizedBox(
                            width: double.infinity,
                            child: RaisedButton(
                              color: kPrimaryColor,
                              textColor: Colors.white,
                              elevation: 0,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20.0),
                              ),
                              child: Text("S'inscrire"),
                              onPressed: () async {
                                final form = _formKey.currentState;
                                _user.country = _selectedItem.name;
                                if (_formKey.currentState.validate()) {
                                  form.save();
                                  if (_user.email.length < 4)
                                    displayDialog(context, "Nom d'utilisateur invalide",
                                        "Le nom d'utilisateur doit comporter au moins 4 caractères");
                                  else if (_user.password.length < 4)
                                    displayDialog(context, "Invalid Password",
                                        "Le mot de passe doit comporter au moins 4 caractères ");
                                  else {
                                    Response res = await _user.saveMe(
                                      _user.last_name,
                                      _user.first_name,
                                      _user.email,
                                      _user.phone,
                                      _user.country,
                                      _user.password,
                                    );
                                    //var smscode=res.body["code_sms"];
                                    var resBody = json.decode(res.body);
                                    var smscode=resBody["code_sms"];
                                    if (smscode!=null){
                                      storage.write(key: "code_sms", value: resBody["code_sms"] );
                                      storage.write(key: "password",value: _user.password);
                                      storage.write(key: "email",value: _user.email);
                                       Get.to(SmsConfirm());
                                      
                                    }
                                    // if (res.statusCode == 200) {
                                    //   this.showAlertDialogSuccess(context);
                                    //   _showDialog(context); 
                                    // } else
                                     if (res.statusCode  == 403)
                                      displayDialog(
                                          context,
                                          "Ce nom d'utilisateur est déjà enregistré",
                                          "Veuillez essayer de vous inscrire en utilisant un autre nom d'utilisateur ou vous connecter si vous avez déjà un compte.");
                                  }
                                  
                                }
                              },
                            ),
                          ),
                        ],
                      )
                    ],
                  ),
                ),
              )
            ],
          ),
        ));
  }
}

_showDialog(BuildContext context) {
  final snackBar = SnackBar(
    content: Text('Enregistrement avec succèss'),
    action: SnackBarAction(
      label: 'Ok',
      onPressed: () {
        //Navigator.pop(context,true);
      },
    ),
  );
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

_onAlertLogin(context) {
  AwesomeDialog(
      context: context,
      dialogType: DialogType.ERROR,
      headerAnimationLoop: false,
      animType: AnimType.TOPSLIDE,
      title: 'Erreur',
      desc:
      'Le mot de passe ou le mail est incorrect'
          + ' ou adresse mail non activé'
      ,
      btnCancelOnPress: () {},
      btnOkOnPress: () {})
    ..show();
}

_onAlertMailCheck(context) {
  AwesomeDialog(
      context: context,
      dialogType: DialogType.ERROR,
      headerAnimationLoop: false,
      animType: AnimType.TOPSLIDE,
      title: 'Erreur',
      desc:
      'Vous n\'avez pas confirmé votre inscription par mail',
      btnCancelOnPress: () {},
      btnOkOnPress: () {})
    ..show();
}
