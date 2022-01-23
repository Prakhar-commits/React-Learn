import React from "react";

const VideoItems = ({ video, onVideoSelect }) => {
  return (
    <div
      className="item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img className="ui image" src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
      <div className="content">
        <a className="header">{video.snippet.title}</a>
        <div className="description">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItems;
