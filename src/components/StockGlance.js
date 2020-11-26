import React, { useEffect } from "react";

const isNeg = RegExp(/^-/);
const priceChangeColor = document.querySelectorAll(".price-change");

const StockGlance = ({ currentStockData }) => {
  useEffect(() => {
    const colorChange = async () => {
      await priceChangeColor.forEach((element) => {
        isNeg.test(element.innerText)
          ? (element.style.color = "red")
          : (element.style.color = "green");
      });
    };
    colorChange();
  }, [currentStockData]);

  console.log("priceChangeColor:", priceChangeColor);

  return (
    <div data-test="component-stockGlance">
      <h4 className="section-head">{currentStockData["01. symbol"]}</h4>
      <h5 className="section-subhead">INSERT STOCK NAME HERE</h5>
      <p className="section-subhead">{currentStockData["05. price"]}</p>

      <div className="inline-row">
        <p className="price-change">{currentStockData["09. change"]}</p>
        <p className="price-change">{currentStockData["10. change percent"]}</p>
      </div>
    </div>
  );
};

export default StockGlance;
