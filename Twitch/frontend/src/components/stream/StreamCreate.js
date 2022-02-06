import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import { Navigate } from "react-router-dom";
class StreamCreate extends Component {
  renderInput({ input, label, meta }) {
    return (
      <Form.Field error={!!meta.error && meta.touched}>
        <label>{label}</label>
        <input {...input} placeholder={`${label} here`} autoComplete="off" />
        {meta.touched && meta.error ? (
          <Message color="red" size="tiny">
            <strong>Error:</strong> {meta.error}
          </Message>
        ) : null}
      </Form.Field>
    );
  }

  state = { submited: false };
  submitMyForm(data) {
    return this.props.createStream(data).then(() => {
      this.setState({ submited: true });
    });
  }

  render() {
    const { isSignedIn, handleSubmit } = this.props;
    return (
      <>
        {isSignedIn ? (
          <Form name="upload-form" onSubmit={handleSubmit(this.submitMyForm.bind(this))}>
            <Header as="h2">Upload Video</Header>
            <Field name="title" component={this.renderInput} label="Enter Title" />
            <Field name="description" component={this.renderInput} label="Enter Description" />
            <Button type="submit">Submit</Button>
          </Form>
        ) : (
          <>
            <Header as="h2">Upload Video</Header>
            <Header as="h4">Please Login !!!</Header>
          </>
        )}
        {this.state.submited && <Navigate to="/" replace={true} />}
      </>
    );
  }
}

const validateForm = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You Must Enter A Title";
  }
  if (!formValues.description) {
    errors.description = "You Must Enter A Description";
  }
  return errors;
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

const formWrap = reduxForm({
  form: "stream Create",
  validate: validateForm,
})(StreamCreate);

export default connect(mapStateToProps, { createStream })(formWrap);
