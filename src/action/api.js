import axios from "axios";

const baseUrl = "https://localhost:44370/api/"



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Product(url = baseUrl + 'sanphams') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}