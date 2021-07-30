import React from "react";
import AuthForm from "../components/auth/AuthForm";

const AuthPage = ({ location, history }) => {
  return (
    <>
      <h2>Authorization</h2>
      <AuthForm />
      <button onClick={() => history.push(location.state.from)}>Go back</button>
    </>
  );
};

export default AuthPage;
