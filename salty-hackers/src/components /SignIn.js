import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import CreateAccount from "./CreateAccount";
import styled from 'styled-components';
import "../App.css";

const FormDiv = styled.div`
    width: 75%;
    margin: auto;
    height: 60vh;
`;

const SignInForm = ({ values, errors, touched, status }) => {
  document.title = "Sign In | SHNT";

  const [signIn, setSignIn] = useState([]);

  return (
    <FormDiv>
      <Form>
          <p>E-Mail:</p>
        <label htmlFor="email">
          <Field id="email" type="text" name="email" />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </label>
        <p>Password:</p>
        <label htmlFor="password">
            <Field id="password" type="password" name="password" />
  {touched.email && errors.password && <p>{errors.password}</p>}
        </label>
        <br></br>
        <button type="submit">Log In</button>
      </Form>
      <p>OR</p>
      <hr/>
      <Link to="/createaccount"><button>Create Account</button></Link>
      <Route exact path="/createaccount" component={CreateAccount} />
    </FormDiv>
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
