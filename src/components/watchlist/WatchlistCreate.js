/* eslint-disable no-shadow */
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";
import WatchlistForm from "./WatchlistForm";

const WatchlistCreate = ({ createWatchlist, fetchWatchlists, token }) => {
  const onSubmit = (formValues) => {
    createWatchlist(formValues, token);
    fetchWatchlists(token);
  };

  const renderContent = () => {
    return <WatchlistForm submitWatchlist={onSubmit} buttonText="Create Watchlist" />;
  };

  return (
    <Modal
      header="Create A Watchlist"
      content={renderContent()}
      onDismiss={() => history.push("/")}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.auth.token,
    // userId: state.user.auth.userId,
  };
};

export default connect(mapStateToProps, actions)(WatchlistCreate);
