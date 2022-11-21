const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB CONNECTION SUCCESSFUL"))
    .catch((error) => {
      console.log(error.message);
      console.log("DB CONNECTION SUCCESSFUL");
    });
};
