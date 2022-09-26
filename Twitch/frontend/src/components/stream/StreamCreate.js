import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";
import { createStream } from "../../actions";
import StreamForm from "../form/StreamForm";

class StreamCreate extends Component {
  render() {
    const { createStream } = this.props;
    return (
      <>
        <Header as="h2">Create A New Stream</Header>
        <StreamForm onSubmit={(data) => createStream(data)} />
      </>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
