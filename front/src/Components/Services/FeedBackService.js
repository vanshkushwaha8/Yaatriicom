import axios from 'axios';
const TOUR_API = "http://localhost:9090/yatrii/feedback";

class FeedBackService {
    createFeedback(feedback, userId) {
        return axios.post(TOUR_API + '/create/' + userId, feedback);
    }

    getAllFeedBacks() {
        return axios.get(TOUR_API + '/getall');
    }
}

export default new FeedBackService;
