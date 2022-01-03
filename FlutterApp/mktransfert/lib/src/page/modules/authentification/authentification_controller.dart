import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;
import 'package:get/get.dart';
import 'package:mktransfert/src/page/pagePrincipale.dart';
import 'package:mktransfert/src/services/MkTransfertProvider.dart';

class AuthentificationController extends GetxController {
  var AuthentificationListInProgress = [];
  var AuthentificationListEnded = [];
  @override
  void onInit() async {
    super.onInit();
    print("init Authentification");
  }

  initAuthentification(String email, String password) async {
   // await MkTransfertProvider.logMe(email, password);
    var jwtUser = await logMe(email, password);
                    var jwt = await logMe(email, password);
                    if (jwt!=null) {
                   storage.write(key: "jwt", value: jwt);
                      storage.write(key: "userInfo", value: jwtUser);
                    Get.to(PagePrincipale());
                  }
  //  Get.to(PagePrincipale());
    update();
  }
    Future<String> logMe(
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
    final http.Response response = await  http.post(
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
