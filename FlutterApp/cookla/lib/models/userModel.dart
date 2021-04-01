class User {
  String id;
  String fullName;
  String gender;
  String dateOfBirth;
  String email;
  String phone;
  String password;
  String nationality;
  String photo;



  User(Map map,
      {this.fullName,
      this.gender,
      this.dateOfBirth,
      this.email,
      this.phone,
      this.password,
      this.nationality,
      this.photo
      });

  User.fromMap(Map snapshot,String id) :
        id = id ?? '',
        fullName = snapshot['fullName'] ?? '',
        gender = snapshot['gender'] ?? '',
        dateOfBirth = snapshot['dateOfBirth'] ?? '',
        email = snapshot['email'] ?? '',
        phone = snapshot['phone'] ?? '',
        password = snapshot['password'] ?? '',
        nationality = snapshot['nationality'] ?? '',
        photo = snapshot['photo'] ?? '';

  toJson() {
    return {
      "id": id,
      "fullName": fullName,
      "gender": gender,
      "dateOfBirth": dateOfBirth,
      "phone": phone,
      "email": email,
      "password": password,
      "nationality": nationality,
      "photo": photo,
    };
  }
}