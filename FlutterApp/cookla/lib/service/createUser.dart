

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
final Firestore firestore = Firestore.instance;
class userService{
  void _create() async {
    try {
      await firestore.collection('users').document('testUser').setData({
        'firstName': 'test',
        'lastName': 'user',
      });
    } catch (e) {
      print(e);
    }
  }
}