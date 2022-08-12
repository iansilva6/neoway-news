import axios from "axios";

export const api = axios.create({
  baseURL: 'https://newsapi.org/v2/everything',
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function getNews(category:String) {
  try {
    const res = await api.get(`?q=${category}`);

    return res.data;
  } catch (err) {
    throw err;
  }
}
