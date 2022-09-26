import { useState, useEffect } from "react";
import Youtube from "../API/Youtube";

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  const onSearch = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  useEffect(() => {
    // self Calling arrow function
    (async () => {
      const mostPopVideos = await Youtube.get("/videos", {
        params: {
          chart: "mostPopular",
          regionCode: "IN",
        },
      });
      setVideos(mostPopVideos.data.items);
    })();
  }, []);

  return [videos, onSearch];
};

export default useVideos;
