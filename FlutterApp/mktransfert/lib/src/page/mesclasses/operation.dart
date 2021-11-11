class Operations {
  int id;
  String receiver_first_name;
  String receiver_last_name;
  String transac_status;
  String transac_num;
  String transac_date;
  String transac_devise_sender;
  double  transac_montant_send;


  Operations(
      {this.id,
      this.receiver_first_name,
      this.receiver_last_name,
      this.transac_status,
      this.transac_num,
      this.transac_date,
      this.transac_devise_sender,
      this.transac_montant_send
      });

  Operations.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    receiver_first_name = json['receiver_first_name'];
    receiver_last_name = json['receiver_last_name'];
    transac_status = json['transac_status'];
    transac_num = json['transac_num'];
    transac_date = json['transac_date'];
    transac_devise_sender = json['transac_devise_sender'];
    transac_montant_send = json['transac_montant_send'];
  }
}

