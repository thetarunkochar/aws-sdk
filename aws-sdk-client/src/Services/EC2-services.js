import axios from "axios";
const USER_BASE_URL = "http://localhost:6000";

const headers = {
    "Content-Type": "application/json",
};

class EC2Service {

    createInstance(data) {
        return axios.post(USER_BASE_URL + "/create", data, { headers: headers })
    }
    listInstance() {
        return axios.get(USER_BASE_URL + "/list");
    }
    startInstance(state, id) {
        return axios.get(USER_BASE_URL + '/start/' + id);
    }
    
    stopInstance(id) {
        return axios.get(USER_BASE_URL + '/stop/' x+ id);
    }
    
}

export default new EC2Service();