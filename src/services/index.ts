import axios from "axios";

const apiKey = `&apikey=${process.env.REACT_APP_API_KEY}`

export const api = axios.create({
  baseURL: 'https://newsapi.org/v2/everything',
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function getNews(category:String) {
  try {
    const res = await api.get(`?q=${category}&sortBy=publishedAt${apiKey}`);

    return res.data;
  } catch (err) {
    throw err;
  }
}
