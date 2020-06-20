import axios from "axios";

const baseURL = "http://localhost:8080/users";

export const sendRequest = async (id) => {
  const response = await axios.get(`${baseURL}/${id}`);
  return response.data;
};
