import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;
import 'package:http/http.dart';
import 'package:http/io_client.dart';
import 'package:mktransfert/library/api_request.dart';
import 'package:mktransfert/src/page/loginPage.dart';
import 'package:mktransfert/src/page/mesclasses/operation.dart';

int user_id;

returnUserId() async {
  var jwt = await storage.read(key: "jwt");
  Map<String, dynamic> responseJson = json.decode(jwt);
  String token = responseJson["access_token"];
  int user_id = responseJson["user_id"];
  print(user_id);
  user_id = user_id;
  return user_id;
}

class MkTransfertProvider {
  static Future<List<dynamic>> loadOperation() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    user_id = user_id;

    try {
      var _response = await http.get(
          Uri.parse(
              'http://demo.mktransfert.com/api/transactions/' + '$user_id'),
          headers: {
            "Accept": "application/json",
            'Authorization': 'Bearer $token',
          });
      if (_response.statusCode == 200) {
        var resBody = json.decode(_response.body);
        List _dataTransaction = List();
        List _dataTransactionProgressRefactored = List();
        resBody['data_transactions']?.forEach((k, v) {
          _dataTransaction.add(v[0]);
        });
        _dataTransaction.forEach((element) {
          if (element['transac_status'] == 'encours') {
            _dataTransactionProgressRefactored.add(element);
          }
        });
        return _dataTransactionProgressRefactored;
      } else {
        throw Exception();
      }
    } on Exception catch (e) {
      print(e);
      throw e;
    }
  }
    static Future<List<dynamic>> loadOperationEnded() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    user_id = user_id;

    try {
      var _response = await http.get(
          Uri.parse(
              'http://demo.mktransfert.com/api/transactions/' + '$user_id'),
          headers: {
            "Accept": "application/json",
            'Authorization': 'Bearer $token',
          });
      if (_response.statusCode == 200) {
        var resBody = json.decode(_response.body);
        List _dataTransaction = List();
        List _dataTransactionProgressEnded= List();
        resBody['data_transactions']?.forEach((k, v) {
          _dataTransaction.add(v[0]);
        });
        _dataTransaction.forEach((element) {
          if (element['transac_status'] == 'Livré') {
            _dataTransactionProgressEnded.add(element);
          }
        });
        return _dataTransactionProgressEnded;
      } else {
        throw Exception();
      }
    } on Exception catch (e) {
      print(e);
      throw e;
    }
  }
  static  Future<String> logMe(
      String email,
      String password,
      ) async {
    Map data = {
      'email': email,
      'password': password,
    };
     final ioc = new HttpClient();
     ioc.badCertificateCallback =
   (X509Certificate cert, String host, int port) => true;
     //final https = new IOClient(ioc);
    final Response response = await  http.post(
      'http://demo.mktransfert.com/api/login',
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(data),
    ); 
    print(response.body);
    return response.body;
  }
}
