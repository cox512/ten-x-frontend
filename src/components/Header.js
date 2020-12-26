/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import Button from "./Button";
import UserAuth from "./user/UserAuth";

const Header = ({ currentUser }) => {
  console.log(currentUser);
  const renderAcctButton = () => {
    if (currentUser) {
      return (
        <Link to={`/user/${currentUser}`} type="button" className="ui button primary">
          Account
        </Link>
      );
    }
    return null;
  };
  return (
    <div className="ui secondary pointing menu" data-test="component-header">
      TEN-X
      <div className="right menu">
        <UserAuth />
        {renderAcctButton()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.auth.userId };
};
export default connect(mapStateToProps)(Header);
