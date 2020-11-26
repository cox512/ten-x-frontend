import React from "react";
// import useStocks from "../hooks/useStocks";

const StockGlance = () => {
  // const [currentStockData, setCurrentStockData] = useStocks();

  // console.log("StockGlance:", currentStockData);

  return (
    <div className="" data-test="component-stockGlance">
      <h4 className="section-head">F</h4>
      <h5 className="section-subhead">Ford Motor Company</h5>
      <p className="section-subhead">$6.54</p>
      <div className="inline-row">
        <p>$0.30</p>
        <p>$1.39</p>
      </div>
    </div>
  );
};

export default StockGlance;
