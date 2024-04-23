import axios from "axios";

const API_KEY = "0b95afb3acd6b44830a1fed30276752a";
const BASE_URL = "https://api.themoviedb.org/3";

interface SearchParams {
  title?: string;
  year?: string;
}

export const searchMovies = async (params: SearchParams) => {
  try {
    const { title, year } = params;

    let queryString = `api_key=${API_KEY}`;
    if (title) queryString += `&query=${encodeURIComponent(title)}`;
    if (year)
      queryString += `&primary_release_year=${encodeURIComponent(year)}`;

    const response = await axios.get(`${BASE_URL}/search/movie?${queryString}`);
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch movies");
  }
};

export const getMovieDetails = async (movieId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movie details");
  }
};

export const getMovieCredits = async (movieId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    throw new Error("Failed to fetch movie credits");
  }
};

export const getMovieImageUrl = (posterPath: string) => {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};
