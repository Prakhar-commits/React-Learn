import React, { useState } from "react";
import Logo from "./Logo";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    props.onFromSubmit(term);
  };

  return (
    <div className="ui segment">
      <div className="ui grid" style={{ justifyContent: "space-evenly", alignItems: "center" }}>
        <a href="/" className="two wide column">
          <Logo />
        </a>
        <div className="seven wide column">
          <form className="ui form" onSubmit={onFormSubmit}>
            <div className="field ui grid">
              <input
                type="text"
                placeholder="Seach Video"
                onChange={(e) => {
                  setTerm(e.target.value);
                }}
                value={term}
              />
              <button className="ui icon button">
                <i className="search icon"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
