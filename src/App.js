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
  const [countries, setcountries] = useState([]);
  const [cities, setcities] = useState([]);

  useEffect(() => {
    const cc = [];
    const CountriesList = [];
    const CitiesList = [];
    //Get Country and City list from covid data to create recommendation list
    async function getCountryCityList(data) {
      for (let i in data) {
        cc.push(i);
        CountriesList.push(i);

        for (let j in data[i]) {
          if (j !== "All") {
            cc.push(j);
            CitiesList.push(j);
          }
        }
      }
      setcountryCity(cc);
      setcountries(CountriesList);
      setcities(CitiesList);
    }

    async function getCovidData() {
      const res = await fetch(`${process.env.REACT_APP_NEWS_URL}`);
      const data = await res.json();
      setcovidData(data);
      setsearchedValue(data.India.Maharashtra);
      getCountryCityList(data);
    }

    getCovidData();
  }, []);

  async function setSelectedData(clickedValue) {
    console.log(clickedValue);
    //console.log(covidData[clickedValue].All);

    console.log(countries.includes(clickedValue));

    if (countries.includes(clickedValue)) {
      setsearchedValue(covidData[clickedValue].All);
      console.log(covidData[clickedValue].All);
    } else {
      for (let i in countries) {
        for (let j in cities) {
          console.log(cities[j]);

          if (cities[j] === clickedValue) {
            // setsearchedValue(covidData[clickedValue][cities[j]]);
            console.log("else", covidData[countries[i]]);
            // console.log( "else" ,covidData[countries[i]].cities[j]);
            break;
          }
        }
        break;
      }
    }
  }

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
      <ChartSection data={searchedValue} />
    </div>
  );
}

export default App;
