import axios from "axios";

const baseURL = "http://localhost:4000";

export const getSuperHeroes = () => {
  return axios.get(`${baseURL}/superheroes`);
};

export const getSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1]; // queryKey is array of values and first index have id
  return axios.get(`${baseURL}/superheroes/${heroId}`);
};

export const addSuperHeroes = (heroData) => {
  console.log('heroData', heroData)
  return axios.post(`${baseURL}/superheroes`, heroData);
};