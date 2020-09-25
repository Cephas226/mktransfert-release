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

import 'package:dio/dio.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/src/page/operations/beneficiaireOperations.dart';
class Beneficiaire {
  int id;
  String nom;
  String prenom;
  String email;
  String telephone;
  String pays;
  String info_complementaire;
  Beneficiaire( {
    this.id,
    this.nom,
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
  save() {
    print('saving user using a web service');
  }
  Future<List<dynamic>>saveBeneficiaire(
      String nom,
      String prenom,
      String email,
      String pays,
      String telephone,
      String info_complementaire,
      ) async {
    try {
      FormData formData = new FormData.fromMap({
        'nom': nom,
        'prenom': prenom,
        'email': email,
        "pays": null,
        'telephone': telephone,
        "info_complementaire": null
      });

     Response response =  await Dio().post(apiUrl, data:formData);
      print(response);
    } catch (e) {
      print(e);
    }
  }

 Future<Beneficiaire> saveMe(

      String nom,
      String prenom,
      String email,
      String telephone,
      String pays,
      String info_complementaire,
      ) async {
    final http.Response response = await http.post(
      'http://10.0.2.2:8000/api/beneficiaires',
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'nom': nom,
        'prenom': prenom,
        'email': email,
        'telephone': telephone,
        "pays": null,
        "info_complementaire": null
      }),
    );
    print(Beneficiaire.fromJson(json.decode(response.body)));
    if (response.statusCode == 201) {
      return Beneficiaire.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to load Beneficiaire');
    }
  }
}
