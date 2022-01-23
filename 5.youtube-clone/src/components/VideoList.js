import React from "react";
import VideoItems from "./VideoItems";

const VideoList = ({ videos, onVideoSelect }) => {
  const video_list = videos.map((video) => {
    return <VideoItems key={video.etag} video={video} onVideoSelect={onVideoSelect} />;
  });

  return <div className="ui relaxed divided list">{video_list}</div>;
};

export default VideoList;
