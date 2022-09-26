import React, { Component } from "react";
import { connect } from "react-redux";

class Author extends Component {
  render() {
    const user = this.props.user;
    if (!user) {
      return null;
    }
    return <div>{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(Author);
