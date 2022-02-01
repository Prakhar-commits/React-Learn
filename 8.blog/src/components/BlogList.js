import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../actions";
import Author from "./Author";

class BlogList extends Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  renderBlogs() {
    return this.props.blogs.map((blog) => {
      return (
        <div className="item" key={blog.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h3 className="ui header">{blog.title}</h3>
              <p>{blog.body}</p>
              <h4 className="ui header ">
                <Author userId={blog.userId} />
              </h4>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <h1 className="ui header">Blogs Posts </h1>
        <div className="ui relaxed list divided">{this.renderBlogs()}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

export default connect(mapStateToProps, { fetchBlogs })(BlogList);
