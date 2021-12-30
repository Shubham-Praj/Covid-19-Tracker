import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CovidTrackerHeader from "./Components/CovidTrackerHeader";
import CountrySearchBar from "./Components/CountrySearchBar";
import ChartSection from "./Components/ChartSection";

function App() {
  const [covidData, setcovidData] = useState([]);
  const [searchedValue, setsearchedValue] = useState([]);
  const [countryCity, setcountryCity] = useState([]);
  const [filteredData, setfilteredData] = useState([]);

  useEffect(() => {
    //Get Country and City list from covid data to create recommendation list
    async function getCountryCityList(data) {
      const cc = [];
      for (let i in data) {
        cc.push(i);

        for (let j in data[i]) {
          if (j !== "All") {
            cc.push(j);
          }
        }
      }
      setcountryCity(cc);
    }

    async function getCovidData() {
      const res = await fetch(`${process.env.REACT_APP_NEWS_URL}`);
      const data = await res.json();
      setcovidData(data);
      setsearchedValue(data.India.All);
      getCountryCityList(data);
    }

    getCovidData();
  }, []);

  //FilterList is function to filter country and city list
  //Filtered data is array where all the filtered data based on text is created
  function filterList(searchText) {
    const textFiltered = countryCity.filter((val) => {
      if (searchText === "") {
        return val;
      } else if (val.toLowerCase().includes(searchText.toLowerCase())) {
        return val;
      }
    });

    setfilteredData(textFiltered);

    console.log("dakjsdhksd", filteredData);
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
      />
      <ChartSection data={searchedValue} />
    </div>
  );
}

export default App;
