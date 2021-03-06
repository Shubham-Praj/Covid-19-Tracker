import React, { useState } from "react";
import "../index.css";

function CountrySearchBar({
  filteredData,
  filterList,
  clearFilteredData,
  setSelectedData,
}) {
  const [searchText, setsearchText] = useState("");

  //Filter on Typing
  function assignSearchText(text) {
    setsearchText(text);
    filterList(text);
  }

  //Clear the Collection after a selection
  function selectOption(e) {
    setsearchText(e.target.innerText);
    setSelectedData(e.target.innerText);
    clearFilteredData();
  }

  return (
    <div className="search-div">
        <div className="search-component-div">
          <input
            onChange={(e) => {
              assignSearchText(e.target.value);
            }}
            className="search-box"
            placeholder="Search Countries or States e.g. India, Goa"
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
                return val.toLowerCase().includes(searchText.toLowerCase())
                  ? val
                  : "";
              })
              .map((val, key) => {
                return (
                  <div className="search-results" key={key}>
                    <h5
                      style={{ marginBottom: "0px", cursor: "pointer" }}
                      onClick={selectOption}
                    >
                      {val}
                    </h5>
                  </div>
                );
              })}
          </div>
        )}
    </div>
  );
}

export default CountrySearchBar;
