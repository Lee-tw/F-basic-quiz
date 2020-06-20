import axios from "axios";

const baseURL = "http://localhost:8080/users";

export const sendRequestForUser = async (id) => {
  const response = await axios.get(`${baseURL}/${id}`);
  return response.data;
};

export const sendRequestForEducations = async (id) => {
  const response = await axios.get(`${baseURL}/${id}/educations`);
  return response.data;
};
