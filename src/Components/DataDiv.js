import React from "react";
import "../index.css";

function DataDiv({ data, title }) {
  
  return (
    <div className="dataDiv">
      <div className="dataHeaders">
        <h1>
          <b>{title}</b>
        </h1>
        <h4>Asia</h4>
      </div>
      <div className="subHeadersDiv">
        <div className="labels">
          <div className="labelTextDiv">
            <h4>Captial</h4>
          </div>
          <div className="labelTextDiv">
            <h4>Population</h4>
          </div>
          <div className="labelTextDiv">
            <h4>Life Expecentacy</h4>
          </div>
          <div className="labelTextDiv">
            <h4>Location</h4>
          </div>
        </div>

        <div className="values">
          <div className="valuesTextDiv">
            <h4>{data.capital_city ? data.capital_city : "N/A"}</h4>
          </div>
          <div className="valuesTextDiv">
            <h4>{data.population ? data.population : "N/A"}</h4>
          </div>
          <div className="valuesTextDiv">
            <h4>{data.life_expectancy ? data.life_expectancy : "N/A"}</h4>
          </div>
          <div className="valuesTextDiv">
            <h4>{data.location ? data.location : "N/A"}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataDiv;
