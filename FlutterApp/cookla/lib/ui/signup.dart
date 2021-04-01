import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:cookla/service/aut.service.dart';
import 'package:cookla/ui/home.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

enum SingingCharacter { male, female }

class SignupPage extends StatefulWidget {
  @override
  _SignupPageState createState() => _SignupPageState();
}

class _SignupPageState extends State<SignupPage> {
  final Firestore firestore = Firestore.instance;
  var authHandler = new authentification();
  var dayController = TextEditingController();
  String fullName;
  String gender;
  String dateOfBirth;
  String email;
  String password;
  String nationality;
  String photo;
  String phone;
  int day = 1;
  int _n = 0;
  List<ListItem> _dropdownItems = [
    ListItem(1, "Burkinabé"),
    ListItem(2, "Marocaine"),
    ListItem(3, "Ivoirienne"),
  ];
  List<DropdownMenuItem<ListItem>> _dropdownMenuItems;
  ListItem _selectedItem;
  SingingCharacter _character = SingingCharacter.female;
  int _selectedIndex = 0;
  static const TextStyle optionStyle = TextStyle(fontSize: 30, fontWeight: FontWeight.bold);

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }
  final GlobalKey<FormState> _formStateKey = GlobalKey<FormState>();
  @override
  void initState() {
    super.initState();
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
  @override
  Widget build(BuildContext context) {
    void add() {
      setState(() {
        _n++;
      });
    }

    void minus() {
      setState(() {
        if (_n != 0) _n--;
      });
    }

    return MaterialApp(
      theme: ThemeData.light().copyWith(
        primaryColor: Color(0xfff3812f),
        accentColor: Color(0xfff3812f),
      ),
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          elevation: 0.0,
          title:
          Row(
              children: [
                IconButton(
                  icon: Icon(Icons.menu),
                  color: Colors.white,
                  onPressed: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context) =>HomePage()));
                  },
                )
              ],
          ),
        ),
          bottomNavigationBar: BottomNavigationBar(
            items: const <BottomNavigationBarItem>[
              BottomNavigationBarItem(
                icon: Icon(Icons.food_bank_outlined),
                label: 'Create recipe',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.fastfood),
                label: 'Explore recipe',
              )
            ],
            currentIndex: _selectedIndex,
            selectedItemColor: Colors.amber[800],
            onTap: _onItemTapped,
          ),
        body: SingleChildScrollView(
          child:Container(
            color: Color(0xfff3812f),
            child: Column(
              children: [
                Align(
                    alignment: Alignment.topLeft,
                    child:Container(
                      padding: const EdgeInsets.only(left: 20,top:10),
                      child:Text("Signup",style: TextStyle(color:Colors.white,fontSize: 18.0,
                          fontWeight: FontWeight.w600)),
                    )
                ),
                Container(
                    margin: const EdgeInsets.only(left: 5,right: 5),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(16.0),
                    ),
                    child:Form(
                      key: _formStateKey,
                      child: ListView(
                        shrinkWrap: true,
                        padding: const EdgeInsets.all(16.0),
                        children: <Widget>[
                          Row(
                            children: <Widget>[
                              Expanded(
                                child: Row(
                                  children: <Widget>[
                                    Expanded(
                                      child: Container(
                                        width: 10,
                                        child: Text("Full name"),
                                      ),
                                    ),
                                    Container(
                                      margin: EdgeInsets.only(left: 10),
                                      width: 250,
                                      padding: EdgeInsets.only(left: 20),
                                      decoration: BoxDecoration(
                                          color: Colors.grey,
                                          borderRadius:
                                          new BorderRadius.circular(30.0)),
                                      child: TextFormField(
                                          validator: (value) {
                                            if (value.isEmpty) {
                                              return 'Please enter Full name';
                                            }
                                            return null;
                                          },
                                          decoration: InputDecoration(
                                            hintText: "Full name",
                                            border: InputBorder.none,
                                          ),
                                          onSaved: (value) => fullName = value),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                          SizedBox(height: 10),
                          Row(
                            children: <Widget>[
                              Text("Gender"),
                              Expanded(
                                child: RadioListTile<SingingCharacter>(
                                  title: const Text('Male'),
                                  value: SingingCharacter.male,
                                  groupValue: _character,
                                  onChanged: (SingingCharacter value) {
                                    setState(() {
                                      _character = value;
                                    });
                                  },
                                ),
                              ),
                              Expanded(
                                child: RadioListTile<SingingCharacter>(
                                  title: const Text('Female'),
                                  value: SingingCharacter.female,
                                  groupValue: _character,
                                  onChanged: (SingingCharacter value) {
                                    setState(() {
                                      _character = value;
                                    });
                                  },
                                ),
                              ),
                            ],
                          ),
                          SizedBox(height: 10),
                          Row(children: <Widget>[
                            SizedBox(
                              width: 50, // do it in both Container
                              child: Text("Date of Birth"),
                            ),
                            SizedBox(width: 50),
                            Row(
                              children: [
                                SizedBox(
                                  height: 50.0,
                                  width: 80,
                                  child: Container(
                                      decoration: BoxDecoration(
                                          color: Colors.grey,
                                          borderRadius:
                                          new BorderRadius.circular(30.0)),
                                      child: Row(
                                        children: [
                                          Container(
                                              width: 20,
                                              padding: EdgeInsets.only(left: 10),
                                              child: TextFormField(
                                                decoration: InputDecoration(
                                                    border: InputBorder.none
                                                ),
                                                controller: dayController,
                                                keyboardType: TextInputType
                                                    .numberWithOptions(
                                                    decimal: true),
                                              )),
                                          SizedBox(width: 10),
                                          Container(
                                            decoration: BoxDecoration(
                                                color: Colors.white,
                                                borderRadius:
                                                new BorderRadius.circular(
                                                    30.0)),
                                            child: Column(
                                              children: [
                                                SizedBox(
                                                  // <-- use a sized box and change the height
                                                  height: 15.0,
                                                  child: new IconButton(
                                                    icon: new Icon(
                                                        Icons.arrow_drop_up),
                                                    onPressed: () {
                                                      print(_n);
                                                      setState(() {
                                                        _n++;
                                                        dayController.text =
                                                            _n.toString();
                                                      });
                                                    },
                                                  ),
                                                ),
                                                SizedBox(
                                                  // <-- use a sized box and change the height
                                                  height: 15.0,
                                                  child: new IconButton(
                                                    icon: new Icon(
                                                        Icons.arrow_drop_down),
                                                    onPressed: () {
                                                      print(_n);
                                                      setState(() {
                                                        _n--;
                                                        dayController.text =
                                                            _n.toString();
                                                      });
                                                    },
                                                  ),
                                                ),
                                              ],
                                            ),
                                          )
                                        ],
                                      )),
                                )
                              ],
                            ),
                            SizedBox(width: 5),
                            Row(
                              children: [
                                SizedBox(
                                  height: 50.0,
                                  width: 80,
                                  child: Container(
                                      decoration: BoxDecoration(
                                          color: Colors.grey,
                                          borderRadius:
                                          new BorderRadius.circular(30.0)),
                                      child: Row(
                                        children: [
                                          Container(
                                              width: 20,
                                              padding: EdgeInsets.only(left: 10),
                                              child: TextFormField(
                                                decoration: InputDecoration(
                                                    border: InputBorder.none
                                                ),
                                                controller: dayController,
                                                keyboardType: TextInputType
                                                    .numberWithOptions(
                                                    decimal: true),
                                              )),
                                          SizedBox(width: 10),
                                          Container(
                                            decoration: BoxDecoration(
                                                color: Colors.white,
                                                borderRadius:
                                                new BorderRadius.circular(
                                                    30.0)),
                                            child: Column(
                                              children: [
                                                SizedBox(
                                                  // <-- use a sized box and change the height
                                                  height: 15.0,
                                                  child: new IconButton(
                                                    icon: new Icon(
                                                        Icons.arrow_drop_up),
                                                    onPressed: () {
                                                      print(_n);
                                                      setState(() {
                                                        _n++;
                                                        dayController.text =
                                                            _n.toString();
                                                      });
                                                    },
                                                  ),
                                                ),
                                                SizedBox(
                                                  // <-- use a sized box and change the height
                                                  height: 15.0,
                                                  child: new IconButton(
                                                    icon: new Icon(
                                                        Icons.arrow_drop_down),
                                                    onPressed: () {
                                                      print(_n);
                                                      setState(() {
                                                        _n--;
                                                        dayController.text =
                                                            _n.toString();
                                                      });
                                                    },
                                                  ),
                                                ),
                                              ],
                                            ),
                                          )
                                        ],
                                      )),
                                )
                              ],
                            ),
                            SizedBox(width: 5),
                            Row(
                              children: [
                                SizedBox(
                                  height: 50.0,
                                  width: 80,
                                  child: Container(
                                      decoration: BoxDecoration(
                                          color: Colors.grey,
                                          borderRadius:
                                          new BorderRadius.circular(30.0)),
                                      child: Row(
                                        children: [
                                          Container(
                                              width: 20,
                                              padding: EdgeInsets.only(left: 10),
                                              child: TextFormField(
                                                decoration: InputDecoration(
                                                    border: InputBorder.none
                                                ),
                                                controller: dayController,
                                                keyboardType: TextInputType
                                                    .numberWithOptions(
                                                    decimal: true),
                                              )),
                                          SizedBox(width: 10),
                                          Container(
                                            decoration: BoxDecoration(
                                                color: Colors.white,
                                                borderRadius:
                                                new BorderRadius.circular(
                                                    30.0)),
                                            child: Column(
                                              children: [
                                                SizedBox(
                                                  // <-- use a sized box and change the height
                                                  height: 15.0,
                                                  child: new IconButton(
                                                    icon: new Icon(
                                                        Icons.arrow_drop_up),
                                                    onPressed: () {
                                                      print(_n);
                                                      setState(() {
                                                        _n++;
                                                        dayController.text =
                                                            _n.toString();
                                                      });
                                                    },
                                                  ),
                                                ),
                                                SizedBox(
                                                  // <-- use a sized box and change the height
                                                  height: 15.0,
                                                  child: new IconButton(
                                                    icon: new Icon(
                                                        Icons.arrow_drop_down),
                                                    onPressed: () {
                                                      print(_n);
                                                      setState(() {
                                                        _n--;
                                                        dayController.text =
                                                            _n.toString();
                                                      });
                                                    },
                                                  ),
                                                ),
                                              ],
                                            ),
                                          )
                                        ],
                                      )),
                                )
                              ],
                            ),
                          ]),
                          SizedBox(height: 10),
                          Row(
                            children: <Widget>[
                              Expanded(
                                child: Row(
                                  children: <Widget>[
                                    Expanded(
                                      child: Container(
                                        width: 10,
                                        child: Text("Email adress"),
                                      ),
                                    ),
                                    Container(
                                      margin: EdgeInsets.only(left: 10),
                                      width: 250,
                                      padding: EdgeInsets.only(left: 20),
                                      decoration: BoxDecoration(
                                          color:Colors.grey,
                                          borderRadius: BorderRadius.circular(30.0)),
                                      child: TextFormField(
                                          validator: (value) {
                                            if (value.isEmpty) {
                                              return 'Email adress';
                                            }
                                            return null;
                                          },
                                          decoration: InputDecoration(
                                              hintText: "Email adress",
                                              border: InputBorder.none
                                          ),
                                          onSaved: (value) => email = value),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                          SizedBox(height: 10),
                          Row(
                            children: <Widget>[
                              Expanded(
                                child: Row(
                                  children: <Widget>[
                                    Expanded(
                                      child: Container(
                                        width: 10,
                                        child: Text("Phone number"),
                                      ),
                                    ),
                                    Container(
                                      margin: EdgeInsets.only(left: 10),
                                      width: 250,
                                      padding: EdgeInsets.only(left: 20),
                                      decoration: BoxDecoration(
                                          color:Colors.grey,
                                          borderRadius: BorderRadius.circular(30.0)),
                                      child: TextFormField(
                                          validator: (value) {
                                            if (value.isEmpty) {
                                              return 'Phone number';
                                            }
                                            return null;
                                          },
                                          decoration: InputDecoration(
                                            hintText: "Phone number",
                                            border: InputBorder.none,
                                          ),
                                          onSaved: (value) => phone = value),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                          SizedBox(height: 10),
                          Row(
                            children: <Widget>[
                              Expanded(
                                child: Row(
                                  children: <Widget>[
                                    Expanded(
                                      child: Container(
                                        width: 10,
                                        child: Text("Password"),
                                      ),
                                    ),
                                    Container(
                                      margin: EdgeInsets.only(left: 10),
                                      width: 250,
                                      padding: EdgeInsets.only(left: 20),
                                      decoration: BoxDecoration(
                                          color:Colors.grey,
                                          borderRadius: BorderRadius.circular(30.0)),
                                      child: TextFormField(
                                          validator: (value) {
                                            if (value.isEmpty) {
                                              return 'Password please';
                                            }
                                            return null;
                                          },
                                          obscureText: true,
                                          decoration: InputDecoration(
                                              hintText: "**************",
                                              border: InputBorder.none
                                          ),
                                          onSaved: (value) => password = value),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                          SizedBox(height: 10),
                          Row(children: [
                            Expanded(child: Text("Nationality")),
                            Container(
                                width: 247,
                                height: 48,
                                padding: EdgeInsets.only(left: 20),
                                decoration: BoxDecoration(
                                    color:Colors.grey,
                                    borderRadius: BorderRadius.circular(30.0),
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
                                )),
                          ],),
                          SizedBox(height: 10),
                          Row(
                            children: <Widget>[
                              Expanded(
                                child: Row(
                                  children: <Widget>[
                                    Expanded(
                                      child: Container(
                                        width: 10,
                                        child: Text("Add a photo"),
                                      ),
                                    ),
                                    Container(
                                        margin: EdgeInsets.only(left: 10),
                                        width: 250,
                                        padding: EdgeInsets.only(left: 20),
                                        decoration: BoxDecoration(
                                          color: Colors.grey,
                                          borderRadius: BorderRadius.circular(30.0),
                                        ),
                                        child:
                                        Row(
                                          children: [
                                            Expanded(
                                              child:
                                              Container(
                                                child:  TextFormField(
                                                    validator: (value) {
                                                      if (value.isEmpty) {
                                                        return 'Photo link please';
                                                      }
                                                      return null;
                                                    },
                                                    decoration: InputDecoration(
                                                        border: InputBorder.none
                                                    ),
                                                    onSaved: (value) => photo = value),
                                              ),
                                            ),
                                            Icon(
                                              Icons.link,
                                              size: 50,
                                              color: Colors.white,
                                            ),
                                          ],
                                        )
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                          SizedBox(height: 30),
                          Container(
                            width: 250,
                            child: Center(
                              child: FlatButton(
                                onPressed: () async {
                                  if (_formStateKey.currentState.validate()) {
                                    _formStateKey.currentState.save();
                                    Firestore.instance.collection("users").add({
                                      "fullName": fullName,
                                      "gender": _character.index,
                                      "dateOfBirth": dateOfBirth,
                                      "phone": phone,
                                      "email": email,
                                      "nationality": _selectedItem.name,
                                      "photo": photo,
                                    }).whenComplete(() {
                                      Navigator.of(context).pop();
                                    });

                                    {
                                      authHandler
                                          .handleSignUp(email, password)
                                          .then((FirebaseUser user) {
                                        print(user);
                                      }).catchError((e) => print(e));
                                      Navigator.pop(context);
                                    
                                    }
                                  }
                                },
                                color: Colors.green,
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: Row(
                                  //mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                  children: [
                                    Icon(
                                      Icons.check_circle,
                                      size: 25,
                                      color: Colors.white,
                                    ),
                                    SizedBox(width: 90),
                                    Text(
                                      'Signup',
                                      style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 20,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    )

                )
              ],
            ),
          ),
        )

      ),
    );
  }
}

class ListItem {
  int value;
  String name;

  ListItem(this.value, this.name);
}
