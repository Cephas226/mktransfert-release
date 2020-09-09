import 'package:flutter/material.dart';
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'package:mktransfert/core/presentation/widget/rounded_bordered_container.dart';
import 'package:mktransfert/src/page/chooseBeneficiaire.dart';


import 'package:mktransfert/src/page/transaction.dart';

import 'navigation.dart';

class BeneficiairePage extends StatefulWidget {
  static final String path = "lib/src/pages/settings/settings1.dart";
  @override
  _BeneficiairePageState createState() => _BeneficiairePageState();
}

class _BeneficiairePageState extends State<BeneficiairePage> {
  TextEditingController searchController = new TextEditingController();
  String filter;

  @override  initState() {
    searchController.addListener(() {
      setState(() {
        filter = searchController.text;
      });
    });
  }
  List<Contact> contacts = [
    Contact(fullName: 'Pratap Kumar', email: 'pratap@example.com',adresse:'Casablanca'),
    Contact(fullName: 'Jagadeesh', email: 'Jagadeesh@example.com',adresse:'Guinée'),
    Contact(fullName: 'Srinivas', email: 'Srinivas@example.com',adresse:'Casablanca'),
    Contact(fullName: 'Narendra', email: 'Narendra@example.com',adresse:'Guinée'),
    Contact(fullName: 'Sravan ', email: 'Sravan@example.com',adresse:'Casablanca'),
    Contact(fullName: 'Ranganadh', email: 'Ranganadh@example.com',adresse:'Guinée'),
    Contact(fullName: 'Karthik', email: 'Karthik@example.com',adresse:'Casablanca'),
    Contact(fullName: 'Saranya', email: 'Saranya@example.com',adresse:'Guinée'),
    Contact(fullName: 'Mahesh', email: 'Mahesh@example.com',adresse:'Casablanca'),
  ];
  @override
  Widget build(BuildContext context) {
    return Theme(
      data: ThemeData(
        // brightness: _getBrightness(),
      ),
      child: Scaffold(
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.blue,
          title: Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                IconButton(
                  icon: Icon(Icons.add_circle),
                  color: Colors.white,
                  onPressed: () {
                    Navigator.push(context, MaterialPageRoute(builder: (context) =>NavigationPage()),);
                  },
                ),
               Container(
                 child:GestureDetector(
                     onTap: () {  Navigator.push(context, MaterialPageRoute(
                         builder: (context) => ChooseBeneficiairePage()));},
                     child: Text("Ajouter",style: TextStyle(
                         fontWeight: FontWeight.bold, color: Colors.white),
                     ),

                 ),
               )
              ]
          ),
          automaticallyImplyLeading: false,
        ),
        body: Column(

          children: <Widget>[
            const SizedBox(height: 20.0),
            Material(
              elevation: 30.0,
              borderRadius: BorderRadius.all(Radius.circular(30)),
              child: TextField(
                controller:
                TextEditingController(text: 'Recherche un bénéficiaire...'),
                cursorColor: Theme.of(context).primaryColor,
                style: TextStyle(color: Colors.black, fontSize: 18),
                decoration: InputDecoration(
                    suffixIcon: Material(
                      elevation: 2.0,
                      borderRadius:
                      BorderRadius.all(Radius.circular(30)),
                      child: Icon(Icons.search),
                    ),
                    border: InputBorder.none,
                    contentPadding: EdgeInsets.symmetric(
                        horizontal: 25, vertical: 13)),
              ),
            ),
            Flexible(
              child:ListView.builder(
                itemCount: contacts.length,
                itemBuilder: (context, index) {
                  return filter == null || filter == ""?
                  ListTile(
                    title: Text(
                      '${contacts[index].fullName}',
                    ),
                    subtitle: Text(
                        '${contacts[index].email}',
                    ),
                    leading: new CircleAvatar(
                        backgroundColor: Colors.blue,
                        child: Text(
                            '${contacts[index].fullName.substring(0, 1)}')),
                    onTap: () => _onTapItem(context, contacts[index]),
                  ):'${contacts[index].fullName}'.toLowerCase()
                      .contains(filter.toLowerCase())
                      ? ListTile(
                    title: Text(
                      '${contacts[index].fullName}',
                    ),
                    subtitle: Text('${contacts[index].email}'),
                    leading: new CircleAvatar(
                        backgroundColor: Colors.blue,
                        child: Text(
                            '${contacts[index].fullName.substring(0, 1)}')),
                    onTap: () =>
                        _onTapItem(context, contacts[index]),
                  ): new Container();
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
  Widget cartItems(int index) {
    return RoundedContainer(
      padding: const EdgeInsets.all(0),
      margin: EdgeInsets.all(10),
      height: 130,
      child: Row(
        children: <Widget>[
          Container(
            width: 130,
            decoration: BoxDecoration(
                image: DecorationImage(
                  image: NetworkImage(images[1]),
                  fit: BoxFit.cover,
                )),
          ),
          Flexible(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10),
              child: Column(
                children: <Widget>[
                  Row(
                    children: <Widget>[
                      Flexible(
                        child:GestureDetector(
                            onTap: () {  Navigator.push(context, MaterialPageRoute(
                                builder: (context) => TransactionPage()));},
                            child: Text( "Nom:Cephas ZOUBGA",  style: TextStyle(
                                fontWeight: FontWeight.w600, fontSize: 15),)
                        ),
                      ),
                      Container(
                        width: 50,
                        child: IconButton(
                          onPressed: () {
                            print("Button Pressed");
                          },
                          color: Colors.red,
                          icon: Icon(Icons.delete),
                          iconSize: 20,
                        ),
                      )
                    ],
                  ),
                  Row(
                    children: <Widget>[
                      Text("Email: "),
                      SizedBox(
                        width: 5,
                      ),
                      Text(
                        '\cephaszoubga@gmail.com',
                        style: TextStyle(
                            fontSize: 16, fontWeight: FontWeight.w300),
                      )
                    ],
                  ),
                  Row(
                    children: <Widget>[
                      Text("Adresse"),
                      SizedBox(
                        width: 5,
                      ),
                      Text('\Casablanca',
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w300,
                            color: Colors.black,
                          ))
                    ],
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}
class Contact {
  final String fullName;
  final String email;
  final String adresse;

  const Contact({this.fullName, this.email,this.adresse});
}
void _onTapItem(BuildContext context, Contact post) {
 /* Scaffold.of(context).showSnackBar(
      new SnackBar(content: new Text("Tap on " + ' - ' + post.fullName)));*/
  Navigator.push(context, MaterialPageRoute(builder: (context) =>TransactionPage()),);
}
