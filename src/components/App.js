/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from "react";
import { Route, Router } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import history from "../history";

import NavBar from "./NavBar";
import Login from "./Login";
import PageHeader from "./PageHeader";

import StockCard from "./stockDisplay/StockCard";
import StockOverview from "./stockDisplay/StockOverview";

import UserCreate from "./user/UserCreate";
import UserDelete from "./user/UserDelete";
import UserEdit from "./user/UserEdit";
import UserShow from "./user/UserShow";

import WatchlistCreate from "./watchlist/WatchlistCreate";
import WatchlistDelete from "./watchlist/WatchlistDelete";
import Watchlists from "./watchlist/Watchlists";
import WatchlistShow from "./watchlist/WatchlistShow";

import APIOvercallError from "./errors/APIOvercallError";
import CreateUserError from "./errors/CreateUserError";
import LogInError from "./errors/LogInError";
import LogoutError from "./errors/LogoutError";

import WatchlistContext from "../contexts/WatchlistContext";

// eslint-disable-next-line react/prop-types
const App = ({ fetchWatchlists, token, isSignedIn }) => {
  const [currentList, setCurrentList] = useState({});

  // useEffect(() => {
  //   console.log("currentList on load:", currentList);
  // }, []);

  useEffect(() => {
    if (isSignedIn) {
      fetchWatchlists(token);
    } else {
      fetchWatchlists();
    }
  }, [token]);

  // useEffect(() => {
  //   console.log("currentList:", currentList);

  // }, [currentList]);

  return (
    <div data-test="component-app">
      {/* <WatchlistContext.Provider value={[currentList, setCurrentList]}> */}
      <Router history={history}>
        <NavBar />

        <Route path="/" component={PageHeader} />
        <Route path="/" exact component={StockCard} />
        <Route path="/stockOverview" component={StockOverview} />

        <Route path="/login" component={Login} />

        <Route path="/user/new" exact component={UserCreate} />
        <Route path="/user/delete/:id" component={UserDelete} />
        <Route path="/user/edit/:id" component={UserEdit} />
        <Route path="/user/show/:id" component={UserShow} />

        <WatchlistContext.Provider value={[currentList, setCurrentList]}>
          <Route path="/watchlist/create" component={WatchlistCreate} />
          <Route
            path="/watchlist/delete/:id"
            component={WatchlistDelete}
            currentList={currentList}
          />
          <Route path="/watchlist/all" component={Watchlists} />
          <Route path="/watchlist/show/:id" component={WatchlistShow} />
        </WatchlistContext.Provider>

        <Route path="/error/apiovercall" component={APIOvercallError} />
        <Route path="/error/createuser" component={CreateUserError} />
        <Route path="/error/login" component={LogInError} />
        <Route path="/error/logout" component={LogoutError} />
      </Router>
      {/* </WatchlistContext.Provider> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.auth.token,
    userId: state.user.auth.userId,
    isSignedIn: state.user.auth.isSignedIn,
    // watchlists: state.watchlists,
  };
};

export default connect(mapStateToProps, actions)(App);
