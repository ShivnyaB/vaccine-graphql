const { Schema, model } = require("mongoose");

const patientSchema = new Schema({
    name : {
        type : Schema.Types.String,
        required : true,
        unique : true
    },
    DOB : {
        type : Schema.Types.String,
        required : true
    },
    gender : {
        type : Schema.Types.String,
        required : true
    },
    POB : {
        type : Schema.Types.String,
        required : true
    },
    BloodGrp : {
        type : Schema.Types.String,
        required : true
    },
    height : {
        type : Schema.Types.Number
    },
    weight : {
        type : Schema.Types.Number
    }
},{
    versionKey : false
})

const PatientModel = model("Patient", patientSchema)

module.exports = PatientModel;