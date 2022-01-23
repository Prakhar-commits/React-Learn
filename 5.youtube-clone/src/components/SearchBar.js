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
        <div className="ui grid" style={{ justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" className="two wide column">
            <Logo />
          </a>
          <div className="ten wide column">
            <form className="ui form" onSubmit={this.onFormSubmit}>
              <div className="field">
                <input
                  type="text"
                  placeholder="Seach Video"
                  onChange={(e) => {
                    this.setState({ term: e.target.value });
                  }}
                  value={this.state.term}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
