import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true, // 쿠키 필요하면 유지
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

// import axios from "axios";

// const api = axios.create({
//   withCredentials: true, // 쿠키 필요하면 유지
// });

// export default api;
