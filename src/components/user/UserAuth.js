/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Watchlists from "../watchlist/Watchlists";

// eslint-disable-next-line no-shadow
const UserAuth = ({ signOut, authData }) => {
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

  const renderAuthButton = () => {
    switch (authData.isSignedIn) {
      // case null:
      //   return;
      case false:
        return <Dropdown label={label} header="Account Settings" options={noAuthOptions} />;
      default:
        return (
          <>
            <div>
              <Link to="/" onClick={() => signOut(authData.userId)}>
                <Button type="button" text="Log Out" />
              </Link>
              <div className="dropdown">
                Watchlists
                <div className="dropdown__content">
                  <div className="dropdown__header">Watchlists</div>
                  <div className="ui divider" />

                  <Watchlists />

                  <Link to="/watchlist/create">
                    <Button text="Create Watchlist" />
                  </Link>
                </div>
              </div>
            </div>
            <Dropdown label={label} header="Account Settings" options={authOptions} />
          </>
        );
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
  };
};

export default connect(mapStateToProps, actions)(UserAuth);
