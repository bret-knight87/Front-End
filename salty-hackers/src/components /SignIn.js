import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import CreateAccount from "./CreateAccount";

const SignInForm = ({ values, errors, touched, status }) => {
  document.title = "Sign In | SHNT";

  const [signIn, setSignIn] = useState([]);

  return (
    <div className="App">
      <Form>
        <label htmlFor="email">
          E-Mail:
          <Field id="email" type="text" name="email" />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </label>
        <label htmlFor="password">
            Password:
            <Field id="password" type="password" name="password" />
  {touched.email && errors.password && <p>{errors.password}</p>}
        </label>
      </Form>
    </div>
  );
};

const FormikSignInForm = withFormik({
  mapPropsToValues(props) {
    return {
      email: props.email || "",
      password: props.password || "",
    };
  },

  validationSchema: Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required()
  }),

  handleSubmit(values, { setStatus, resetForm }) {
      axios
      .post("https://reqres.in/api/users/", values)
      .then (res => {
          console.log("success", res);

          resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(SignInForm);

export default FormikSignInForm;
