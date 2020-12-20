import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import useStocks from "../hooks/useStocks";

import StockCard from "./stockDisplay/StockCard";
import Header from "./Header";

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
const App = ({ fetchStockDayPerf }) => {
  return (
    <div data-test="component-app">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" component={StockCard} />

          <Route path="/user/UserCreate" component={UserCreate} />
          <Route path="/user/UserDelete" component={UserDelete} />
          <Route path="/user/UserEdit/:id" component={UserEdit} />
          <Route path="/user/UserShow" component={UserShow} />

          <Route
            path="/watchlists/WatchlistsCreate"
            component={WatchlistsCreate}
          />
          <Route
            path="/watchlists/WatchlistsDelete"
            component={WatchlistsDelete}
          />
          <Route
            path="/watchlists/WatchlistsEdit/:id"
            component={WatchlistsEdit}
          />
          <Route path="/watchlists/WatchlistsList" component={WatchlistsList} />
          <Route path="/watchlists/WatchlistsShow" component={WatchlistsShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log("App state:", state);
//   return { stockDay: state.stockDay, stockOverview: state.stockOverview };
// };

// export default connect(mapStateToProps, { fetchStockDayPerf })(App);

export default App;
