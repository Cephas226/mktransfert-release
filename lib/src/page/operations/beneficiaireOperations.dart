

import 'dart:convert';
import 'dart:async';
import 'package:dio/dio.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/src/page/mesclasses/beneficiaireClasses.dart';


final String apiUrl = "http://10.0.2.2:8000/api/beneficiaires";

Future<List<dynamic>> fetchBeneficiaire() async {
  var result = await http.get(apiUrl);
  return json.decode(result.body);
}
Future<List<dynamic>>getBeneficiaire() async {
  try {
    Response response = await Dio().get(apiUrl);
    print(response);
  } catch (e) {
    print(e);
  }
}

/*List<Beneficiaire> decodeBeneficiaire(String responseBody) {
  final parsed = json.decode(responseBody).cast<Map<String, dynamic>>();
  return parsed.map<Beneficiaire>((json) => Beneficiaire.fromMap(json)).toList();
}*/

