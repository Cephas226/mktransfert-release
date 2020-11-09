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

import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:http/http.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/src/page/operations/beneficiaireOperations.dart';
final String apiUrlRegister =  "https://www.mktransfert.com/api/register";
final String apiUrlLogin =  "https://www.mktransfert.com/api/login";
final storage = FlutterSecureStorage();
class User {
  int id;
  String last_name;
  String first_name;
  String email;

  String phone;
  String country;
  String password;

  User({
    this.id,
    this.last_name,
    this.first_name,
    this.email,
    this.phone,
    this.country,
    this.password,
  });

  factory User.fromMap(Map<String, dynamic> json) =>
      User(
        last_name: json['last_name'],
        first_name: json['first_name'],
        email: json['email'],
        phone: json['phone'],
        country: json['country'],
        password: json['password'],
      );

  factory User.fromJson(Map<String, dynamic> data) {
    return User(
      last_name: data['last_name'],
      first_name: data['first_name'],
      email: data['email'],
      phone: data['phone'],
      country: data['country'],
      password: data['password'],
    );
  }

  Future<int> saveMe(
      String last_name,
      String first_name,
      String email,
      String phone,
      String country,
      String password
      ) async {
    Map data = {
      'last_name': last_name,
      'first_name': first_name,
      'email': email,
      'phone': phone,
      'country': country,
      'password': password,
    };

    final Response response = await post(
      '$apiUrlRegister',
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(data),
    );
    print(response.statusCode);
    print(jsonEncode(data));
    if (response.statusCode == 200) {
      print('succès User');
      // User.fromJson(json.decode(response.body));
      return response.statusCode;
    }
    else {
      throw Exception('Failed to post User');
    }
  }
}
