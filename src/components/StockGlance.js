import React, { useEffect } from "react";

const isNeg = RegExp(/^-/);
//NOTE: This returns a NodeList, not an array.
const priceChangeColor = Array.from(document.querySelectorAll(".price-change"));

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const StockGlance = ({ currentStockData }) => {
  useEffect(() => {
    const colorChange = () => {
      priceChangeColor.forEach((element) => {
        isNeg.test(element.innerText)
          ? (element.style.color = "red")
          : (element.style.color = "green");
      });
    };
    colorChange();
  }, [currentStockData]);

  // console.log("priceChangeColor:", priceChangeColor);

  return (
    <div data-test="component-stockGlance">
      <h4 className="section-head">{currentStockData["01. symbol"]}</h4>
      <h5 className="section-subhead">INSERT STOCK NAME HERE</h5>
      <p className="section-subhead">
        {formatter.format(currentStockData["05. price"])}
      </p>

      <div className="inline-row">
        <p className="price-change">
          {formatter.format(currentStockData["09. change"])}
        </p>
        <p className="price-change">
          {parseFloat(currentStockData["10. change percent"]).toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default StockGlance;
