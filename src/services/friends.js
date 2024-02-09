import axios from "axios";

const baseURL = "http://localhost:4000";

export const getFriends = () => {
  return axios.get(`${baseURL}/friends`);
};