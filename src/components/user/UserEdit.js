/* eslint-disable consistent-return */
import React, { useCallback } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { editUser } from "../../actions";

const UserEdit = ({ handleSubmit, userId }) => {
  const renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div>{error}</div>
        </div>
      );
    }
  };
  const onSubmit = (formValues) => {
    editUser(userId, formValues);
  };

  const renderInput = useCallback(({ input, label, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>{label}</label>
        <input type={type} {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  }, []);

  return (
    <div data-test="component-user-edit">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="ui form error"
        data-test="component-user-create">
        <Field name="fname" type="text" component={renderInput} label="First Name" />
        <Field name="lname" type="text" component={renderInput} label="Last Name" />
        <Field name="username" type="text" component={renderInput} label="Username" />
        <Field name="email" type="text" component={renderInput} label="Email" />
        <button type="submit" className="ui button primary">
          Update Profile
        </button>
      </form>
    </div>
  );
};

// You could write this function in a js helper file and import it both here and createUser. Right now, createUser is also validating the password, but we can have that be a seperate validation function that is written in the createUSer component.
const validate = (formValues) => {
  const errors = {};
  if (!formValues.lname) {
    errors.lname = "You must enter a last name";
  }
  if (!formValues.fname) {
    errors.fname = "You must enter a first name";
  }
  if (!formValues.username) {
    errors.username = "You must enter a username";
  }
  if (!formValues.email) {
    errors.email = "You must enter a email";
  }
  return errors;
};

const mapStateToProps = (state) => {
  return {
    initialValues: {
      fname: state.user.profile.fname,
      lname: state.user.profile.lname,
      username: state.user.profile.username,
      email: state.user.profile.email,
      userId: state.user.profile.id,
    },
  };
};
const formWrapped = reduxForm({ form: "editForm", enableReinitialize: true, validate })(UserEdit);

export default connect(mapStateToProps, { editUser })(formWrapped);
