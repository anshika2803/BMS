import axios from "axios";

const url ="http://localhost:8080/patient/patient";
class PatientService {

    getPatients(){
        return axios.get(url);
    }
    createPatient(patient){
        return axios.post(url,patient);
    }
    getPatientById(patientId){
        return axios.get(url + '/' + patientId);
    }

    updatePatient(patient, patientId){
        return axios.put(url + '/' + patientId, patient);
    }
    deletePatient(patientId){
        return axios.delete(url + '/' + patientId);
    }
}

export default new PatientService()
