import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../API/Unsplash";
import ImagesGrid from "./ImagesGrid";

class App extends Component {
  state = { images: [] };

  onSubmitSearch = async (term) => {
    const Response = await Unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: Response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>Unsplash Image Seach</h1>
        <SearchBar submit={this.onSubmitSearch} />
        <ImagesGrid images={this.state.images} />
      </div>
    );
  }
}

export default App;
