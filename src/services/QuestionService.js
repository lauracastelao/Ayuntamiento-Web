
import axios from 'axios';
const LETTER_API_BASE_URL = 'http://localhost:8080/api/questions';

class QuestionService {

    getQuestions() {
        return axios.get(LETTER_API_BASE_URL)
    }
}
export default new QuestionService();
//  Aqui le pido a axios que haga la llamada a mi api de java 