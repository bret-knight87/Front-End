import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CreateAccountForm from "./CreateAccountForm";
import styled from "styled-components";
import "../App.css";

const FormDiv = styled.div`
  width: 75%;
  margin: auto;
  height: 60vh;
  padding: 1%;

  hr {
    border: solid 1px #264653;
  }

  p {
    color: #264653;
  }

  .Form-error {
    width: 20%;
    margin: auto;
    font-size: 0.7em;
    color: red;

    @media (max-width: 800px) {
      width: 35%;
    }
  }
`;

const SignInForm = ({ values, errors, touched, status }) => {
  document.title = "Sign In | SHNT";

  const [signIn, setSignIn] = useState([]);

  return (
    <FormDiv>
      <Form>
        <p>Email:</p>
        <label htmlFor="email">
          <Field id="email" type="text" name="email" className="form-field" />
          {touched.email && errors.email && (
            <p className="Form-error">{errors.email}</p>
          )}
        </label>
        <p>Password:</p>
        <label htmlFor="password">
          <Field
            id="password"
            type="password"
            name="password"
            className="form-field"
          />
          {touched.email && errors.password && (
            <p className="Form-error">{errors.password}</p>
          )}
        </label>
        <br></br>
        <button className="Button" type="submit">
          Log In
        </button>
        <p>
          <a href="#forgotpassword" className="forgot">
            Forgot Password?
          </a>
        </p>
        <br></br>
      </Form>
      <p>OR</p>
      <hr />
      <br></br>
      <Link to="/createaccount">
        <button>Create Account</button>
      </Link>
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
    email: Yup.string().required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("success", res);

        resetForm();
      })
      .catch(err => console.log(err.response));
  },
})(SignInForm);

export default FormikSignInForm;
