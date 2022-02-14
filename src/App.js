import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CovidTrackerHeader from "./Components/CovidTrackerHeader";
import CountrySearchBar from "./Components/CountrySearchBar";
import ChartSection from "./Components/ChartSection";

const flatJSONData = {};

function App() {
  const [searchedValue, setsearchedValue] = useState([]);
  const [countryCity, setcountryCity] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [chartTitle, setchartTitle] = useState("India");

  async function nestedJSONToflatJSONData(nestedJSON) {
    const cc = [];

    for (let key in nestedJSON) {
      flatJSONData[key] = nestedJSON[key].All;
      cc.push([key][0]);
      for (let subData in nestedJSON[key]) {
        if (subData !== "All") {
          flatJSONData[subData] = nestedJSON[key][subData];
          cc.push([subData][0]);
        }
      }
    }

    setcountryCity(cc);
    console.log(flatJSONData);
    console.log(cc);
  }

  useEffect(() => {
    async function getCovidData() {
      const res = await fetch(`${process.env.REACT_APP_NEWS_URL}`);
      const data = await res.json();
      await nestedJSONToflatJSONData(data);
      setsearchedValue(data.India.All);
    }

    getCovidData();
  }, []);

  async function setSelectedData(clickedValue) {
    setchartTitle(clickedValue);
    console.log(clickedValue);
    setsearchedValue(flatJSONData[clickedValue]);
  }

  //FilterList is function to filter country and city list
  //Filtered data is array where all the filtered data based on text is created
  function filterList(searchText) {
    const textFiltered = countryCity.filter((val) => {
      return searchText === ""
        ? val
        : val.toLowerCase().includes(searchText.toLowerCase())
        ? val
        : null;
    });
    setfilteredData(textFiltered);
  }

  function clearFilteredData() {
    setfilteredData([]);
  }

  return (
    <div>
      <CovidTrackerHeader />
      <CountrySearchBar
        filteredData={filteredData}
        filterList={filterList}
        clearFilteredData={clearFilteredData}
        setSelectedData={setSelectedData}
      />
      <ChartSection data={searchedValue} title={chartTitle} />
    </div>
  );
}

export default App;
