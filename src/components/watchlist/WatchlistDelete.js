/* eslint-disable no-shadow */
/* eslint-disable no-console */
import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";
import DeleteButton from "../DeleteButton";
import WatchlistContext from "../../contexts/WatchlistContext";

const WatchlistDelete = ({ listId, token, deleteWatchlist, watchlists }) => {
  const list = useContext(WatchlistContext);
  useEffect(() => {
    console.log("list:", list);

    if (list) {
      list[1](watchlists[listId]);
    }
    console.log("list:", list);
  }, [list]);

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

  const renderContent = (list) => {
    console.log("content list:", list);
    if (!list[0]) {
      return "Are you sure you want to delete this watchlist? You will lose all of the stocks that you have saved in it. This action can not be reversed.";
    }
    return `Are you sure you want to delete the ${list[0].title} watchlist? You will lose all of the stocks that you have saved in it. This action can not be reversed.`;
  };

  return (
    <Modal
      data-test="component-user-delete"
      header="Delete Profile"
      content={renderContent(list)}
      actions={renderActions()}
      onDismiss={() => history.push(`/watchlist/show/${listId}`)}
    />
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
