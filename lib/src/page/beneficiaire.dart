import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:mktransfert/core/presentation/widget/rounded_bordered_container.dart';

import 'package:mktransfert/src/page/transaction.dart';

import 'chooseBeneficiaire.dart';
import 'navigation.dart';
import 'operations/beneficiaireOperations.dart';

class BeneficiairePage extends StatefulWidget {
  static final String path = "lib/src/pages/settings/settings1.dart";
  @override
  _BeneficiairePageState createState() => _BeneficiairePageState();
}

class _BeneficiairePageState extends State<BeneficiairePage> {
  TextEditingController searchController = new TextEditingController();
  String filter;
  String _nom(dynamic beneficiaire){
    return beneficiaire['nom'];
  }
  String _email(dynamic beneficiaire){
    return beneficiaire['email'];
  }
  _BeneficiairePageState();

  @override  initState() {
    searchController.addListener(() {
      setState(() {
        filter = searchController.text;
      });
    });
  }
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
              child: FutureBuilder<List<dynamic>>(
                future: fetchBeneficiaire(),
                builder: (BuildContext context, AsyncSnapshot snapshot) {
                  if(snapshot.hasData){

                    return ListView.builder(
                        padding: EdgeInsets.all(8),
                        itemCount: snapshot.data.length,
                        itemBuilder: (BuildContext context, int index){
                          return
                            Card(
                              child: Column(
                                children: <Widget>[
                                  ListTile(
                                    title: Text(_nom(snapshot.data[index])),
                                    leading: new CircleAvatar(
                                        backgroundColor: Colors.blue,
                                        child: Text(
                                            '${_nom(snapshot.data[index]).substring(0, 1)}')),
                                    onTap: () {
                                      Navigator.push(
                                        context,
                                        MaterialPageRoute(
                                          builder: (context) => TransactionPage(),
                                        ),
                                      );
                                    },
                                    //  subtitle: Text(_email(snapshot.data[index])),
                                    // trailing: Text(_age(snapshot.data[index])),
                                  )
                                ],
                              ),
                            );
                        });
                  }else {
                    return Center(child: CircularProgressIndicator());
                  }
                },
              ),
              /* child:ListView.builder(
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
              ),*/
            ),
          ],
        ),
      ),
    );
  }
/*  Widget cartItems(int index) {
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
  }*/
}

/*class Beneficiaire {
  final String nom;
  final String prenom;
  final String email;
  final String telephone;
  final String pays;
  final String info_complementaire;
  Beneficiaire( {this.nom,
    this.prenom,
    this.email,
    this.telephone,
    this.pays, this.info_complementaire});
  factory Beneficiaire.fromMap(Map<String, dynamic> json) =>Beneficiaire(
    nom: json['nom'],
    prenom: json['prenom'],
    email: json['email'],
    telephone: json['telephone'],
    pays: json['pays'],
    info_complementaire: json['info_complementaire'],
  );
  factory Beneficiaire.fromJson(Map<String, dynamic> data) {
    return Beneficiaire(
      nom: data['nom'],
      prenom: data['prenom'],
      email: data['email'],
      telephone: data['telephone'],
      pays: data['pays'],
      info_complementaire: data['info_complementaire'],
    );
  }
}*/
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
