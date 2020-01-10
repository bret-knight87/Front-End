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

const CreateAccountForm = ({ values, errors, touched, status }) => {
  document.title = "Create Account | SHNT";

  const [createAccount, setCreateAccount] = useState([]);

  useEffect(() => {
    console.log("status has changed!", status);
    status && setCreateAccount(createAccount => [...createAccount, status]);
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
          {touched.password && errors.password && (
            <p className="Form-error">{errors.password}</p>
          )}
        </label>
        {/* <p>Verify Password:</p>
        <label htmlFor="verifypassword">
          <Field
            id="verifypassword"
            type="password"
            name="verifypassword"
            className="form-field"
          />
          {touched.verifypassword && errors.verifypassword && (
            <p className="Form-error">{errors.verifypassword}</p>
          )}
        </label> */}
        <br></br>
        <button type="submit">Create Account</button>
      </Form>
      <Link to="/">
        <button className="back-to-signin">Go Back to Sign In</button>
      </Link>
    </FormDiv>
  );
};

const FormikCreateAccountForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || "",
      password: props.password || "",
      // verifypassword: props.verifypassword || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    password: Yup.string().min(8, "Password must be at least 8 characters!").required("Password is required!"),
    // verifypassword: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "Passwords must match!")
    //   .required("Verify password is required!")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://salt-comments.herokuapp.com/api/auth/register", values)
      .then(console.log(values))
      .then(res => {
        console.log("success", res);
        setStatus(res.data)
        resetForm();
      })
      .catch(err => console.log(err.response));
  },
})(CreateAccountForm);

export default FormikCreateAccountForm;
