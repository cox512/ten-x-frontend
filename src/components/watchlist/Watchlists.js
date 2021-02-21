import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../actions";

const Watchlists = ({ watchlists }) => {
  const watchlistArray = Object.entries(watchlists);

  const renderedWatchlists = watchlistArray.map((watchlist) => {
    // console.log("single item:", watchlist);
    return (
      <li key={watchlist[0]}>
        <Link to={`/watchlist/show/${watchlist[0]}`}>{watchlist[1].title}</Link>
      </li>
    );
  });

  return (
    <div data-test="component-watchlists-list">
      {!Object.keys(watchlists) ? (
        <p>You currently have no watchlists.</p>
      ) : (
        <ul>{renderedWatchlists}</ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    watchlists: state.watchlists,
  };
};

export default connect(mapStateToProps, actions)(Watchlists);
