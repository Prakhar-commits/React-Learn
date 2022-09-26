import React, { Component } from "react";
import Form from "./Form";
import LanguageContext from "./context/LanguageContext";

class App extends Component {
  state = { language: "eng" };

  render() {
    return (
      <div className="container ui">
        <h2 className="ui header">
          Select language: &emsp;
          <i className="flag us" onClick={() => this.setState({ language: "eng" })}></i>
          <i className="flag fr" onClick={() => this.setState({ language: "fr" })}></i>
        </h2>

        <LanguageContext.Provider value={this.state.language}>
          <Form />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
