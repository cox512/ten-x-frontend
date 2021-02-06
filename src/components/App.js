/* eslint-disable arrow-body-style */
import React, { useEffect } from "react";
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
import WatchlistEdit from "./watchlist/WatchlistEdit";
import WatchlistList from "./watchlist/WatchlistList";
import WatchlistShow from "./watchlist/WatchlistShow";

import APIOvercallError from "./errors/APIOvercallError";
import CreateUserError from "./errors/CreateUserError";
import LogInError from "./errors/LogInError";
import LogoutError from "./errors/LogoutError";

// eslint-disable-next-line react/prop-types
const App = ({ checkUser }) => {
  // useEffect(() => {
  //   checkUser();
  // }, []);

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

        <Route path="/watchlist/WatchlistCreate" component={WatchlistCreate} />
        <Route path="/watchlist/WatchlistDelete" component={WatchlistDelete} />
        <Route path="/watchlist/WatchlistEdit/:id" component={WatchlistEdit} />
        <Route path="/watchlist/WatchlistList" component={WatchlistList} />
        <Route path="/watchlist/WatchlistShow" component={WatchlistShow} />

        <Route path="/error/apiovercall" component={APIOvercallError} />
        <Route path="/error/createuser" component={CreateUserError} />
        <Route path="/error/login" component={LogInError} />
        <Route path="/error/logout" component={LogoutError} />
      </Router>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log("App state:", state);
//   return { stockDay: state.stockDay, stockOverview: state.stockOverview };
// };

// export default connect(mapStateToProps, { fetchStockDayPerf })(App);

export default connect(null, actions)(App);
