/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Button from "../Button";

const WatchlistForm = ({ handleSubmit, formHeader, buttonText, submitWatchlist }) => {
  const renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div>{error}</div>
        </div>
      );
    }
  };

  const renderInput = useCallback(({ input, label, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input type={type} {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  }, []);

  const onSubmit = (formValues) => {
    submitWatchlist(formValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
      <h3 className="watchlist__form--header">{formHeader}</h3>
      <Field name="name" type="text" component={renderInput} label="Watchlist Name" />
      <div className="watchlist__button">
        <Button type="submit" text={buttonText} />
      </div>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "You must give your watchlist a name.";
  }
  return errors;
};

// const mapStateToProps = (state) => {
//   return state;
// };

const formWrapped = reduxForm({ form: "watchlistForm", validate })(WatchlistForm);

export default connect(null)(formWrapped);
