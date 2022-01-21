import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID QQrlP4V304BzEpOcZ0dZC6-xyKL3CqweM-5vMirIbeA",
  },
});
