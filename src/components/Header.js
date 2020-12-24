import React from "react";
// import { Link } from "react-router-dom";
// import Button from "./Button";
import UserAuth from "./user/UserAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu" data-test="component-header">
      TEN-X
      {/* <Link className="right menu" to="/login"> */}
      <UserAuth className="right menu" />
      {/* </Link> */}
    </div>
  );
};

export default Header;
