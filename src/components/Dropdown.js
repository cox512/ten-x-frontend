import React from "react";

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
      </div>
    </div>
  );
};

export default Dropdown;
