import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:mktransfert/src/page/loginPage.dart';
class ApiRequest {
  final String url;
  final Map<String, dynamic> data;
  Dio dio = Dio();
  ApiRequest({
     this.url,
     this.data,
  });

  Future<void> get({
    Function() beforeSend,
    Function(dynamic data) onSuccess,
    Function(dynamic error) onError,
  }) async {
 var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    await Dio(BaseOptions(
      headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token.toString()
    })).get(this.url, queryParameters: this.data).then((res) {
      if (onSuccess != null) onSuccess(res.data);
    }).catchError((error) {
      if (onError != null) onError(error);
    });
  }
}