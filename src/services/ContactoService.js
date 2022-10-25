import axios from "axios";
const LETTER_API_BASE_URL = "http://localhost:8080/api/letters";

class ContactoService {
  getContacto() {
    return axios.get(LETTER_API_BASE_URL);
  }

  addContacto() {
    return axios.post(LETTER_API_BASE_URL);
  }

  storeContacto() {
    return axios.post(LETTER_API_BASE_URL);
  }

  updateContacto() {
    return axios.post(LETTER_API_BASE_URL);
  }
}
export default new ContactoService();

