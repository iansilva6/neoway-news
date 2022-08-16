import axios from "axios";
import { Filter } from "../interfaces";

const apiKey = `&apikey=${process.env.REACT_APP_API_KEY}`;

export const api = axios.create({
  baseURL: 'https://newsapi.org/v2/everything',
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function getNews(param: Filter) {
  try {
    const res = await api.get(`?q=${param.filterBy}&sortBy=${param.orderBy}${apiKey}`);

    return res.data;
  } catch (err) {
    throw err;
  }
};
