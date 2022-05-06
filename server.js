const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const { v4 } = require("uuid");
const app = express();
require("./db")
const PatientModel = require("./Model/patient.model");
 const AdministerModel = require("./Model/administer.model");
const path =require('path')

app.use(cors());

const patients = [];

const schema = buildSchema(`
    type Query {
        hello : String!
        patients : [ Patient! ]!
        administers : [Administer !]!
        patientName(search : FindPatientInput) : Patient!
    }
    type Mutation {
        createPatient(data : CreatePatientInput) : Patient!
        createAdminister(data : CreateAdministerInput) : Administer!
    }
    input FindPatientInput{
        name : String!
    }
    input CreateAdministerInput{
      name : String!
      DOB : String!
      vaccine : String!
      dateAdministered : String!
      brand : String
      hospital : String
      age : Int
      dueDate : String
      complete : String
    }
    input CreatePatientInput {
        name : String!
        DOB : String!
        gender : String!
        POB : String!
        BloodGrp : String!
        height : Int
        weight : Int
    }
    type Patient {
        id : ID!
        name : String!
        DOB : String!
        gender : String!
        POB : String!
        BloodGrp : String!
        height : Int
        weight : Int
    }
    type Administer{
        id : ID!
        name : String!
        age : Int
        DOB : String!
        dueDate : String
        vaccine : String!
        dateAdministered : String!
        brand : String
        hospital : String
        complete : String
    }
`)

const rootValue = {
    hello: () => "World",
    patients: () => PatientModel.find(),
    administers : () => AdministerModel.find(),
    createPatient: async (args) => {
    const newPatient = new PatientModel(args.data);
        
        const createdPatient = await newPatient.save()
        console.log(createdPatient);
        return createdPatient;
    
    },
    createAdminister : async (args) =>{
        
    const newAdminister = new AdministerModel(args.data);
     console.log(newAdminister);
    const createdAdminister = await newAdminister.save()
    return createdAdminister;
    },
    patientName: async(args) => {
        const { name } = args.search
        const foundPatient = await PatientModel.findOne({name})
        return foundPatient;
    }
}

app.use("/gq", graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}))

// app.use(express.static('public'));

app.get('/' , (req,res) => {
    res.send("success")
});


const PORT = process.env.PORT || 9090

app.listen(PORT, () => console.log("Server started at PORT :" , PORT))


