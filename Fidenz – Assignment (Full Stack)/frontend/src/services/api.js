import axios from 'axios';

export const fetchWeatherData = async (token) => {
  return axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/api/weather`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};
