const { connect } = require("mongoose");

const mongoURI = "mongodb+srv://shivkanya:TMQDC0OIgBdd8JcL@cluster0.cpfb1.mongodb.net/brillio-db?retryWrites=true&w=majority";

//  const mongoURI = "mongodb://localhost:27017/brillio-db";

connect(mongoURI)
    .then(() => console.log("MongoDB Connected..."))
    .catch(console.log)