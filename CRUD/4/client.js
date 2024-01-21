const PatientService = require('./patientService');

PatientService.addPatient('John', 'Doe');

const patient = PatientService.getPatient(1);

console.log(patient);
