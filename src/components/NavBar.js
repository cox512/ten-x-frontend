/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import UserAuth from "./user/UserAuth";
// import * as actions from "../actions";

const NavBar = () => {
  return (
    <nav className="navigation" data-test="component-navbar">
      <Link to="/" className="nav__logo">
        TEN-X
      </Link>
      <div className="right menu">
        <UserAuth />
      </div>
    </nav>
  );
};

// Currently don't need.
const mapStateToProps = (state) => {
  return {
    userId: state.user.auth.userId,
    token: state.user.auth.token,
  };
};

export default connect(mapStateToProps)(NavBar);
