/* eslint-disable no-shadow */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import StockCard from "../stockDisplay/StockCard";

const WatchlistShow = ({ watchlist, listId }) => {
  // console.log("watchlist:", watchlist);
  return (
    <div data-test="component-watchlists-show">
      <StockCard />
      {!watchlist ? (
        "Loading..."
      ) : (
        <div>
          <h3>{watchlist.title.toUpperCase()}</h3>
          <em>created: {watchlist.created_at}</em>
          <Link className="ui inverted button negative" to={`/watchlist/delete/${listId}`}>
            Delete
          </Link>

          <p>
            This list is currently empty. Search for stocks in the search bar above and add them to
            your list.
          </p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    watchlist: state.watchlists[ownProps.match.params.id],
    listId: ownProps.match.params.id,
    stockList: state.stocks,
  };
};

export default connect(mapStateToProps, actions)(WatchlistShow);
