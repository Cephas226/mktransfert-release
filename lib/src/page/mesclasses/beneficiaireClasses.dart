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

final String apiUrlBeneficiaire = "http://10.0.2.2:8000/api/beneficiaires";
class Beneficiaire {
  int id;
  String receiver_first_name;
  String receiver_last_name;
  String receiver_email;
  String receiver_phone;
  String receiver_country;
  String receiver_description;
  Beneficiaire( {
    this.id,
    this.receiver_first_name,
    this.receiver_last_name,
    this.receiver_email,
    this.receiver_phone,
    this.receiver_country, this.receiver_description});

  factory Beneficiaire.fromMap(Map<String, dynamic> json) =>Beneficiaire(
    receiver_first_name: json['receiver_first_name'],
    receiver_last_name: json['receiver_last_name'],
    receiver_email: json['receiver_email'],
    receiver_phone: json['receiver_phone'],
    receiver_country: json['receiver_country'],
    receiver_description: json['receiver_description'],
  );
  factory Beneficiaire.fromJson(Map<String, dynamic> data) {
    return Beneficiaire(
      receiver_first_name: data['receiver_first_name'],
      receiver_last_name: data['receiver_last_name'],
      receiver_email: data['receiver_email'],
      receiver_phone: data['receiver_phone'],
      receiver_country: data['receiver_country'],
      receiver_description: data['receiver_description'],
    );
  }
  save() {
    print('saving user using a web service');
  }
  Future<Beneficiaire> saveMe(
      String nom,
      String prenom,
      String email,
      String telephone,
      String pays,
      String info_complementaire,) async {
    Map data = {
      'nom': nom,
      'prenom': prenom,
      'email': email,
      'telephone': telephone,
      "pays": pays,
      "info_complementaire": null
    };

    final Response response = await post(
      apiUrlBeneficiaire,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(data),
    );
    print(jsonEncode(data));
    if (response.statusCode == 200) {
      return Beneficiaire.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to post Beneficiaire');
    }
  }
}
