const { Schema, model } = require("mongoose");

const administerScema = new Schema({
    name : {
        type : Schema.Types.String,
        required : true,
        unique : true
    },
    DOB : {
        type : Schema.Types.String,
        required : true
    },
    vaccine : {
        type : Schema.Types.String,
        required : true
    },
    dateAdministered : {
        type : Schema.Types.String,
        required : true
    },
    brand : {
        type : Schema.Types.String
    },
    hospital : {
        type : Schema.Types.String
    },
    age :{
        type : Schema.Types.Number
    },
    dueDate :{
        type : Schema.Types.String
    },
    complete :{
        type : Schema.Types.String
    }
},{
    versionKey : false
})

const AdministerModel = model("Administer", administerScema)

module.exports = AdministerModel;