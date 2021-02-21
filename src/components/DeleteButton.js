import React from "react";

const DeleteButton = ({ handleDelete }) => {
  return (
    <div data-test="component-watchlists-delete">
      <button className="ui inverted button negative" type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
