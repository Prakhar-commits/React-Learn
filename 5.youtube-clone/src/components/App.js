import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../API/Youtube";
import VideoList from "./VideoList";
import VideoBox from "./VideoBox";

class App extends Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  mostPopularVideos = async () => {
    const mostPopVideos = await Youtube.get("/videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "IN",
      },
    });
    this.setState({ videos: mostPopVideos.data.items });
  };

  componentDidMount() {
    document.getElementById("root").addEventListener("load", this.mostPopularVideos());
  }

  render() {
    return (
      <>
        <SearchBar onFromSubmit={this.onTermSubmit} />
        <div className="ui container">
          <VideoBox video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        </div>
      </>
    );
  }
}

export default App;
