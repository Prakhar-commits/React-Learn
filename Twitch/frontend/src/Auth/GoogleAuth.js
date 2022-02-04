import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: "504895575379-71f7pohadkej1q711tdmh255rervphnn.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onClickSignIn = () => {
    this.auth.signIn();
  };

  onClickSignOut = () => {
    this.auth.signOut();
  };

  renderAuthBtn = () => {
    if (this.props.isSignedIn) {
      return (
        <Button color="red" onClick={() => this.auth.signOut()}>
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button color="green" onClick={() => this.auth.signIn()}>
          Sign In
        </Button>
      );
    }
  };

  render() {
    return <>{this.renderAuthBtn()}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
