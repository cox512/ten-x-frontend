import React from "react";
import { connect } from "react-redux";
import { formatter } from "../../helpers/helpers";

import Accordion from "../Accordion";

const isNeg = RegExp(/^-/);

const StockOverview = ({ stockDay, stockOverview }) => {
  const items = [
    {
      title: "Company Overview",
      content: (
        <>
          <section className="stock-overview__section inline-row">
            <p className="stock-overview__item">
              Country: <span>{stockOverview.Country}</span>
            </p>
            <p className="stock-overview__item">
              Sector: <span>{stockOverview.Sector}</span>
            </p>
            <p className="stock-overview__item">
              Industry: <span>{stockOverview.Industry}</span>
            </p>
            <p className="stock-overview__item">
              No. of Employees: <span>{stockOverview.FullTimeEmployees}</span>
            </p>
          </section>
          <section>
            <p className="stock-overview__item">
              Company Description: <span>{stockOverview.Description}</span>
            </p>
          </section>
        </>
      ),
    },
    {
      title: "Earnings Numbers",
      content: (
        <>
          <p className="stock-overview__item">
            Market Cap <i>(million)</i>:{" "}
            <span>{formatter.format(stockOverview.MarketCapitalization / 1000000)}</span>
          </p>
          <p className="stock-overview__item">
            EBITDA <i>(million)</i>: <span>{formatter.format(stockOverview.EBITDA / 1000000)}</span>
          </p>
          <p className="stock-overview__item">
            EPS: <span>{formatter.format(stockOverview.EPS)}</span>
          </p>
          <p className="stock-overview__item">
            PE Ratio: <span>{parseFloat(stockOverview.PERatio).toFixed(2)}</span>
          </p>
          <p className="stock-overview__item">
            PEG Ratio: <span>{parseFloat(stockOverview.PEGRatio).toFixed(2)}</span>
          </p>
          <p className="stock-overview__item">
            Book Value: <span>{parseFloat(stockOverview.BookValue).toFixed(2)}</span>
          </p>
          <p className="stock-overview__item">
            Price To Sales: <span>{parseFloat(stockOverview.PriceToSalesRatioTTM).toFixed(2)}</span>
          </p>
          <p className="stock-overview__item">
            Price To Book: <span>{parseFloat(stockOverview.PriceToBookRatio).toFixed(2)}</span>
          </p>
        </>
      ),
    },
    {
      title: "Performance Trends",
      content: (
        <>
          <p className="stock-overview__item">
            52-Week High: <span>{formatter.format(stockOverview["52WeekHigh"])}</span>
          </p>
          <p className="stock-overview__item">
            52-Week Low: <span>{formatter.format(stockOverview["52WeekLow"])}</span>
          </p>
          <p className="stock-overview__item">
            50-Day Moving Average:{" "}
            <span> {formatter.format(stockOverview["50DayMovingAverage"])}</span>
          </p>
          <p className="stock-overview__item">
            200-Day Moving Average:{" "}
            <span> {formatter.format(stockOverview["200DayMovingAverage"])}</span>
          </p>
        </>
      ),
    },
    {
      title: "Dividend Information",
      content: (
        <>
          <p className="stock-overview__item">
            Dividend Per Share: <span>{formatter.format(stockOverview.DividendPerShare)}</span>
          </p>
          <p className="stock-overview__item">
            Dividend Yield: <span>{formatter.format(stockOverview.DividendYield)}</span>
          </p>
          <p className="stock-overview__item">
            Dividend Payout Ratio:{" "}
            <span>{parseFloat(stockOverview.PayoutRatio).toFixed(2) * 100}%</span>
          </p>
          <p className="stock-overview__item">
            Ex-Dividend Date: <span>{stockOverview.ExDividendDate}</span>
          </p>
          <p className="stock-overview__item">
            Dividend Date: <span>{stockOverview.DividendDate}</span>
          </p>
        </>
      ),
    },
    {
      title: "Ownership",
      content: (
        <>
          <p className="stock-overview__item">
            Insider Ownership: <span>{parseFloat(stockOverview.PercentInsiders).toFixed(2)}%</span>
          </p>
          <p className="stock-overview__item">
            Institutional Ownership:{" "}
            <span>{parseFloat(stockOverview.PercentInstitutions).toFixed(2)}%</span>
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="stock-overview display">
      <section className="stock-overview__section lead">
        <div>
          {stockOverview.Name} ({stockOverview.Symbol})
        </div>
        <div>Price: {formatter.format(stockDay["05. price"])}</div>
        <div
          className="price-change"
          style={isNeg.test(stockDay["09. change"]) ? { color: "red" } : { color: "green" }}>
          {formatter.format(stockDay["09. change"])}
        </div>
        <div
          className="price-change"
          style={isNeg.test(stockDay["09. change"]) ? { color: "red" } : { color: "green" }}>
          {parseFloat(stockDay["10. change percent"]).toFixed(2)}%
        </div>
      </section>
      <section className="stock-overview__accordion">
        <Accordion items={items} />
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return { stockDay: state.stockDay, stockOverview: state.stockOverview };
};

export default connect(mapStateToProps)(StockOverview);
