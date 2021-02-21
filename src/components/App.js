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

// eslint-disable-next-line react/prop-types
const App = ({ fetchWatchlists, token, isSignedIn }) => {
  const [currentList, setCurrentList] = useState({});

  useEffect(() => {
    if (isSignedIn) {
      fetchWatchlists(token);
    } else {
      fetchWatchlists();
    }
  }, [token]);

  return (
    <div data-test="component-app">
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

        <Route path="/watchlist/create" component={WatchlistCreate} />
        <Route path="/watchlist/delete/:id" component={WatchlistDelete} />
        <Route path="/watchlist/all" component={Watchlists} />
        <Route path="/watchlist/show/:id" component={WatchlistShow} />

        <Route path="/error/apiovercall" component={APIOvercallError} />
        <Route path="/error/createuser" component={CreateUserError} />
        <Route path="/error/login" component={LogInError} />
        <Route path="/error/logout" component={LogoutError} />
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.auth.token,
    userId: state.user.auth.userId,
    isSignedIn: state.user.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, actions)(App);
