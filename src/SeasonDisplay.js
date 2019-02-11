import React from "react";
import "./SeasonDisplay.css";

// getMonth returns an int between 0 and 11.
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth);
  const icon = season === "winter" ? "snowflake" : "sun";
  return (
    <div className={`season-display ${icon}`}>
      <i className={`${icon} icon massive img-left`} />
      <h1 className={`season-indicator`}>It is {season} where you live</h1>
      <i className={`${icon} icon massive img-right`} />
    </div>
  );
};

export default SeasonDisplay;
