import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://myseo-blog-backend.herokuapp.com/api",
});
