import React from "react";

const Loader = () => {
  return (
    <div className="ui segment" style={{ height: "100vh" }}>
      <p />
      <div className="ui active dimmer">
        <div className="ui massive loader" />
      </div>
    </div>
  );
};

export default Loader;
