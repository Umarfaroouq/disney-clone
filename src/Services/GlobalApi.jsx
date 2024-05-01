import axios from "axios";

// Create an Axios instance with the base URL from environment variables
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

// Function to fetch trending videos
const getTrendingVideos = () => {
  return axiosInstance.get("/trending/all/day", {
    // Pass API key as a query parameter
    params: {
      api_key: import.meta.env.VITE_API_KEY
    }
  });
};

// Function to fetch movies by genre ID
const getMovieByGenreId = (id) => {
  return axiosInstance.get("/discover/movie", {
    // Pass API key and genre ID as query parameters
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      with_genres: id
    }
  });
};

// Export functions to be used in other parts of the application
export default {
  getTrendingVideos,
  getMovieByGenreId
};
