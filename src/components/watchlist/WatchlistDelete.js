/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";
import DeleteButton from "../DeleteButton";

const WatchlistDelete = ({ listId, token, deleteWatchlist, listTitle }) => {
  const handleDelete = () => {
    deleteWatchlist(listId, token);
  };

  const renderActions = () => {
    return (
      <div className="modal-actions">
        <DeleteButton handleDelete={handleDelete} />
        <Link className="ui inverted button primary" to={`/watchlist/show/${listId}`}>
          Cancel
        </Link>
      </div>
    );
  };

  const renderContent = () => {
    // Need to get listTitle in component state
    if (!listTitle) {
      return "Are you sure you want to delete this watchlist? You will lose all of the stocks that you have saved in it. This action can not be reversed.";
    }
    return `Are you sure you want to delete the ${listTitle} watchlist? You will lose all of the stocks that you have saved in it. This action can not be reversed.`;
  };

  return (
    <Modal
      data-test="component-user-delete"
      header="Delete Profile"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push(`/watchlist/show/${listId}`)}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("ownprops:", ownProps);
  return {
    listId: ownProps.match.params.id,
    token: state.user.auth.token,
    // listTitle: state.watchlists, --> Get this from component state/context
  };
};

export default connect(mapStateToProps, actions)(WatchlistDelete);
