/* eslint-disable no-else-return */
/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../actions";
import Dropdown from "../Dropdown";
// import Button from "../Button";

// eslint-disable-next-line no-shadow
const UserAuth = ({ isSignedIn, signOut, watchlists, token, authData }) => {
  const label = <i className="nav__item user circle outline icon" />;
  const noAuthOptions = [
    <Link to="/login" className="profile__item">
      Log In
    </Link>,
    <Link to="/user/new" className="profile__item">
      Create Account
    </Link>,
  ];

  const authOptions = [
    <Link to="/user/show/:id" className="profile__item">
      Account Details
    </Link>,
    <Link to="/user/delete/:id" className="profile__item">
      Delete Account
    </Link>,
  ];

  const watchlistOptions = [
    // Holds the entire array or watchlists
    // I may not need this. I could maybe just directly add the watchlists state.
  ];

  // eslint-disable-next-line consistent-return
  const renderAuthButton = () => {
    if (authData.isSignedIn) {
      return (
        <>
          <div>
            <button type="button" onClick={() => signOut(authData.userId, authData.token)}>
              Log Out
            </button>
            <Dropdown label="Watchlists" header="Watchlists" options={watchlists} />
          </div>
          <Dropdown label={label} header="Account Settings" options={authOptions} />
        </>
      );
    } else {
      return <Dropdown label={label} header="Account Settings" options={noAuthOptions} />;
    }
  };

  return (
    <div className="auth__login menu" data-test="component-user-auth">
      {renderAuthButton()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authData: state.user.auth,
    // isSignedIn: state.user.auth.isSignedIn,
    watchlists: state.watchlists.watchlists,
    // token: state.user.auth.token,
  };
};

export default connect(mapStateToProps, { signOut })(UserAuth);
