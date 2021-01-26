/* eslint-disable no-else-return */
/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut, clearUser } from "../../actions";
import Dropdown from "../Dropdown";
import Button from "../Button";

// eslint-disable-next-line no-shadow
const UserAuth = ({ isSignedIn, signOut, clearUser }) => {
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

  const onSignOutClick = () => {
    signOut();
    clearUser();
  };

  // eslint-disable-next-line consistent-return
  const renderAuthButton = () => {
    if (isSignedIn) {
      return (
        <>
          <div>
            <Link to="/" onClick={onSignOutClick}>
              <Button text="Log Out" />
            </Link>
          </div>
          <Dropdown label={label} options={authOptions} />
        </>
      );
    } else {
      return <Dropdown label={label} options={noAuthOptions} />;
    }
  };

  return (
    <div className="auth__login menu" data-test="component-user-auth">
      {renderAuthButton()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.user.auth.isSignedIn };
};
export default connect(mapStateToProps, { signOut, clearUser })(UserAuth);
