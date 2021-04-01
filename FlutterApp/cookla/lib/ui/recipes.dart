
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'home.dart';

class RecipePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: ThemeData(
          primaryColor: Colors.deepOrange,
        ),
        debugShowCheckedModeBanner: false,
        home: Scaffold(
            appBar: AppBar(
              elevation: 0.0,
              title:
              Row(
                children: [
                  IconButton(
                    icon: Icon(Icons.arrow_back),
                    color: Colors.white,
                    onPressed: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context) =>HomePage()));
                    },
                  )
                ],
              ),
            ),
            body: Center(
                child: Container(
                    // height: 200,
                    child: GridView.count(
          scrollDirection: Axis.vertical,
          crossAxisCount: 2,
          children: [
            Card(
              child: Image.network("https://firebasestorage.googleapis.com/v0/b/cookla-18fb0.appspot.com/o/pexels-ella-olsson-1640777.jpg?alt=media&token=c7133833-13e5-4392-861b-f5c8c941bfe4"),
            ),
            Card(
              child: Image.network("https://firebasestorage.googleapis.com/v0/b/cookla-18fb0.appspot.com/o/pexels-lisa-fotios-1279330.jpg?alt=media&token=074d294b-1d9b-48d8-a047-48944a710705"),
            ),
            Card(
              child: Image.network("https://firebasestorage.googleapis.com/v0/b/cookla-18fb0.appspot.com/o/pexels-ella-olsson-3026808.jpg?alt=media&token=5823c137-361b-47ee-ab9b-e2ea9c91eeda"),
            ),
            Card(
              child: Image.network("https://firebasestorage.googleapis.com/v0/b/cookla-18fb0.appspot.com/o/pexels-lisa-fotios-1279330.jpg?alt=media&token=074d294b-1d9b-48d8-a047-48944a710705"),
            ),
          ],
        )))));
  }
}
