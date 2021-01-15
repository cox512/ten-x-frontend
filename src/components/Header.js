import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">
            It takes <s>money</s> <b>knowledge</b>
          </span>
          <span className="headiing-primary--sub"> to make money.</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
