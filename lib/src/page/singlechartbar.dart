import 'package:flutter/material.dart';

import 'package:charts_flutter/flutter.dart' as charts;
import 'package:mktransfert/core/presentation/res/assets.dart';
import 'dart:math';
import 'package:mktransfert/model/appdownloadsmodel.dart';
import 'package:mktransfert/src/page/test.dart';
import 'package:mktransfert/src/utils/oval-right-clipper.dart';

import 'dashboard.dart';
import 'groupedchart.dart';

class SingleChartBar extends StatefulWidget {
  SingleChartBar({Key key}) : super(key: key);

  @override
  _SingleChartBarState createState() => _SingleChartBarState();
}

class _SingleChartBarState extends State<SingleChartBar> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Bar Graph Demo',
      debugShowCheckedModeBanner: false,
      home: BarGraphDemo(),
      theme: ThemeData(
        primaryColor: Colors.blue,
      ),
    );
  }
}

class BarGraphDemo extends StatefulWidget {
  BarGraphDemo({Key key}) : super(key: key);

  @override
  _BarGraphDemoState createState() => _BarGraphDemoState();
}

class _BarGraphDemoState extends State<BarGraphDemo> {
  List<AppDownloads> data;
  final GlobalKey<ScaffoldState> _key = GlobalKey<ScaffoldState>();
  final TextStyle whiteText = TextStyle(color: Colors.white);

  @override
  void initState() {
    super.initState();

    data = [
      AppDownloads(
        year: 'Janvier',
        count: 178.1,
        barColor: charts.ColorUtil.fromDartColor(Colors.red),
      ),
      AppDownloads(
        year: 'Fevrier',
        count: 205.4,
        barColor: charts.ColorUtil.fromDartColor(Colors.blue),
      ),
      AppDownloads(
        year: 'Mars',
        count: 258.2,
        barColor: charts.ColorUtil.fromDartColor(Colors.green),
      ),
    ];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
    /*  appBar: AppBar(
        title: Text('Bar Graph Demo'),
      ),*/
      key: _key,
      appBar: AppBar(
        title: Text('Accueil'),
        automaticallyImplyLeading: false,
        leading: IconButton(
          icon: Icon(Icons.menu),
          onPressed: () {
            _key.currentState.openDrawer();
          },
        ),
      ),
      drawer: _buildDrawer(),
      backgroundColor: Colors.white,
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            Container(
              padding: const EdgeInsets.fromLTRB(0, 18.0, 0, 32.0),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(20.0),
                  bottomRight: Radius.circular(20.0),
                ),
                color: Colors.blue,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  ListTile(
                    title: Text(
                      "Tableau de bord",
                      style: whiteText.copyWith(
                          fontWeight: FontWeight.bold, fontSize: 20.0),
                    ),
                    trailing: CircleAvatar(
                      radius: 25.0,
                      backgroundImage: NetworkImage('https://firebasestorage.googleapis.com/v0/b/mktransfert-d6990.appspot.com/o/Me.png?alt=media&token=044e199c-908b-4d22-9a2c-a720e4a6c6f3'),
                    ),
                  ),
                  const SizedBox(height: 10.0),
                  Padding(
                    padding: const EdgeInsets.only(left: 16.0),
                    child: Text(
                      "Cephas ZOUBGA",
                      style: whiteText.copyWith(
                        fontSize: 18.0,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                  const SizedBox(height: 5.0),
                  Padding(
                    padding: const EdgeInsets.only(left: 16.0),
                    child: Text(
                      "cephaszoubga@gmail.com",
                      style: whiteText,
                    ),
                  ),
                ],
              ),
            ),
            Container(
              height: 200,
              width: double.infinity,
              padding: const EdgeInsets.all(12),
              child: Card(
                child: MyBarChart(data),
              ),
            ),
            Container(
              height: 200,
              width: double.infinity,
              padding: const EdgeInsets.all(12),
              child: Card(
                child: DonutAutoLabelChart.withSampleData(),
              ),
            ),
            Container(
              height: 200,
              width: double.infinity,
              padding: const EdgeInsets.all(12),
              child: Card(
                child: GroupedFillColorBarChart.withSampleData(),
              ),
            ),
          ],
        ),
      ),
    );
  }
}


class MyBarChart extends StatelessWidget {
  final List<AppDownloads> data;

  MyBarChart(this.data);

  @override
  Widget build(BuildContext context) {
    List<charts.Series<AppDownloads, String>> series = [
      charts.Series(
          id: 'AppDownloads',
          data: data,
          domainFn: (AppDownloads downloads, _) => downloads.year,
          measureFn: (AppDownloads downloads, _) => downloads.count,
          colorFn: (AppDownloads downloads, _) => downloads.barColor)
    ];

    return charts.BarChart(
      series,
      animate: true,
      barGroupingType: charts.BarGroupingType.groupedStacked,
    );
  }
}


_buildDrawer() {

  final String image = images[0];
  final Color primary = Colors.white;
  final Color active = Colors.grey.shade800;

  return ClipPath(
    clipper: OvalRightBorderClipper(),
    child: Drawer(
      child: Container(
        padding: const EdgeInsets.only(left: 16.0, right: 40),
        decoration: BoxDecoration(
            color: primary, boxShadow: [BoxShadow(color: Colors.black45)]),
        width: 300,
        child: SafeArea(
          child: SingleChildScrollView(
            child: Column(
              children: <Widget>[
                Container(
                  alignment: Alignment.centerRight,
                  child: IconButton(
                    icon: Icon(
                      Icons.power_settings_new,
                      color: active,
                    ),
                    onPressed: () {},
                  ),
                ),
                Container(
                  height: 90,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: LinearGradient(
                          colors: [Colors.blue, Colors.deepOrange])
                  ),
                  child: CircleAvatar(
                    radius: 40,
                    backgroundImage: NetworkImage('https://firebasestorage.googleapis.com/v0/b/mktransfert-d6990.appspot.com/o/Me.png?alt=media&token=044e199c-908b-4d22-9a2c-a720e4a6c6f3'),
                  ),
                ),
                SizedBox(height: 5.0),
                Text(
                  "Cephas ZOUBGA",
                  style: TextStyle(
                      color: Colors.black,
                      fontSize: 18.0,
                      fontWeight: FontWeight.w600),
                ),
                Text(
                  "cephaszoubga@gmail.com",
                  style: TextStyle(color: active, fontSize: 16.0),
                ),
                SizedBox(height: 30.0),
                _buildRow(Icons.home, "Accueil"),
                _buildDivider(),
                _buildRow(Icons.person_pin, "Mon profil"),
                /*     _buildDivider(),
                _buildRow(Icons.message, "Messages", showBadge: true),*/
                _buildDivider(),
                _buildRow(Icons.notifications, "Notifications",
                    showBadge: true),
                _buildDivider(),
                _buildRow(Icons.settings, "Reglages"),
                _buildDivider(),
                _buildRow(Icons.email, "Nous contacter"),
                _buildDivider(),
                _buildRow(Icons.info_outline, "Aide"),
                _buildDivider(),
              ],
            ),
          ),
        ),
      ),
    ),
  );
}
Divider _buildDivider() {
  final Color divider = Colors.grey.shade600;
  return Divider(
    color: divider,
  );
}

Widget _buildRow(IconData icon,
    String title, {bool showBadge = false}) {
  final TextStyle tStyle = TextStyle(color: active, fontSize: 16.0);

  return Container(
    padding: const EdgeInsets.symmetric(vertical: 5.0),
    child: Row(children: [
      Icon(
        icon,
        color: active,
      ),
      SizedBox(width: 10.0),
      Text(
        title,
        style: tStyle,
      ),
      Spacer(),
      if (showBadge)
        Material(
          color: Colors.deepOrange,
          elevation: 5.0,
          shadowColor: Colors.red,
          borderRadius: BorderRadius.circular(5.0),
          child: Container(
            width: 25,
            height: 25,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: Colors.deepOrange,
              borderRadius: BorderRadius.circular(5.0),
            ),
            child: Text(
              "10+",
              style: TextStyle(
                  color: Colors.white,
                  fontSize: 12.0,
                  fontWeight: FontWeight.bold),
            ),
          ),
        ),
    ]),
  );
}
