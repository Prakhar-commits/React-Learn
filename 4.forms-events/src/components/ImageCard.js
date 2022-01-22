import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { span: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10 + 1);
    this.setState({ span });
  };

  render() {
    const { urls, alt_description } = this.props.image;
    return <img className="ui segment" src={urls.small} alt={alt_description} ref={this.imageRef} style={{ gridRowEnd: `span ${this.state.span}` }} />;
  }
}
