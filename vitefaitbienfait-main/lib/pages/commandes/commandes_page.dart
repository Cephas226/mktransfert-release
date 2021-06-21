import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';
import 'package:getx_app/common-widget/common-widget/commande_card.dart';
import 'package:getx_app/pages/home/home_page.dart';
import 'package:getx_app/utilities/constants.dart';

import 'commandes_controller.dart';


class CommandesPage extends GetView<CommandesController> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        extendBodyBehindAppBar: true,
        appBar:
        AppBar(
          backgroundColor: Colors.transparent,
          elevation: 0.0,
          leading: IconButton(
            icon: Icon(Icons.filter_list),
            color: Colors.black,
            onPressed: () {},
          ),
          title: Row(
            children: <Widget>[
                  Text(
                    'Mes commandes',
                    style: TextStyle(color: Colors.black),
                  ),

            ],
          ),
        ),
      body:
      Stack(
        children: [
          CustomBackground(),
          ListView(
            children: <Widget>[
              SizedBox(height: 10.0),
              Container(
                  height: MediaQuery.of(context).size.height - 185.0,
                  decoration: BoxDecoration(
                    color: Colors.transparent,
                    borderRadius: BorderRadius.only(topLeft: Radius.circular(75.0)),
                  ),
                  child: ListView(
                    children: [
                      Padding(
                          padding: EdgeInsets.only(top:50.0),
                          child: Container(
                              height: MediaQuery.of(context).size.height - 300.0,
                              child: ListView(children: [
                                CommandeCard(
                                  color: Colors.white,
                                  name: 'Reparation de fuite',
                                  image: AssetImage(
                                    'assets/fuite.jpg',
                                  ),
                                  date: '29/01/2021',
                                ),
                                SizedBox(height: 20),
                                CommandeCard(
                                  color: Colors.white,
                                  name: 'Installation de Lampe',
                                  image: AssetImage(
                                    'assets/lampe.jpg',
                                  ),
                                  date: '10/01/2021',
                                ),
                                SizedBox(height: 20),
                                CommandeCard(
                                  color: Colors.white,
                                  name: 'Reparation de Baignoire',
                                  image: AssetImage(
                                    'assets/baignoire.jpg',
                                  ),
                                  date: '29/04/2021',
                                )
                              ]))
                      )
                    ],
                  )
              ),
            ],
          ),
        ],
      )
    );
  }
}
