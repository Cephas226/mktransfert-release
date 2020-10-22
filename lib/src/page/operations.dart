import 'package:expandable/expandable.dart';
import 'package:flutter/material.dart';
import 'package:mktransfert/core/presentation/widget/customClipper.dart';


List<Operations> operation = [
  Operations(nom_prenom: 'Pratap Kumar',montant:'200',transaction_id:'2AD00',telephone:'0639607953',isExpanded:true),
  Operations(nom_prenom: 'Jagadeesh',montant:'290',transaction_id:'20OA0',telephone:'0539607953',isExpanded:true),
  Operations(nom_prenom: 'Srinivas',montant:'4200',transaction_id:'1PO00',telephone:'0639617953',isExpanded:true),
  Operations(nom_prenom: 'Narendra',montant:'1200',transaction_id:'20Qce0',telephone:'0639557953',isExpanded:true),
  Operations(nom_prenom: 'Sravan ',montant:'900',transaction_id:'2ZKD00',telephone:'0639307953',isExpanded:true),
  Operations(nom_prenom: 'Ranganadh',montant:'500',transaction_id:'20zd0',telephone:'0639617953',isExpanded:true),
  Operations(nom_prenom: 'Karthik',montant:'300',transaction_id:'40zd0',telephone:'0539607953',isExpanded:true),
  Operations(nom_prenom: 'Saranya',montant:'200',transaction_id:'2fe00',telephone:'0632607953',isExpanded:true),
  Operations(nom_prenom: 'Mahesh',montant:'2300',transaction_id:'2fe00',telephone:'0639607953',isExpanded:true),
];

class OperationListPage extends StatefulWidget {
  static final String path = "lib/src/pages/animations/anim5.dart";
  @override
  _OperationListPageState createState() => _OperationListPageState();
}
List<Operations> generateItems(int numberOfItems) {
  return List.generate(numberOfItems, (int index) {
    return Operations(
      transaction_id: '${operation[index].transaction_id}',
      nom_prenom: '${operation[index].nom_prenom}',
      montant: '${(operation[index].montant)}',
      telephone: '${(operation[index].telephone)}',
      /*expandedValue: 'This is item number $index',*/
    );
  });
}
class _OperationListPageState extends State<OperationListPage> {

  List<String> items;
  GlobalKey<AnimatedListState> _listKey = GlobalKey<AnimatedListState>();

  @override
  void initState() {
    items = ["Kathmandu", "Bhaktapur", "Pokhara", "Mount Everest"];
    super.initState();
  }
  List<Operations> _data = generateItems(8);
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text("Mes transactions"),
        automaticallyImplyLeading: false,
      ),
      backgroundColor: Colors.grey.shade300,
      body: SingleChildScrollView(
        child: Container(

          child:  BorderedContainer(
              margin: const EdgeInsets.symmetric(
                vertical: 4.0,
                horizontal: 8.0,
              ),
            child:_buildPanel()
          ),
        ),
      ),
      // AnimatedList(
      //   key: _listKey,
      //   initialItemCount: operation.length,
      //   itemBuilder: (context, index, anim) {
      //     return SlideTransition(
      //       position: Tween<Offset>(begin: Offset(1, 0), end: Offset.zero)
      //           .animate(anim),
      //      child: Container(
      //         child: BorderedContainer(
      //           margin: const EdgeInsets.symmetric(
      //             vertical: 4.0,
      //             horizontal: 8.0,
      //           ),
      //           padding: const EdgeInsets.all(0),
      //           child:_buildPanel(),
      //           // child: ExpandableNotifier(
      //           //     child: Padding(
      //           //       padding: const EdgeInsets.all(10),
      //           //       child: Card(
      //           //         clipBehavior: Clip.antiAlias,
      //           //         child: Column(
      //           //           children: <Widget>[
      //           //         /*                            SizedBox(
      //           //                                       height: 150,
      //           //                                       child: Container(
      //           //                                         decoration: BoxDecoration(
      //           //                                           color: Colors.orange,
      //           //                                           shape: BoxShape.rectangle,
      //           //                                         ),
      //           //                                         child: ListTile(
      //           //                                           leading:Text('${operation[index].transaction_id}') ,
      //           //                                           title: Text('${operation[index].nom_prenom}',style: TextStyle(fontWeight: FontWeight.w600, fontSize: 15)),
      //           //                                           subtitle: Text('${operation[index].telephone}'),
      //           //                                           trailing:Text('${operation[index].montant} €',style: TextStyle(color: Colors.blue,fontWeight: FontWeight.w600, fontSize: 15)),
      //           //                                         ),
      //           //                                       ),
      //           //                                     ),*/
      //           //             ScrollOnExpand(
      //           //               scrollOnExpand: true,
      //           //               scrollOnCollapse: false,
      //           //               child: ExpandablePanel(
      //           //                 theme: const ExpandableThemeData(
      //           //                   headerAlignment: ExpandablePanelHeaderAlignment.center,
      //           //                   tapBodyToCollapse: true,
      //           //                 ),
      //           //                 header: Padding(
      //           //                     padding: EdgeInsets.all(10),
      //           //                     child: ListTile(
      //           //                       leading:Text('${operation[index].transaction_id}') ,
      //           //                       title: Text('${operation[index].nom_prenom}',style: TextStyle(fontWeight: FontWeight.w600, fontSize: 15)),
      //           //                       subtitle: Text('${operation[index].telephone}'),
      //           //                       trailing:Text('${operation[index].montant} €',style: TextStyle(color: Colors.blue,fontWeight: FontWeight.w600, fontSize: 15)),
      //           //                     )
      //           //                 ),
      //           //                 collapsed: ListTile(
      //           //                   leading:Text('${operation[index].transaction_id}') ,
      //           //                   title: Text('${operation[index].nom_prenom}',style: TextStyle(fontWeight: FontWeight.w600, fontSize: 15)),
      //           //                   subtitle: Text('${operation[index].telephone}'),
      //           //                   trailing:Text('${operation[index].montant} €',style: TextStyle(color: Colors.blue,fontWeight: FontWeight.w600, fontSize: 15)),
      //           //                 ),
      //           //                 builder: (_, collapsed, expanded) {
      //           //                   return Padding(
      //           //                     padding: EdgeInsets.only(left: 10, right: 10, bottom: 10),
      //           //                     child: Expandable(
      //           //                       collapsed: collapsed,
      //           //                       expanded: expanded,
      //           //                       theme: const ExpandableThemeData(crossFadePoint: 0),
      //           //                     ),
      //           //                   );
      //           //                 },
      //           //               ),
      //           //             ),
      //           //           ],
      //           //         ),
      //           //       ),
      //           //     )),
      //           /*child: ListTile(
      //             leading:Text('${operation[index].transaction_id}') ,
      //             title: Text('${operation[index].nom_prenom}',style: TextStyle(fontWeight: FontWeight.w600, fontSize: 15)),
      //             subtitle: Text('${operation[index].telephone}'),
      //             trailing:Text('${operation[index].montant} €',style: TextStyle(color: Colors.blue,fontWeight: FontWeight.w600, fontSize: 15)),
      //           ),*/
      //         ),
      //      ),
      //     );
      //   },
      // ),
/*      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {
          operation.shuffle();
          items.insert(items.length, Operations[0]);
          _listKey.currentState.insertItem(items.length - 1);
          setState(() {});
        },
      ),*/
    );
  }
  Widget _buildPanel() {
    return ExpansionPanelList(
      expansionCallback: (int index, bool isExpanded) {
        setState(() {
          _data[index].isExpanded = !isExpanded;
        });
      },
      children: _data.map<ExpansionPanel>((Operations item) {
        return
          ExpansionPanel(
          headerBuilder: (BuildContext context, bool isExpanded) {
            return ListTile(
              title: Text(item.transaction_id,style: TextStyle(
                  fontWeight: FontWeight.bold)),
              subtitle:Text(item.nom_prenom),
              trailing: Text(item.montant+"€"),
            );
          },
          body: Column(
           children: <Widget>[
             Row(
               mainAxisAlignment: MainAxisAlignment.start,
               children: <Widget>[
                 Row(children: <Widget>[
                   const SizedBox(width: 15.0),
                   Text('Status:',style: TextStyle(
                       fontWeight: FontWeight.bold)),
                   Text('Livré',style: TextStyle(
                       fontWeight: FontWeight.bold,color:Colors.green)),
                 ]),
               ],
             ),
             const SizedBox(height: 10.0),
             Row(
               mainAxisAlignment: MainAxisAlignment.start,
               children: <Widget>[
                 Row(children: <Widget>[
                   const SizedBox(width: 15.0),
                   Text('Date de transaction :',style: TextStyle(
                       fontWeight: FontWeight.bold)),
                   Text('06/09/2020 18:15:15'),
                 ]),
               ],
             ),
             const SizedBox(height: 10.0),
             Row(
               mainAxisAlignment: MainAxisAlignment.start,
               children: <Widget>[
                 Row(children: <Widget>[
                   const SizedBox(width: 15.0),
                   Text('Paiement par :',style: TextStyle(
                       fontWeight: FontWeight.bold)),
                   Text('Carte Bancaire'),
                 ]),
               ],
             ),
             const SizedBox(height: 10.0),
           ],
          ),
          isExpanded: item.isExpanded,
        );
      }).toList(),
    );
  }
}


class Operations {
  final String nom_prenom;
  final String montant;
  final String transaction_id;
  final String telephone;
  bool isExpanded;
  Operations({this.transaction_id,this.nom_prenom,this.montant,this.telephone,this.isExpanded=false});
}

const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

/*class Item {
  String expandedValue;
  String headerValue;
  bool isExpanded;
  Item({this.expandedValue, this.headerValue,this.isExpanded=false});
}*/
