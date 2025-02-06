import { apiInstance } from "./apiInstance";

export const FiltersearchMovies = async ({ query }) => {
  try {
    const movies = await apiInstance("search/movie?query=" + query);
    return movies.data.results;
  } catch (error) {
    console.log(error);
  }
};
