import axios from "axios";
const service = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/photos"
});

export default {
  getAllProducts: () => {
    return service
      .get()
      .then(res => res.data)
      .catch(err => err);
  }
};
