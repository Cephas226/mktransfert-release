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
    await MkTransfertProvider.logMe(email, password);
    Get.to(PagePrincipale());
    update();
  }
}
