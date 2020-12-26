/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const UserShow = ({ currentUser }) => {
  console.log("currentUser:", currentUser);
  return (
    <div data-test="component-user-show">
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
        <Link to={`/user/edit/${currentUser.id}`} className="ui button primary">
          Edit
        </Link>
        <Link to={`/user/delete/${currentUser.id}`} className="ui button negative">
          Delete
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.user.profile };
};
export default connect(mapStateToProps)(UserShow);
