import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class UserList extends StatelessWidget{

  final String apiUrl = "https://mktransfert-backend.herokuapp.com/api/tutorials";

  Future<List<dynamic>> fetchUsers() async {

    var result = await http.get(apiUrl);
    return json.decode(result.body);

  }
  String _name(dynamic user){
    return user['nom'];
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('User List'),
      ),
      body: Container(
        child: FutureBuilder<List<dynamic>>(
          future: fetchUsers(),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            if(snapshot.hasData){
              print(_name(snapshot.data[0]));
              return ListView.builder(
                  padding: EdgeInsets.all(8),
                  itemCount: snapshot.data.length,
                  itemBuilder: (BuildContext context, int index){
                    return
                      Card(
                        child: Column(
                          children: <Widget>[
                            ListTile(
                              // leading: CircleAvatar(
                              //     radius: 30,
                              //     backgroundImage: NetworkImage(snapshot.data[index]['picture']['large'])),
                              title: Text(_name(snapshot.data[index])),
                          /*    subtitle: Text(_location(snapshot.data[index])),
                              trailing: Text(_age(snapshot.data[index])),*/
                            )
                          ],
                        ),
                      );
                  });
            }else {
              return Center(child: CircularProgressIndicator());
            }
          },


        ),
      ),
    );
  }

}
