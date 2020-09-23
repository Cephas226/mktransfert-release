module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nom: String,
      prenom: String,
      email: String,
      telephone: String,
      pays: String,
      info_complementaire: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
