import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errormsg: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errormsg: error.message });
      }
    );
  }
  render() {
    if (this.state.errormsg && !this.state.lat) {
      return <h1>error : {this.state.errormsg}</h1>;
    }
    if (this.state.lat && !this.state.errormsg) {
      return (
        <>
          <h1>Latitide : {this.state.lat}</h1>
          <h1>{new Date().getMonth()}</h1>
        </>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default App;
