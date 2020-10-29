import axios from "axios";

export const API = "http://swapi.dev/api/";

export const fetchData = async (url) => {
  const oLink = url ? url : API;

  return await axios.get(oLink);
};
