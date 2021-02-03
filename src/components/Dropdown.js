import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Dropdown = ({ label, options, header }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div key={option.props.children} className="dropdown__item">
        {option}
      </div>
    );
  });

  return (
    <div className="dropdown">
      {label}
      <div className="dropdown__content">
        <div className="dropdown__header">{header}</div>
        <div className="ui divider" />
        {renderedOptions}
        {header === "Watchlists" ? (
          <Link to="/watchlist/WatchlistCreate">
            <Button text="Create New Watchlist" />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
