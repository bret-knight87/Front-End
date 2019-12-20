import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const CreateAccount = () => {
    document.title = 'Create Account | SHNT'
}

export default CreateAccount;