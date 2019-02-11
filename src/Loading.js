import React from "react";

const Loader = props => {
  return (
    <div className="ui segment" style={{ height: "100vh" }}>
      <div className="ui active dimmer">
        <div className="ui massive text loader">{props.text}</div>
      </div>
    </div>
  );
};

export default Loader;
