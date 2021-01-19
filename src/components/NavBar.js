/* eslint-disable no-console */
import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import UserAuth from "./user/UserAuth";

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

// const mapStateToProps = (state) => {
//   return {
//     currentUserId: state.auth.userId,
//     currentUserName: state.user.profile.fname,
//   };
// };
// export default connect(mapStateToProps)(NavBar);

export default NavBar;
