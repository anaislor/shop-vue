import axios from "axios";
const service = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/photos"
});

export default {
  getAllProducts: () => {
    return service.get(res => res.data).catch(err => err);
  }
};
