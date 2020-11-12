import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'package:mktransfert/src/contant/constant.dart';
import 'package:mktransfert/src/page/transaction.dart';

import 'loginPage.dart';
import 'operations/beneficiaireOperations.dart';

class UserProfilPage extends StatefulWidget {
  @override
  ProfilePageState createState() => ProfilePageState();
}

class ProfilePageState extends State<UserProfilPage> {
  static final String path = "lib/src/pages/profile/profile8.dart";
  List countrydata = List();
  var testCountry = List();
  List userInfo = List();
  bool _checkeMe = false;
  var editUser_last_name = TextEditingController();
  var editUser_first_name = TextEditingController();
  var editUser_email = TextEditingController();
  var editUser_phone = TextEditingController();
  var editUser_country = TextEditingController();
  var editUser_password = TextEditingController();
 /* final TextEditingController _pass = TextEditingController();*/
  final TextEditingController _confirmPass = TextEditingController();
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  final editUser_old_password = TextEditingController();
  var editUser_new_password = TextEditingController();

  String displayUser_last_name;
  String displayUser_first_name;
  String displayUser_email;
  String displayUser_phone;
  String displayUser_country;
  String user_id_profil;

  Future<List<dynamic>> displayProleInfo() async {
    var jwt = await storage.read(key: "jwt");
    var countryList = List();
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    var res = await http.get(Uri.encodeFull(apiUrl + '$user_id'), headers: {
      "Accept": "application/json",
      'Authorization': 'Bearer $token',
    });

    var resBody = json.decode(res.body);
    resBody['data_country']?.forEach((k, v) {
      countryList.add(v[0]);
    });
    return countrydata;
  }

  displayUserInfo() async {
    var jwt = await storage.read(key: "userInfo");

    Map<String, dynamic> responseStorageUser = json.decode(jwt);
    editUser_first_name.text = responseStorageUser["first_name"];
    editUser_last_name.text = responseStorageUser["last_name"];
    editUser_email.text = responseStorageUser["email"];
    editUser_phone.text = responseStorageUser["phone"];
    editUser_country.text = responseStorageUser["country"];

    user_id_profil=responseStorageUser["user_id_profil"];

    displayUser_first_name = responseStorageUser["first_name"];
    displayUser_last_name = responseStorageUser["last_name"];
    displayUser_email = responseStorageUser["email"];
    displayUser_phone = responseStorageUser["phone"];
    displayUser_country = responseStorageUser["country"];
  }

  @override
  void initState() {
    super.initState();
    this.displayUserInfo();
    _dropdownMenuItems = buildDropDownMenuItems(_dropdownItemsCountry);
    _selectedItem = _dropdownMenuItems[0].value;
  }
  List<DropdownMenuItem<ListItemCountry>> buildDropDownMenuItems(List listItems) {
    List<DropdownMenuItem<ListItemCountry>> items = List();
    for (ListItemCountry listItem in listItems) {
      items.add(
        DropdownMenuItem(
          child: Text(listItem.name),
          value: listItem,
        ),
      );
    }
    return items;
  }

  List<ListItemCountry> _dropdownItemsCountry = [
    ListItemCountry(1, "France"),
    ListItemCountry(2, "Allemagne"),
    ListItemCountry(3, "Danemark"),
    ListItemCountry(4, "Suisse"),
    ListItemCountry(5, "Finlande"),
    ListItemCountry(6, "Italie"),
    ListItemCountry(7, "Luxembourg"),
    ListItemCountry(8, "Monaco"),
    ListItemCountry(9, "Pays Bas"),
    ListItemCountry(10, "Australie"),
    ListItemCountry(11, "Norvège"),
    ListItemCountry(12, "Portugal"),
    ListItemCountry(13, "Pologne"),
    ListItemCountry(14, "Espagne"),
    ListItemCountry(15, "Suède"),
    ListItemCountry(16, "Etats unis"),
    ListItemCountry(16, "Canada")
  ];
  List<DropdownMenuItem<ListItemCountry>> _dropdownMenuItems;
  ListItemCountry _selectedItem;

  Future<http.Response> updateUserProfile() async {

    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    print({
      user_id,
      editUser_first_name.text,
      editUser_last_name.text,
      editUser_email.text,
      editUser_phone.text,
      _selectedItem.name,
    });
     await http.put(
      'https://www.mktransfert.com/api/userprofile/'+ '$user_id',
      headers:{
        "Accept": "application/json",
        'Authorization': 'Bearer $token',
      },
      body: {
        "user_id":user_id.toString(),
        "first_name": editUser_first_name.text,
        "last_name": editUser_last_name.text,
        "email":editUser_email.text,
        "phone":  editUser_phone.text,
        "country": _selectedItem.name,
    },
    ) .then((value) => {
      print(value.body),
     setState(() {
     displayUser_first_name =editUser_first_name.text;
     displayUser_last_name =editUser_last_name.text;
     displayUser_email=editUser_email.text;
     displayUser_phone=editUser_phone.text;
     displayUser_country=_selectedItem.name;
     })
     })
        .catchError((e)=>{print(e)});
  }

  Future<http.Response> updateUserPassword() async {

    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    await http.put(
      'https://www.mktransfert.com/api/userchange/'+ '$user_id',
      headers:{
        "Accept": "application/json",
        'Authorization': 'Bearer $token',
      },
      body: {
        "user_id":user_id.toString(),
        "password": editUser_old_password.text,
        "new_password": editUser_new_password.text,
      },
    )   .then((value) => {
        editUser_old_password.text='',
        editUser_new_password.text='',
        _confirmPass.text='',
    }
        )
        .catchError((e)=>{print(e)});

  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.grey.shade100,
        extendBodyBehindAppBar: true,
        extendBody: true,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          elevation: 0,
        ),
        body:
        SingleChildScrollView(
          physics: ClampingScrollPhysics(),
          child: Column(
            children: <Widget>[
              FutureBuilder<List<dynamic>>(
                  future: displayProleInfo(),
                  builder: (BuildContext context, AsyncSnapshot snapshot) {
                    if (!snapshot.hasData) {
                      return  Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Center(child: Body())
                        ],
                      );
                    }
                    else {
                      return  Column(
                        children: <Widget>[
                          ProfileHeader(
                            avatar: NetworkImage('https://firebasestorage.googleapis.com/v0/b/mktransfert-d6990.appspot.com/o/LogoMKWhite_Plan%20de%20travail%201%20copie%204.png?alt=media&token=15bd19f2-0ca8-4058-81cb-bcbdf09201f6'),
                            coverImage: NetworkImage(images[1]),
                            title: displayUser_first_name +' '+displayUser_last_name,
                            actions: <Widget>[
                              MaterialButton(
                                color: Colors.white,
                                shape: CircleBorder(),
                                elevation: 0,
                                child: Icon(Icons.edit),
                                onPressed: () {
                                  _showUserInfo();
                                },
                              )
                            ],
                          ),
                          const SizedBox(height: 10.0),
                          Container(
                            padding: EdgeInsets.all(10),
                            child: Column(
                              children: <Widget>[
                                Container(
                                  padding: const EdgeInsets.only(
                                      left: 8.0, bottom: 4.0),
                                  alignment: Alignment.topLeft,
                                  child: Text(
                                    "Information de l'utilisateur",
                                    style: TextStyle(
                                      color: Colors.black87,
                                      fontWeight: FontWeight.w500,
                                      fontSize: 16,
                                    ),
                                    textAlign: TextAlign.left,
                                  ),
                                ),
                                Card(
                                  child: Container(
                                    alignment: Alignment.topLeft,
                                    padding: EdgeInsets.all(15),
                                    child: Column(
                                      children: <Widget>[
                                        Column(
                                          children: <Widget>[
                                            ...ListTile.divideTiles(
                                              color: Colors.grey,
                                              tiles: [
                                                ListTile(
                                                  contentPadding:
                                                  EdgeInsets.symmetric(
                                                      horizontal: 12,
                                                      vertical: 4),
                                                  leading:
                                                  Icon(Icons.my_location),
                                                  title: Text("Pays"),
                                                  subtitle: Text(displayUser_country),
                                                ),
                                                ListTile(
                                                  leading: Icon(Icons.email),
                                                  title: Text("Email"),
                                                  subtitle:
                                                  Text(displayUser_email),
                                                ),
                                                ListTile(
                                                  leading: Icon(Icons.phone),
                                                  title: Text("Telephone"),
                                                  subtitle:  Text(displayUser_phone),
                                                ),
                                                ListTile(
                                                  leading: Icon(Icons.lock),
                                                  title: Text("Mot de passe"),
                                                  subtitle:  Text('*************'),
                                                  trailing:MaterialButton(
                                                    color: Colors.white,
                                                    shape: CircleBorder(),
                                                    elevation: 0,
                                                    child: Icon(Icons.edit),
                                                    onPressed: () {
                                                      _showUserPassword();
                                                    },
                                                  ),
                                                ),
                                                /* ListTile(
                                                leading: Icon(Icons.person),
                                                title: Text("About Me"),
                                                subtitle: Text(
                                                    "This is a about me link and you can khow about me in this section."),
                                              ),*/
                                              ],
                                            ),
                                          ],
                                        )
                                      ],
                                    ),
                                  ),
                                )
                              ],
                            ),
                          )
                        ],
                      );

                    }
                  })
            ],
          ),
    ));
  }

  void _showUserInfo() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        // return object of type Dialog
        return StatefulBuilder(
            builder: (BuildContext context, StateSetter setState) {
              return AlertDialog(
                title: Container(
                  child: Text("Informations du profile"),
                ),
                content: SingleChildScrollView(
                    physics: ClampingScrollPhysics(),
                    child: Container(
                        height: 400.0, // Change as per your requirement
                        width: 400.0,
                        child: FutureBuilder<List<dynamic>>(
                            future: displayProleInfo(),
                            builder:
                                (BuildContext context, AsyncSnapshot snapshot) {
                              if (snapshot.hasData) {
                                return ListView.builder(
                                    shrinkWrap: true,
                                    padding: EdgeInsets.all(8),
                                    itemCount: 1,
                                    itemBuilder: (BuildContext context, int index) {
                                      return Container(
                                        child: Form(
                                          child: SingleChildScrollView(
                                            physics: ClampingScrollPhysics(),
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
                                                                    value: _selectedItem,
                                                                    items: _dropdownMenuItems,
                                                                    onChanged: (value) {
                                                                      setState(() {
                                                                        _selectedItem = value;
                                                                      });
                                                                    }),
                                                              ),
                                                            ))
                                                      ],
                                                    )),
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
                                                                editUser_last_name
                                                                    .text = val),
                                                            controller:
                                                                  editUser_last_name
                                                                      ,
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
                                                              editUser_first_name
                                                                  .text = val),
                                                          controller:
                                                                editUser_first_name
                                                                    ,
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
                                                                editUser_email
                                                                    .text = val),
                                                            controller:
                                                                  editUser_email,
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
                                                                editUser_phone
                                                                    .text = val),
                                                            controller:
                                                                  editUser_phone
                                                                    ,
                                                            decoration: const InputDecoration(
                                                                hintText:
                                                                "Entre un téléphone",
                                                                border:
                                                                OutlineInputBorder()),
                                                          ),
                                                        ),
                                                      ],
                                                    )),
                                              ],
                                            ),
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
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      Container(
                        width:120 ,
                        child: RaisedButton(
                          onPressed: () { Navigator.of(context).pop();},
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
                      ),
                      SizedBox(
                        width: 16,
                      ),
                      Container(
                        width:120 ,
                        child:   RaisedButton(
                          onPressed: () {
                            updateUserProfile();
                            Navigator.pop(context, true);
                          },
                          color: kPrimaryColor,
                          textColor: Colors.white,
                          child: Text(
                            "Ok",
                            style: TextStyle(
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.all(Radius.circular(
                                8,
                              ))),
                        ),
                      )
                      /*new FlatButton(
                    child: new Text("Annulez"),
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                  ),
                  new FlatButton(
                      onPressed: () async {
                        Navigator.pop(context, true);
                      },
                      child: new Text("OK"))*/
                    ],
                  ),
                ],
              );
            });
      },
    );
  }
  void _showUserPassword() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        // return object of type Dialog
        return StatefulBuilder(
            builder: (BuildContext context, StateSetter setState) {
              return AlertDialog(
                title: Container(
                  child: Text("Changer de mot de passe"),
                ),
                content:
                  Stack(
                    children: <Widget>[
                      SingleChildScrollView(
                          physics: ClampingScrollPhysics(),
                          child:
                          Container(
                              height: 400.0, // Change as per your requirement
                              width: 400.0,
                              child: FutureBuilder<List<dynamic>>(
                                  future: displayProleInfo(),
                                  builder:
                                      (BuildContext context, AsyncSnapshot snapshot) {
                                    if (snapshot.hasData) {
                                      return ListView.builder(
                                          shrinkWrap: true,
                                          padding: EdgeInsets.all(8),
                                          itemCount: 1,
                                          itemBuilder: (BuildContext context, int index) {
                                            return Container(
                                              child: Form(
                                                key: _formKey,
                                                child: SingleChildScrollView(
                                                  physics: ClampingScrollPhysics(),
                                                  child: Column(
                                                    children: <Widget>[
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
                                                                      setState(() =>{
                                                                        editUser_old_password.text = val,
                                                                        print(editUser_old_password.text)
                                                                      }
                                                                      ),
                                                                  controller: editUser_old_password,
                                                                  decoration:
                                                                  const InputDecoration(
                                                                    hintText:
                                                                    "Ancien mot de passe",
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
                                                                obscureText: true,
                                                                onSaved: (val) => setState(
                                                                        () =>
                                                                    editUser_new_password
                                                                        .text = val),
                                                                controller: editUser_new_password,
                                                                decoration:
                                                                const InputDecoration(
                                                                  hintText:
                                                                  "Nouveau mot de passe",
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
                                                                obscureText: true,
                                                                controller: _confirmPass,
                                                                validator: (value) {
                                                                  if (value.isEmpty)
                                                                    return 'Veuillez confirmer votre mot de passe';
                                                                  if(value != editUser_new_password.text)
                                                                    return 'mot de passe incorrecte';
                                                                  return null;
                                                                },
                                                                decoration: InputDecoration(
                                                                  hintText: "confirmer votre mot de passe*",
                                                                  border: OutlineInputBorder(),
                                                                ),
                                                              ),

                                                            ),
                                                          ],
                                                        ),
                                                      ),
                                                    ],
                                                  ),
                                                ),
                                              ),
                                            );
                                          });
                                    } else {
                                      return Center(child: CircularProgressIndicator());
                                    }
                                  })
                          )
                      ),
                    ],
                  ),
                  actions: <Widget>[
              Row(
              mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  Container(
                    width:120 ,
                    child: RaisedButton(
                      onPressed: () {

                        Navigator.of(context).pop();

                      },
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
                  ),
                  SizedBox(
                    width: 16,
                  ),
                  Container(
                    width:120 ,
                    child:   RaisedButton(
                      onPressed: () {
                        if (_formKey.currentState.validate()) {
                          updateUserPassword();
                          Navigator.pop(context, true);
                        }
                      },
                      color: kPrimaryColor,
                      textColor: Colors.white,
                      child: Text(
                        "Ok",
                        style: TextStyle(
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.all(Radius.circular(
                            8,
                          ))),
                    ),
                  )
                  /*new FlatButton(
                    child: new Text("Annulez"),
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                  ),
                  new FlatButton(
                      onPressed: () async {
                        Navigator.pop(context, true);
                      },
                      child: new Text("OK"))*/
                ],
              ),
                ],
              );
            });
      },
    );
  }
}

class UserInfo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(10),
      child: Column(
        children: <Widget>[
          Container(
            padding: const EdgeInsets.only(left: 8.0, bottom: 4.0),
            alignment: Alignment.topLeft,
            child: Text(
              "Information de l'utilisateur",
              style: TextStyle(
                color: Colors.black87,
                fontWeight: FontWeight.w500,
                fontSize: 16,
              ),
              textAlign: TextAlign.left,
            ),
          ),
          Card(
            child: Container(
              alignment: Alignment.topLeft,
              padding: EdgeInsets.all(15),
              child: Column(
                children: <Widget>[
                  Column(
                    children: <Widget>[
                      ...ListTile.divideTiles(
                        color: Colors.grey,
                        tiles: [
                          ListTile(
                            contentPadding: EdgeInsets.symmetric(
                                horizontal: 12, vertical: 4),
                            leading: Icon(Icons.my_location),
                            title: Text("Location"),
                            subtitle: Text("Kathmandu"),
                          ),
                          ListTile(
                            leading: Icon(Icons.email),
                            title: Text("Email"),
                            subtitle: Text("sudeptech@gmail.com"),
                          ),
                          ListTile(
                            leading: Icon(Icons.phone),
                            title: Text("Phone"),
                            subtitle: Text("99--99876-56"),
                          ),
                          ListTile(
                            leading: Icon(Icons.person),
                            title: Text("About Me"),
                            subtitle: Text(
                                "This is a about me link and you can khow about me in this section."),
                          ),
                        ],
                      ),
                    ],
                  )
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}
class Body extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CircularProgressIndicator(
      backgroundColor: Colors.cyan,
      strokeWidth: 5,);
  }
}
class ProfileHeader extends StatelessWidget {
  final ImageProvider<dynamic> coverImage;
  final ImageProvider<dynamic> avatar;
  final String title;
  final String subtitle;
  final List<Widget> actions;

  const ProfileHeader(
      {Key key,
      @required this.coverImage,
      @required this.avatar,
      @required this.title,
      this.subtitle,
      this.actions})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Ink(
          height: 200,
          decoration: BoxDecoration(
            image: DecorationImage(image: coverImage, fit: BoxFit.cover),
          ),
        ),
        Ink(
          height: 200,
          decoration: BoxDecoration(
            color: Colors.black38,
          ),
        ),
        if (actions != null)
          Container(
            width: double.infinity,
            height: 200,
            padding: const EdgeInsets.only(bottom: 0.0, right: 0.0),
            alignment: Alignment.bottomRight,
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: actions,
            ),
          ),
        Container(
          width: double.infinity,
          margin: const EdgeInsets.only(top: 160),
          child: Column(
            children: <Widget>[
              Avatar(
                image: avatar,
                radius: 40,
                backgroundColor: Colors.white,
                borderColor: Colors.grey.shade300,
                borderWidth: 4.0,
              ),
              Text(
                title,
                style: Theme.of(context).textTheme.title,
              ),
              if (subtitle != null) ...[
                const SizedBox(height: 5.0),
                Text(
                  subtitle,
                  style: Theme.of(context).textTheme.subtitle,
                ),
              ]
            ],
          ),
        )
      ],
    );
  }

}

class Avatar extends StatelessWidget {
  final ImageProvider<dynamic> image;
  final Color borderColor;
  final Color backgroundColor;
  final double radius;
  final double borderWidth;

  const Avatar(
      {Key key,
      @required this.image,
      this.borderColor = Colors.grey,
      this.backgroundColor,
      this.radius = 30,
      this.borderWidth = 5})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CircleAvatar(
      radius: radius + borderWidth,
      backgroundColor: borderColor,
      child: CircleAvatar(
        radius: radius,
        backgroundColor: backgroundColor != null
            ? backgroundColor
            : Theme.of(context).primaryColor,
        child: CircleAvatar(
          radius: radius - borderWidth,
          backgroundImage: image,
        ),
      ),
    );
  }
}
class ListItemCountry {
  int value;
  String name;
  ListItemCountry(this.value, this.name);
}
