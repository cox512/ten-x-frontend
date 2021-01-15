/* eslint-disable arrow-body-style */
import React from "react";
import { Route, Router } from "react-router-dom";
import history from "../history";

import Header from "./Header";
import StockCard from "./stockDisplay/StockCard";
import NavBar from "./NavBar";
import Login from "./Login";

import UserCreate from "./user/UserCreate";
import UserDelete from "./user/UserDelete";
import UserEdit from "./user/UserEdit";
import UserShow from "./user/UserShow";

import WatchlistsCreate from "./watchlists/WatchlistsCreate";
import WatchlistsDelete from "./watchlists/WatchlistsDelete";
import WatchlistsEdit from "./watchlists/WatchlistsEdit";
import WatchlistsList from "./watchlists/WatchlistsList";
import WatchlistsShow from "./watchlists/WatchlistsShow";

// eslint-disable-next-line react/prop-types
const App = () => {
  return (
    <div data-test="component-app">
      <Router history={history}>
        <div>
          <NavBar />
          {}
          <Route path="/" component={Header} />
          <Route path="/" component={StockCard} />
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
        </div>
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
