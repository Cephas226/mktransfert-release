import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';

const GOOGLE_MAPS_API_KEY = "AIzaSyChFwOwpUp9g9lxtTAwRD4VwA4LG0NupEQ";

// firebase
final Future<FirebaseApp> initialization = Firebase.initializeApp();

FirebaseFirestore firebaseFiretore = FirebaseFirestore.instance;
FirebaseAuth auth = FirebaseAuth.instance;
FirebaseMessaging fcm = FirebaseMessaging();



