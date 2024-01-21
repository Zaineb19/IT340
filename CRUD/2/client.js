const patientService = require('./patientService');

patientService.addPatient(123456, 'Doe', 'John');

const patientsList = patientService.getPatientList();

