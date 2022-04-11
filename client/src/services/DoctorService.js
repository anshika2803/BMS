import axios from "axios";

const url ="http://localhost:8080/doctor/doctor";
class DoctorService {

    getDoctors(){
        return axios.get(url);
    }
    createDoctor(doctor){
        return axios.post(url,doctor);
    }
    getDoctorById(doctorId){
        return axios.get(url + '/' + doctorId);
    }

    updateDoctor(doctor, doctorId){
        return axios.put(url + '/' + doctorId, doctor);
    }
    deleteDoctor(doctorId){
        return axios.delete(url + '/' + doctorId);
    }
}

export default new DoctorService()
