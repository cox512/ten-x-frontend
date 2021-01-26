import React from "react";
import { Link } from "react-router-dom";

const CreateUserError = () => {
  return (
    <div className="display">
      <p>There was an error logging you in. Please check your credentials and try again.</p>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default CreateUserError;
