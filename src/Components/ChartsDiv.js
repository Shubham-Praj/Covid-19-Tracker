import React from "react";
import "../index.css";
import CovidChart from "./CovidChart";

function ChartsDiv({data}) {
  return (
    <div className="chartDiv">
      <CovidChart data={data} />
    </div>
  );
}

export default ChartsDiv;
