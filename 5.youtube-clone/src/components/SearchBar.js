import React, { Component } from "react";
import Logo from "./Logo";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFromSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <div className="ui grid" style={{ justifyContent: "space-evenly", alignItems: "center" }}>
          <a href="/" className="two wide column">
            <Logo />
          </a>
          <div className="seven wide column">
            <form className="ui form" onSubmit={this.onFormSubmit}>
              <div className="field ui grid">
                <input
                  type="text"
                  placeholder="Seach Video"
                  onChange={(e) => {
                    this.setState({ term: e.target.value });
                  }}
                  value={this.state.term}
                />
                <button className="ui icon button">
                  <i class="search icon"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
