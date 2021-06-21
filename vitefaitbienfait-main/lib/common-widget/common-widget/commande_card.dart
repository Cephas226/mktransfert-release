import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:getx_app/common-widget/common-widget/round_icon_button.dart';
import 'package:getx_app/pages/commandeDetails/commandeDetails_page.dart';
import 'package:getx_app/utilities/constants.dart';
import 'package:get/get.dart';
class CommandeCard extends StatelessWidget {
  final Color color;
  final String name;
  final String date;
  final ImageProvider<dynamic> image;

  const CommandeCard({
    this.color,
    this.name,
    this.date,
    this.image,
  });

  @override
  Widget build(BuildContext context) {
    return
      Card(
      elevation: 5,
      color: color,
      shape: kShape,
      margin: EdgeInsets.only(left: 20,right: 20),
      child:
      Container(
        child: Row(
          children: <Widget>[
            Expanded(
              child: Container(
                margin: EdgeInsets.all(10),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(10.0),
                  child: Image(
                    image: image,
                    height: 90.0,
                  ),
                ),
              ),
            ),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                InkWell(
                  onTap: () {
                    Get.to(CommandeDetailsPage());
                  },
                  child: Text(
                    name,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),

                  SizedBox(height: 20),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>[
                      FaIcon(
                        FontAwesomeIcons.calendarCheck,
                        color: kSmallDescColor,
                        size: 15,
                      ),
                      SizedBox(
                        width: 2,
                      ),
                      Text(date.toString(), style: kSmallDescStyle),
                      SizedBox(
                        width: 10,
                      ),
                      SizedBox(
                        width: 2,
                      ),
                    ],
                  ),
                ],
              ),
            ),
            Expanded(
              child: Container(
                margin: EdgeInsets.all(10),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: <Widget>[
                    RoundIconButton(
                      icon: FontAwesomeIcons.trash,
                      size: 40,
                      color: Colors.transparent,
                    ),
                    SizedBox(
                      height: 10,
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
