import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../API/Unsplash";

class App extends Component {
  state = { images: [] };

  onSubmitSearch = async (term) => {
    const Response = await Unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    console.log(Response.data.results);
    this.setState({ images: Response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>Unsplash Image Seach</h1>
        <SearchBar submit={this.onSubmitSearch} />
        <h3> Found: {this.state.images.length} results </h3>
      </div>
    );
  }
}

export default App;
