import React, { useState, useEffect } from "react";
import "../index.css";

function CountrySearchBar({ filteredData, filterList, clearFilteredData }) {
  const [searchText, setsearchText] = useState("");

  function selectOption(e) {
    setsearchText(e.target.innerText);
    clearFilteredData();
  };

  function assignSearchText(text) {
    setsearchText(text);
    filterList(text);
  }

  return (
    <div className="search-div">
      <div style={{ display: "flex", width: "50%", flexDirection: "column" }}>
        <div className="search-component-div">
          <input
            onChange={(e) => {
              assignSearchText(e.target.value);
            }}
            className="search-box"
            placeholder="Search Countries or States e.g. India, Mumbai"
            value={searchText}
            onBlur={() => {
              setTimeout(() => {
                clearFilteredData();
              }, 100);
            }}
          />
        </div>

        {filteredData.length !== 0 && (
          <div className="search-recommendation-div">
            {filteredData
              .filter((val) => {
                if (searchText === "") {
                  return val;
                } else if (
                  val.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return (
                  <div className="search-results" key={key}>
                    <h5 style={{ marginBottom: "0px" }} onClick={selectOption}>
                      {val}
                    </h5>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default CountrySearchBar;
