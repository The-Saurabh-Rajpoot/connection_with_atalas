const mongoUrl = `mongodb+srv://saurabh941193:U0lawKv69vSI6eHO@cluster0.wfhwzur.mongodb.net/InstaData?retryWrites=true&w=majority`
const mongoose = require("mongoose");

const mongoConnection = () => {
  mongoose.connect(mongoUrl, { useNewUrlParser: true,useUnifiedTopology:true})
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(`Error connecting to database: ${err}`));
};
module.exports=mongoConnection;
