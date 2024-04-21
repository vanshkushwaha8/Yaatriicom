import axios from 'axios';

const TOUR_API = "http://localhost:9090/yatrii/user";

class UserService {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: TOUR_API
        });
    }

    createUser(user) {
        return this.axiosInstance.post('/signUp', user);
    }
}

const userService = new UserService();

export default userService;
