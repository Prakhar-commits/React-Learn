import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Form, Header, Label, Message } from "semantic-ui-react";

export class StreamForm extends Component {
  renderInput({ input, label, meta }) {
    return (
      <Form.Field error={!!meta.error && meta.touched}>
        <label>{label}</label>
        <input {...input} placeholder={`${label} here`} autoComplete="off" />
        {meta.touched && meta.error ? (
          <Label color="red" pointing basic size="small">
            {meta.error}
          </Label>
        ) : null}
      </Form.Field>
    );
  }

  state = { submited: false };
  submitMyForm(data) {
    return this.props.onSubmit(data).then(() => {
      this.setState({ submited: true });
    });
  }

  render() {
    const { isSignedIn, handleSubmit } = this.props;
    return (
      <>
        {isSignedIn ? (
          <Form name="upload-form" onSubmit={handleSubmit(this.submitMyForm.bind(this))}>
            <Field name="title" component={this.renderInput} label="Enter Title" />
            <Field name="description" component={this.renderInput} label="Enter Description" />
            <Button type="submit">Submit</Button>
          </Form>
        ) : (
          <>
            <Message negative>
              <Message.Header>Please login!!!</Message.Header>
              <p>You cannot see the content of this page without login</p>
            </Message>
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
    errors.title = "Please enter a title!";
  }
  if (!formValues.description) {
    errors.description = "Please enter a description!";
  }
  return errors;
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

const formWrap = reduxForm({
  form: "stream Form",
  validate: validateForm,
})(StreamForm);

export default connect(mapStateToProps)(formWrap);
