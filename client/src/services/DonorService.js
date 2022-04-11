import axios from "axios";

const url ="http://localhost:8080/donor/donor";
class DonorService {

    getDonors(){
        return axios.get(url);
    }
    createDonor(donor){
        return axios.post(url,donor);
    }
    getDonorById(donorId){
        return axios.get(url + '/' + donorId);
    }

    updateDonor(donor, donorId){
        return axios.put(url + '/' + donorId, donor);
    }
    deleteDonor(donorId){
        return axios.delete(url + '/' + donorId);
    }
}

export default new DonorService()
