/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Button from "../Button";
import { renderInput } from "../../helpers/helpers";

const WatchlistForm = ({ handleSubmit, formHeader, buttonText, submitWatchlist }) => {
  const onSubmit = (formValues) => {
    submitWatchlist(formValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
      <h3 className="watchlist__form--header">{formHeader}</h3>
      <Field name="title" type="text" component={renderInput} label="Watchlist Name" />
      <div className="watchlist__button" s>
        <Button type="submit" text={buttonText} />
        <Link to="/">
          <Button className="ui inverted button primary" text="Cancel" />
        </Link>
      </div>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must give your watchlist a name.";
  }
  return errors;
};

const formWrapped = reduxForm({ form: "watchlistForm", validate })(WatchlistForm);

export default connect(null)(formWrapped);
