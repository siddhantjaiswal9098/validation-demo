import React from 'react';
import ReduxForm from './ReduxForm';
import CustomForm from './CustomForm';

const Signup = () => {
  const { location } = window;
  if (location.pathname === '/signup/reduxForm') {
    return (
      <ReduxForm />
    );
  }

  if (location.pathname === '/signup/customForm') {
    return (
      <CustomForm />
    );
  }
  return 'Login again';
};

export default Signup;
