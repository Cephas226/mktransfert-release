import 'package:get/get.dart';
import 'package:mktransfert/src/page/modules/operations.dart';
import 'package:mktransfert/src/services/MkTransfertProvider.dart';

class OperationController extends GetxController {
  var operationListInProgress=[];
  var operationListEnded=[];
  @override
  void onInit() async {
    super.onInit();
    initOperation();
    print("init operation");
  }

  initOperation() async {
   operationListInProgress= await MkTransfertProvider.loadOperation();
   operationListEnded= await MkTransfertProvider.loadOperationEnded();  
    update();
  }
}
