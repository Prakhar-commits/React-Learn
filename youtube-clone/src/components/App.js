import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoBox from "./VideoBox";
import useVideos from "../hooks/useVideos";
import "./style.css";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, onSearch] = useVideos();

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <>
      <SearchBar onFromSubmit={onSearch} />
      <div className="ui container grid">
        <div className="eleven wide column">
          <VideoBox video={selectedVideo} />
        </div>
        <div className="five wide column">
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </div>
      </div>
    </>
  );
};

export default App;
