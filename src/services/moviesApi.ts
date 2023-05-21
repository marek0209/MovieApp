import axios from "axios";
import { Movie } from "../types";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default async function fetchMovieList(): Promise<Movie[]> {
  try {
    const response = await instance.get("/topmovies/limit=100/json");
    const movieList = response.data.feed.entry;
    return movieList;
  } catch (error) {
    throw new Error("Failed to fetch data from api");
    return [];
  }
}
