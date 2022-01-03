
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'package:mktransfert/src/page/loginPage.dart';
import 'package:stripe_payment/stripe_payment.dart';

class StripeTransactionResponse {
  String message;
  bool success;
  StripeTransactionResponse({this.message, this.success});
}

class StripeService {

  static String apiBase = 'https://api.stripe.com/v1';
  static String paymentApiUrl = '${StripeService.apiBase}/payment_intents';
  static String secret = 'sk_test_51HNmJoCNGrJkhMzwsY47bg0Lu1GP1RItPqtIpXFP0nYyPoeDOdgkEvE9xk2lSR95xY8Kyf5Q9wQfu6rECcvkehY500zrfWkpLe';
  static String stripe_secret_key;
  getSuccesInfo() async {

  }
  static init() async {
    var jwt = await storage.read(key: "jwt");
    Map<String, dynamic> responseJson = json.decode(jwt);
    String token = responseJson["access_token"];
    int user_id = responseJson["user_id"];
    http.Response response = await http.get(
        'http://demo.mktransfert.com/api/stripe',
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer $token',
        });
    var resBody = json.decode(response.body);
    print(resBody['stripe_public_key']);
    var stripe_public_key=resBody['stripe_public_key'];
      stripe_secret_key=resBody['stripe_secret_key'];
    // _transac_num = resBody["API_transac_data"];
    StripePayment.setOptions(
        StripeOptions(
            publishableKey:stripe_public_key,
            merchantId: "Test",
            androidPayMode: 'test'
        )
    );
  }



  static Future<StripeTransactionResponse> payViaExistingCard({String amount, String currency, CreditCard card,BuildContext context}) async{
    try {
      var paymentMethod = await StripePayment.createPaymentMethod(
          PaymentMethodRequest(card: card)
      );
      var paymentIntent = await StripeService.createPaymentIntent(
          amount,
          currency
      );
      var response = await StripePayment.confirmPaymentIntent(
          PaymentIntent(
              clientSecret: paymentIntent['client_secret'],
              paymentMethodId: paymentMethod.id
          )
      );
      if (response.status == 'succeeded') {
        //  _paymentSuccessDialog(context);

        return new StripeTransactionResponse(
            message: 'Transaction réussie',
            success: true
        );
      } else {
        return new StripeTransactionResponse(
            message: 'La transaction a échoué',
            success: false
        );
      }
    } on PlatformException catch(err) {
      return StripeService.getPlatformExceptionErrorResult(err);
    }
    catch (err) {
      return new StripeTransactionResponse(
          message: 'La transaction a échoué: ${err.toString()}',
          success: false
      );
    }
  }

  static Future<StripeTransactionResponse> payWithNewCard({String amount, String currency}) async {
    try {
      var paymentMethod = await StripePayment.paymentRequestWithCardForm(
          CardFormPaymentRequest()
      );
      var paymentIntent = await StripeService.createPaymentIntent(
          amount,
          currency
      );
      var response = await StripePayment.confirmPaymentIntent(
          PaymentIntent(
              clientSecret: paymentIntent['client_secret'],
              paymentMethodId: paymentMethod.id
          )
      );
      if (response.status == 'succeeded') {
        return new StripeTransactionResponse(
            message: 'Transaction réussie',
            success: true
        );

      } else {
        return new StripeTransactionResponse(
            message: 'La transaction a échoué',
            success: false
        );
      }
    } on PlatformException catch(err) {
      return StripeService.getPlatformExceptionErrorResult(err);
    } catch (err) {
      return new StripeTransactionResponse(
          message: 'La transaction a échoué: ${err.toString()}',
          success: false
      );
    }
  }

  static getPlatformExceptionErrorResult(err) {
    String message = 'Un problème est survenu';
    if (err.code == 'annulé') {
      message = 'Transaction annulée';
    }

    return new StripeTransactionResponse(
        message: message,
        success: false
    );
  }
  static Map<String, String> headers = {
    'Authorization': 'Bearer ${StripeService.stripe_secret_key}',
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  static Future<Map<String, dynamic>> createPaymentIntent(String amount, String currency) async {

    try {
      Map<String, dynamic> body = {
        'amount': amount,
        'currency': currency,
        'payment_method_types[]': 'card'
      };
      var response = await http.post(
          StripeService.paymentApiUrl,
          body: body,
          headers: StripeService.headers
      );
      return jsonDecode(response.body);
    } catch (err) {
      print('err charging user: ${err.toString()}');
    }
    return null;
  }
}
