const mongoUrl = "mongodb://localhost:27017/newSigninSignupdatabase";
const mongoose = require("mongoose");

const mongoConnection = () => {
  mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(`Error connecting to database: ${err}`));
};
