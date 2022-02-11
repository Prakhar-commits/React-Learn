import React, { Component } from "react";
import LanguageContext from "./context/LanguageContext";

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <button className="ui button" type="submit">
        <LanguageContext.Consumer>{(value) => (value === "eng" ? "Submit" : "Soumettre")}</LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
