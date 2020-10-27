

import 'dart:convert';
import 'dart:async';
import 'package:dio/dio.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/src/page/mesclasses/beneficiaireClasses.dart';

import '../loginPage.dart';


final String apiUrl = "https://gracetechnologie.pythonanywhere.com/api/receiver/";
Future<List<Beneficiaire>> fetchBeneficiaire() async {

  var result = await http.get(apiUrl);
  return json.decode(result.body);
}

/*List<Beneficiaire> decodeBeneficiaire(String responseBody) {
  final parsed = json.decode(responseBody).cast<Map<String, dynamic>>();
  return parsed.map<Beneficiaire>((json) => Beneficiaire.fromMap(json)).toList();
}*/

