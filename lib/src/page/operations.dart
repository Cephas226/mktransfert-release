import 'package:flutter/material.dart';
import 'package:mktransfert/core/presentation/widget/customClipper.dart';


List<Operations> operation = [
  Operations(nom_prenom: 'Pratap Kumar',montant:200,transaction_id:'2AD00',telephone:'0639607953'),
  Operations(nom_prenom: 'Jagadeesh',montant:290,transaction_id:'20OA0',telephone:'0539607953'),
  Operations(nom_prenom: 'Srinivas',montant:4200,transaction_id:'1PO00',telephone:'0639617953'),
  Operations(nom_prenom: 'Narendra',montant:1200,transaction_id:'20Qce0',telephone:'0639557953'),
  Operations(nom_prenom: 'Sravan ',montant:900,transaction_id:'2ZKD00',telephone:'0639307953'),
  Operations(nom_prenom: 'Ranganadh',montant:500,transaction_id:'20zd0',telephone:'0639617953'),
  Operations(nom_prenom: 'Karthik',montant:300,transaction_id:'40zd0',telephone:'0539607953'),
  Operations(nom_prenom: 'Saranya',montant:200,transaction_id:'2fe00',telephone:'0632607953'),
  Operations(nom_prenom: 'Mahesh',montant:2300,transaction_id:'2fe00',telephone:'0639607953'),
];

class OperationListPage extends StatefulWidget {
  static final String path = "lib/src/pages/animations/anim5.dart";
  @override
  _OperationListPageState createState() => _OperationListPageState();
}

class _OperationListPageState extends State<OperationListPage> {

  List<String> items;
  GlobalKey<AnimatedListState> _listKey = GlobalKey<AnimatedListState>();

  @override
  void initState() {
    items = ["Kathmandu", "Bhaktapur", "Pokhara", "Mount Everest"];
    super.initState();
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text("Mes transactions"),
      ),
      backgroundColor: Colors.grey.shade300,
      body: AnimatedList(
        key: _listKey,
        initialItemCount: operation.length,
        itemBuilder: (context, index, anim) {
          return SlideTransition(
            position: Tween<Offset>(begin: Offset(1, 0), end: Offset.zero)
                .animate(anim),
           child: Container(
              child: BorderedContainer(
                margin: const EdgeInsets.symmetric(
                  vertical: 4.0,
                  horizontal: 8.0,
                ),
                padding: const EdgeInsets.all(0),
                child: ListTile(
                  leading:Text('${operation[index].transaction_id}') ,
                  title: Text('${operation[index].nom_prenom}',style: TextStyle(fontWeight: FontWeight.w600, fontSize: 15)),
                  subtitle: Text('${operation[index].telephone}'),
                  trailing:Text('${operation[index].montant} €',style: TextStyle(color: Colors.blue,fontWeight: FontWeight.w600, fontSize: 15)),
                ),
              ),
           ),
          );
        },
      ),
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
}
class Operations {
  final String nom_prenom;
  final double montant;
  final String transaction_id;
  final String telephone;
  const Operations({this.transaction_id,this.nom_prenom,this.montant,this.telephone});
}

