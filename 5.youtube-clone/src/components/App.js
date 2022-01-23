import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../API/Youtube";
import VideoList from "./VideoList";
import VideoBox from "./VideoBox";
import "./style.css";

class App extends Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  mostPopularVideos = async () => {
    const mostPopVideos = await Youtube.get("/videos", {
      params: {
        chart: "mostPopular",
        regionCode: "IN",
      },
    });
    this.setState({ videos: mostPopVideos.data.items, selectedVideo: mostPopVideos.data.items[0] });
  };

  componentDidMount() {
    document.getElementById("root").addEventListener("load", this.mostPopularVideos());
  }

  render() {
    return (
      <>
        <SearchBar onFromSubmit={this.onTermSubmit} />
        <div className="ui container grid">
          <div className="eleven wide column">
            <VideoBox video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
