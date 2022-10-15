import axios from 'axios';

export default class Letterservice{
    url = "http://localhost:8080/api/letters";
    getAll() {
     
        return axios.get(this.url + "all");

    }
}
// Aqui le pido a axios que haga la llamada a mi api de java 