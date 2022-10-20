

import axios from 'axios';
const LETTER_API_BASE_URL = 'http://localhost:8080/api/letters';

class LetterService {

    getLetters() {
        return axios.get(LETTER_API_BASE_URL)
    }
}
export default new LetterService();
//  Aqui le pido a axios que haga la llamada a mi api de java 