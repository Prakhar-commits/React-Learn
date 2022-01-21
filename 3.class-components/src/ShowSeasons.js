import React from "react";
import './Style.css'

const SeasonConfig = {
  Summer: {
    text: "Its Hot",
    iconName: "sun",
  },
  Winter: {
    text: "Its Cold",
    iconName: "snowflake",
  },
};

const getSeasons = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const ShowSeasons = (props) => {
  const Season = getSeasons(props.lat, new Date().getMonth());
  console.log(Season);
  const { text, iconName } = SeasonConfig[Season];
  return (
    <div className={`Show-Seasons ${Season}`}>
      <i className={`icon massive ${iconName}`}></i>
      <h1> {text} </h1>
      <i className={`icon massive ${iconName}`}></i>
    </div>
  );
};

export default ShowSeasons;
