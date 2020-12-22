import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu" data-test="component-header">
      TEN-X
      <Link className="right menu" to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Header;
