import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, Header, Message } from "semantic-ui-react";

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

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit((formValues) => console.log(formValues))}>
        <Header as="h2">Upload Video</Header>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <Button type="submit">Submit</Button>
      </Form>
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

export default reduxForm({
  form: "stream Create",
  validate: validateForm,
})(StreamCreate);
