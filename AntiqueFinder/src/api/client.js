import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://localhost:5000/projects",
});



export default apiClient;
