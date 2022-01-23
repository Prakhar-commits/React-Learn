import React from "react";
import { format } from "date-fns";

const VideoBox = ({ video }) => {
  if (!video) {
    return <div></div>;
  } else {
    return (
      <div className="ui card">
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${!video.id.videoId ? video.id : video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
        <div className="content">
          <div className="header">{video.snippet.title}</div>
          <div className="meta">
            {video.snippet.channelTitle} • {format(Date.parse(video.snippet.publishedAt), "MMM dd, yyyy")}
          </div>
          <div className="description">{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};

export default VideoBox;
