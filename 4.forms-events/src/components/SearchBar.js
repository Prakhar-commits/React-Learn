import React, { Component } from "react";

export class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.submit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Search Image</label>
          <input
            placeholder="Search Image"
            type="text"
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
