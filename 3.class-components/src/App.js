import React, { Component } from "react";
import ShowSeasons from "./ShowSeasons";
import Spinner from "./Spinner";

export class App extends Component {
  // Traditional way of init state
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errormsg: "" };
  // }

  // Shorthand to init state
  state = { lat: null, errormsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errormsg: error.message })
    );
  }

  renderContent() {
    if (this.state.errormsg && !this.state.lat) {
      return <h1>error : {this.state.errormsg}</h1>;
    }
    if (this.state.lat && !this.state.errormsg) {
      return <ShowSeasons lat={this.state.lat} />;
    } else {
      return <Spinner message="Please accept Location Request!!!" />;
    }
  }

  render() {
    return <div className="border">{this.renderContent()}</div>;
  }
}

export default App;
