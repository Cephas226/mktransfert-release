import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:mktransfert/core/presentation/res/assets.dart';
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
  int _mySelectionCountry;
  var testCountry = List();
  List userInfo = List();
  bool _checkeMe = false;
  var editUser_last_name = TextEditingController();
  var editUser_first_name = TextEditingController();
  var editUser_email = TextEditingController();
  var editUser_phone = TextEditingController();
  var editUser_country = TextEditingController();
  var editUser_password = TextEditingController();

  String displayUser_last_name;
  String displayUser_first_name;
  String displayUser_email;

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
    countrydata = countryList;
    print(countrydata);
    return countrydata;
  }

  displayUserInfo() async {
    var jwt = await storage.read(key: "userInfo");
    print(jwt);
    Map<String, dynamic> responseStorageUser = json.decode(jwt);
    editUser_first_name.text = responseStorageUser["first_name"];
    editUser_last_name.text = responseStorageUser["last_name"];
    editUser_email.text = responseStorageUser["email"];

    displayUser_first_name = responseStorageUser["first_name"];
    displayUser_last_name = responseStorageUser["last_name"];
    displayUser_email = responseStorageUser["email"];
  }

  @override
  void initState() {
    super.initState();
    this.displayUserInfo();
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
        body: SingleChildScrollView(
            child: FutureBuilder<List<dynamic>>(
                future: displayProleInfo(),
                builder: (BuildContext context, AsyncSnapshot snapshot) {
                  if (snapshot.hasData) {
                    return Column(
                      children: <Widget>[
                        ProfileHeader(
                          avatar: NetworkImage(avatars[0]),
                          coverImage: NetworkImage(images[1]),
                          title: displayUser_first_name,
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
                                                title: Text("Adresse"),
                                                subtitle: Text("Kathmandu"),
                                              ),
                                              ListTile(
                                                leading: Icon(Icons.email),
                                                title: Text("Email"),
                                                subtitle:
                                                    Text(displayUser_email),
                                              ),
                                              ListTile(
                                                leading: Icon(Icons.phone),
                                                title: Text("Phone"),
                                                subtitle: Text("99--99876-56"),
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
                  else {
                    return Center(child: CircularProgressIndicator());
                  }
                }))
    );
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
                                                        hint: Text(
                                                            "Choisir un pays"),
                                                        items: countrydata
                                                                ?.map((item) {
                                                              return DropdownMenuItem(
                                                                child: Text(item[
                                                                    'country_name']),
                                                                value:
                                                                    item['id'],
                                                              );
                                                            })?.toList() ??
                                                            [],
                                                        onChanged: (country) {
                                                          setState(() {
                                                            // showLoaderDialog(context);
                                                            _mySelectionCountry =
                                                                country;
                                                            setState(() {
                                                              var selectedReceiverCountry =
                                                                  countrydata
                                                                      .map((item) =>
                                                                          item)
                                                                      .toList();
                                                              selectedReceiverCountry
                                                                  .forEach(
                                                                      (f) => {
                                                                            if (f['id'] ==
                                                                                country)
                                                                              {
                                                                                if (!f['country_isdisponible'])
                                                                                  {
                                                                                    print(f),
                                                                                    _mySelectionCountry = 1,
                                                                                    showAlertDialog(context),
                                                                                  }
                                                                              }
                                                                          });
                                                              _mySelectionCountry =
                                                                  country;
                                                            });
                                                          });
                                                        },
                                                        value:
                                                            _mySelectionCountry,
                                                      ),
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
                                                          TextEditingController()
                                                            ..text =
                                                                editUser_last_name
                                                                    .text,
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
                                                        TextEditingController()
                                                          ..text =
                                                              editUser_first_name
                                                                  .text,
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
                                                          TextEditingController()
                                                            ..text =
                                                                editUser_email
                                                                    .text,
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
                                          /* Padding(
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
                                                          TextEditingController()
                                                            ..text =
                                                                editUser_phone
                                                                    .text,
                                                          decoration: const InputDecoration(
                                                              hintText:
                                                              "Entre un téléphone",
                                                              border:
                                                              OutlineInputBorder()),
                                                        ),
                                                      ),
                                                    ],
                                                  )),*/
                                          const SizedBox(height: 20.0),
                                        ],
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
                children: <Widget>[
                  new FlatButton(
                    child: new Text("Annulez"),
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                  ),
                  new FlatButton(
                      onPressed: () async {
                        Navigator.pop(context, true);
                      },
                      child: new Text("OK"))
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
