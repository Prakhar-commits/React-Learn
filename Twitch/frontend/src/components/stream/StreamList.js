import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams, deleteStream } from "../../actions";
import { Card, Button, Header, Image, Confirm } from "semantic-ui-react";
import { Link } from "react-router-dom";
class StreamList extends Component {
  state = { open: false };

  componentDidMount() {
    this.props.fetchStreams();
  }

  delete = ({ id }) => {
    this.props.deleteStream(id);
    this.setState({ open: false });
  };

  renderStreams = () => {
    return this.props.streams.map((stream) => {
      return (
        <Card key={stream.id}>
          <Image as={Link} to={`/stream/show/${stream.id}`} src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Card.Content as={Link} to={`/stream/show/${stream.id}`}>
            <Card.Header>{stream.title}</Card.Header>
            <Card.Description>{stream.description}</Card.Description>
          </Card.Content>
          {this.props.currentUserId === stream.userId ? (
            <Card.Content extra>
              <div className="ui two buttons">
                <Button as={Link} to={`/stream/edit/${stream.id}`} basic color="green">
                  Edit
                </Button>
                <Button basic color="red" onClick={() => this.setState({ open: true })}>
                  Delete
                </Button>
                <Confirm size="mini" open={this.state.open} onCancel={() => this.setState({ open: false })} onConfirm={() => this.delete(stream)} />
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

export default connect(mapStateToProps, { fetchStreams, deleteStream })(StreamList);
