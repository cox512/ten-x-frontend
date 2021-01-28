/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button";

const UserShow = ({ currentUser, currentUserAuth }) => {
  return (
    <div className="display" data-test="component-user-show">
      {currentUserAuth.isSignedIn ? (
        <>
          <table>
            <tbody>
              <tr>
                <td>First Name:</td>
                <td>{currentUser.fname}</td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <td>{currentUser.lname}</td>
              </tr>
              <tr>
                <td>Username:</td>
                <td>{currentUser.username}</td>
              </tr>
              <tr>
                <td>E-Mail:</td>
                <td>{currentUser.email}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <Link to={`/user/edit/${currentUserAuth.userId}`}>
              <Button text="Edit" />
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.user.profile, currentUserAuth: state.user.auth };
};
export default connect(mapStateToProps)(UserShow);
