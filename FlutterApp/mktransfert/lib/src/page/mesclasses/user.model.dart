import 'dart:convert'; 
import 'package:http/http.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/src/page/operations/beneficiaireOperations.dart';
final String apiUrlRegister =  "http://demo.mktransfert.com/api/register";
final String apiUrlLogin =  "http://demo.mktransfert.com/api/login";
 
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

  Future<dynamic> saveMe(
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
    print(response.body);
    if (response.statusCode == 200) { 
      return response;
    }
    else {
      throw Exception('Failed to post User');
    }
  }
}
