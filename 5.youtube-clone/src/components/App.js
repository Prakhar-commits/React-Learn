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
    console.log(response.data);
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log("Vidio:", video);
  };

  render() {
    return (
      <div className="ui container">
        <h1>Youtube Clone</h1>
        <SearchBar onFromSubmit={this.onTermSubmit} />
        <VideoBox video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;
