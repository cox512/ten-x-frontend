import React from "react";

const PageHeader = () => {
  return (
    <header className="page-header">
      <div className="page-header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">
            It takes <s>money</s> <b>knowledge</b>
          </span>
          <span className="heading-primary--sub"> to make money.</span>
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;
