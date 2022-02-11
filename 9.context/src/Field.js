import React, { Component } from "react";
import LanguageContext from "./context/LanguageContext";

export class Field extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className="field">
        <label>{this.context === "eng" ? "Name" : "Nom"}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
