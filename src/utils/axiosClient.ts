import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5001/',
  headers: {
    // Overwrite Axios's automatically set Content-Type
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
