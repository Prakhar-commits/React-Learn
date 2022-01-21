import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui massive text loader">{props.message}</div>
    </div>
  );
};

// Set default props in case of prop in not given a value
Spinner.defaultProps = {
    message: "Loading..."
};

export default Spinner;
