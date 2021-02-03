/* eslint-disable no-shadow */
import React from "react";
import { connect } from "react-redux";
import { createWatchlist } from "../../actions";
import Modal from "../Modal";
import history from "../../history";
import WatchlistForm from "./WatchlistForm";

const WatchlistCreate = ({ createWatchlist }) => {
  const onSubmit = (formValues) => {
    createWatchlist(formValues);
  };

  const renderContent = () => {
    return <WatchlistForm submitWatchlist={onSubmit} buttonText="Create a New Watchlist" />;
  };

  return (
    <Modal
      header="Create A Watchlist"
      content={renderContent()}
      onDismiss={() => history.push("/")}
    />
  );
};

export default connect(null, { createWatchlist })(WatchlistCreate);
