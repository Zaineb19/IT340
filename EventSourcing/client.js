const patientCommand = require('./patientCommand');
const database = require('./database');
const patientQuery = require('./patientQuery');
const patientQueryDAO = require('./patientQueryDAO');
const Patient = require('./patient');



patientCommand.addPatient("John", "Doe");

const patientId = 1;
const patient = patientQuery.getPatient(patientId);

patientCommand.savePatient(1, "John", "Doe");

console.log(patient);
