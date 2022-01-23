import axios from "axios";

const api_key = "AIzaSyDU9mX-kdr7V9pfFjg8aayb8JbL9oohi_8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: api_key,
  },
  headers: {},
});
