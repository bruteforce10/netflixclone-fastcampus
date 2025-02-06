import { apiInstance } from "./apiInstance";

export const getVideoUrl = async ({ movie_id }) => {
  const url = await apiInstance.get(
    `${import.meta.env.VITE_BASE_URL}/movie/${movie_id}/videos`
  );

  return url.data.results[0].key;
};
