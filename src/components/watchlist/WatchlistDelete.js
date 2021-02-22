/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";
import DeleteButton from "../DeleteButton";
import WatchlistContext from "../../contexts/WatchlistContext";

const WatchlistDelete = ({ listId, token, deleteWatchlist, watchlists }) => {
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

  const renderContent = (value) => {
    console.log("value:", value);
    if (!value) {
      return "Are you sure you want to delete this watchlist? You will lose all of the stocks that you have saved in it. This action can not be reversed.";
    }
    return `Are you sure you want to delete the ${value} watchlist? You will lose all of the stocks that you have saved in it. This action can not be reversed.`;
  };

  return (
    <WatchlistContext.Consumer>
      {(value) => {
        console.log(value);
        value[1](watchlists[listId]);
        // console.log("title", title);
        return (
          <Modal
            data-test="component-user-delete"
            header="Delete Profile"
            content={renderContent(value[0].title)}
            actions={renderActions()}
            onDismiss={() => history.push(`/watchlist/show/${listId}`)}
          />
        );
      }}
    </WatchlistContext.Consumer>
  );
};

const mapStateToProps = (state, ownProps) => {
  //   console.log("ownProps:", ownProps);
  return {
    listId: ownProps.match.params.id,
    token: state.user.auth.token,
    watchlists: state.watchlists,
  };
};

export default connect(mapStateToProps, actions)(WatchlistDelete);
