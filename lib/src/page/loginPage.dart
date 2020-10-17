import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'package:mktransfert/src/page/navigation.dart';

import 'mesclasses/user.model.dart';

class LoginPage extends StatefulWidget {
  static final String path = "lib/src/pages/login/auth3.dart";

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final String backImg = accueil;
  bool formVisible;
  int _formsIndex;

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
                          Image.network('https://firebasestorage.googleapis.com/v0/b/mktransfert-d6990.appspot.com/o/LogoMKWhite_Plan%20de%20travail%201%20copie%204.png?alt=media&token=15bd19f2-0ca8-4058-81cb-bcbdf09201f6', height: 250),
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
                                    color:
                                    _formsIndex == 1 ? Colors.blue : Colors.white,
                                    child: Text("Connexion"),
                                    shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(20.0)),
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
                                    color:
                                    _formsIndex == 2 ? Colors.blue : Colors.white,
                                    child: Text("S'enregistrer"),
                                    shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(20.0)),
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
                                  child:
                                  _formsIndex == 1 ? LoginForm() : SignupPage(),
                                ),
                              )
                            ],
                          ),
                        )
                      ],
                    )
                ),
              )
            ],
          ),
        ));
  }
}

class LoginForm extends StatelessWidget {
  const LoginForm({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(16.0),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16.0),
      ),
      child: ListView(
        shrinkWrap: true,
        padding: const EdgeInsets.all(16.0),
        children: <Widget>[
          TextField(
            decoration: InputDecoration(
              hintText: "Entrer un email",
              border: OutlineInputBorder(),
            ),
          ),
          const SizedBox(height: 10.0),
          TextField(
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
            onPressed: () {
              Navigator.push(context, MaterialPageRoute(builder: (context) => NavigationPage()),);
            },
          ),
        ],
      ),
    );
  }
}
class SignupPage extends StatefulWidget {
  SignupPage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _SignupFormState createState() => _SignupFormState();

}
class _SignupFormState extends State<SignupPage>{
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
      height:550.0,
      margin: const EdgeInsets.all(10.0),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(10.0),
      ),
    child:new Form(
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
                        onSaved: (val) => setState(() => _user.nom = val),
                        decoration: InputDecoration(
                          hintText: "Entrer votre nom *",
                          border: OutlineInputBorder(),
                        ),
                      ),
                      const SizedBox(height: 10.0),
                      TextFormField(
                        onSaved: (val) => setState(() => _user.prenom = val),
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
                        onSaved: (val) => setState(() => _user.telephone = val),
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
                                              _user.pays = value;
                                            });
                                          }),
                                    ))),
                          ]
                      ),
                      const SizedBox(height: 10.0),
                      TextFormField(
                        obscureText: true,
                        onSaved: (val) => setState(() => _user.password = val),
                        decoration: InputDecoration(
                          hintText: "Mot de passe *",
                          border: OutlineInputBorder(),
                        ),
                      ),
                      const SizedBox(height: 10.0),
                      TextFormField(
                        obscureText: true,
                        onSaved: (val) => setState(() => _user.cpassword = val),
                        decoration: InputDecoration(
                          hintText: "Confirmer Mot de passe *",
                          border: OutlineInputBorder(),
                        ),
                      ),
                      const SizedBox(height: 10.0),
                      SizedBox(
                        width: double.infinity,
                        child:RaisedButton(
                          color: Colors.blue,
                          textColor: Colors.white,
                          elevation: 0,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(20.0),
                          ),
                          child: Text("S'inscrire"),
                          onPressed: () {
                            final form = _formKey.currentState;
                            if (form.validate()) {
                              form.save();
                              _user.saveMe(
                                  _user.nom,
                                 _user.prenom,
                                  _user.email,
                                  _user.telephone,
                                  _user.pays,
                                  _user.password,
                                 _user.cpassword,
                              );

                              _showDialog(context);
                            //  {Navigator.push(context, MaterialPageRoute(builder: (context) => NavigationPage()));};
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
  Scaffold.of(context)
      .showSnackBar(SnackBar(content: Text('Submitting form')));
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
