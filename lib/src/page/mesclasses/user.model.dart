/*
class Beneficiaire {
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

  factory Beneficiaire.fromMap(Map<String, dynamic> json){
    return Beneficiaire(
      nom: json['nom'],
      prenom: json['prenom'],
      email: json['email'],
      telephone: json['telephone'],
      pays: json['pays'],
      info_complementaire: json['info_complementaire'],
    );
  }
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
}
*/

import 'dart:convert';

import 'package:http/http.dart';
import 'package:mktransfert/src/page/operations/beneficiaireOperations.dart';
final String apiUrlUser =  "http://10.0.2.2:8000/api/auth/signup";
class User {
  int id;
  String nom;
  String prenom;
  String email;
  String telephone;
  String pays;
  String password;
  String cpassword;
  User( {
    this.id,
    this.nom,
    this.prenom,
    this.email,
    this.telephone,
    this.pays,
    this.password,
    this.cpassword,
  });

  factory User.fromMap(Map<String, dynamic> json) =>User(
    nom: json['nom'],
    prenom: json['prenom'],
    email: json['email'],
    telephone: json['telephone'],
    pays: json['pays'],
    password: json['password'],
    cpassword: json['cpassword'],
  );
  factory User.fromJson(Map<String, dynamic> data) {
    return User(
      nom: data['nom'],
      prenom: data['prenom'],
      password: data['password'],
      email: data['email'],
      telephone: data['telephone'],
      pays: data['pays'],
      cpassword: data['cpassword'],
    );
  }

  Future<User> saveMe(
      String nom,
      String prenom,
      String email,
      String telephone,
      String pays,
      String password,
      String cpassword,
      ) async {
    Map data = {
      'nom': nom,
      'prenom': prenom,
     'email': email,
      'telephone': telephone,
      'pays': pays,
      'password': password,
      'cpassword': cpassword,
    };

    final Response response = await post(
      'http://10.0.2.2:8000/api/auth/signup',
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(data),
    );
    print(response.statusCode);
    print(jsonEncode(data));
    if (response.statusCode == 200) {
      print('succès User');
      return User.fromJson(json.decode(response.body));
    }
    else {
      throw Exception('Failed to post User');
    }
  }
}
