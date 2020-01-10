import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
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

  useEffect(() => {
    console.log("status has changed!", status);
    status && setSignIn(signIn => [...signIn, status]);
  }, [status]);

  return (
    <FormDiv>
      <Form>
        <p>Username:</p>
        <label htmlFor="username">
          <Field id="username" type="text" name="username" className="form-field" />
          {touched.username && errors.username && (
            <p className="Form-error">{errors.username}</p>
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
      <Link to="/createaccount">
        <button>Create Account</button>
      </Link>
    </FormDiv>
  );
};

const FormikSignInForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || "",
      password: props.password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    password: Yup.string().required("Password is required!"),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://salt-comments.herokuapp.com/api/auth/login", values)
      .then(res => {
        console.log(res.data);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  },
})(SignInForm);

export default FormikSignInForm;
