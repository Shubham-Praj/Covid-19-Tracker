import React from "react";
import "../index.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function DataDiv({ data }) {
  // const geogleLocation = `${
  //   process.env.REACT_APP_GOOGLE_URL
  // }/@${data.lat},${data.long},7.5z `;

  const geogleLocation = `${
    process.env.REACT_APP_GOOGLE_URL
  }/@23.57,71.54,7.5z `;


  return (
    <div className="dataDiv">
      <div className="dataHeaders">
        <h1>
          <b>{}</b>
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
            <h4>{ data.capital_city ? data.capital_city : "N/A" }</h4>
          </div>
          <div className="valuesTextDiv">
            <h4>{data.population? data.population : "N/A"}</h4>
          </div>
          <div className="valuesTextDiv">
            <h4>{data.life_expectancy ? data.life_expectancy : "N/A"}</h4>
          </div>
          <div className="valuesTextDiv">
            <h4>{data.location ? data.location : "N/A"}</h4>
          </div>
        </div>
      </div>
      <div className="googleMapLinkDiv">
        <a
          className="viewOnMap"
          href={geogleLocation}
          target="_blank"
          rel="noreferrer"
        >
          View on Map
        </a>
        <FaExternalLinkAlt />
      </div>
    </div>
  );
}

export default DataDiv;
