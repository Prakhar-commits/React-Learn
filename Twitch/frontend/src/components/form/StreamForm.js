import React from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { Button, Form, Label, Message } from "semantic-ui-react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StreamForm = (props) => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const navigate = useNavigate();

  const renderInput = ({ input, label, meta }) => {
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
  };

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

  const onSubmit = (formValues) => {
    props.onSubmit(formValues).then(() => navigate("/"));
  };

  return (
    <>
      {isSignedIn ? (
        <FinalForm
          initialValues={props.initialValues}
          onSubmit={onSubmit}
          validate={validateForm}
          render={({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="title" component={renderInput} label="Enter Title" />
              <Field name="description" component={renderInput} label="Enter Description" />
              <Button type="submit">Submit</Button>
            </Form>
          )}
        />
      ) : (
        <>
          <Message negative>
            <Message.Header>Please login!!!</Message.Header>
            <p>You cannot see the content of this page without login</p>
          </Message>
        </>
      )}
    </>
  );
};

export default connect(null)(StreamForm);
