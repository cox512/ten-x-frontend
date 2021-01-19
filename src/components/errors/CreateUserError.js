import React from "react";
import { Link } from "react-router-dom";

const CreateUserError = () => {
  return (
    <div className="display">
      <p>There was an error creating your account. Please try again.</p>
      <Link to="/user/new">Create an account</Link>
    </div>
  );
};

export default CreateUserError;
