import React from "react";

const VideoBox = ({ video }) => {
  if (!video) {
    return <div></div>;
  } else {
    return (
      <div className="ui segment">
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId || video.id}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="">{video.snippet.title}</h3>
        <div className="">{video.snippet.description}</div>
      </div>
    );
  }
};

export default VideoBox;
