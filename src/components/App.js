/* eslint-disable arrow-body-style */
import React from "react";
import { Route, Router } from "react-router-dom";
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

import WatchlistsCreate from "./watchlists/WatchlistsCreate";
import WatchlistsDelete from "./watchlists/WatchlistsDelete";
import WatchlistsEdit from "./watchlists/WatchlistsEdit";
import WatchlistsList from "./watchlists/WatchlistsList";
import WatchlistsShow from "./watchlists/WatchlistsShow";

import APIOvercallError from "./errors/APIOvercallError";
import CreateUserError from "./errors/CreateUserError";

// eslint-disable-next-line react/prop-types
const App = () => {
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

        <Route path="/watchlists/WatchlistsCreate" component={WatchlistsCreate} />
        <Route path="/watchlists/WatchlistsDelete" component={WatchlistsDelete} />
        <Route path="/watchlists/WatchlistsEdit/:id" component={WatchlistsEdit} />
        <Route path="/watchlists/WatchlistsList" component={WatchlistsList} />
        <Route path="/watchlists/WatchlistsShow" component={WatchlistsShow} />

        <Route path="/error/apiovercall" component={APIOvercallError} />
        <Route path="/error/createuser" component={CreateUserError} />
      </Router>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log("App state:", state);
//   return { stockDay: state.stockDay, stockOverview: state.stockOverview };
// };

// export default connect(mapStateToProps, { fetchStockDayPerf })(App);

export default App;
