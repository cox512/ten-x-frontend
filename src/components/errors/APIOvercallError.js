import React from "react";

const APIOvercallError = () => {
  return (
    <p className="display">
      This API only allows a limited number of calls per minute. Try typing your search faster to
      save on calls. Otherwise, just hang tight and try your search again in a minute.
    </p>
  );
};

export default APIOvercallError;
