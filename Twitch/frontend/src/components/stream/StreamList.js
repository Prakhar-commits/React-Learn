import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Card, Button, Header, Image } from "semantic-ui-react";
class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderStreams = () => {
    return this.props.streams.map((stream) => {
      return (
        <Card key={stream.id}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Card.Content>
            <Card.Header>{stream.title}</Card.Header>
            <Card.Description>{stream.description}</Card.Description>
          </Card.Content>
          {this.props.currentUserId === stream.userId ? (
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Edit
                </Button>
                <Button basic color="red">
                  Delete
                </Button>
              </div>
            </Card.Content>
          ) : null}
        </Card>
      );
    });
  };

  render() {
    return (
      <>
        <Header textAlign="center" dividing size="huge">
          Streams{" "}
        </Header>
        <Card.Group centered>{this.renderStreams()}</Card.Group>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
