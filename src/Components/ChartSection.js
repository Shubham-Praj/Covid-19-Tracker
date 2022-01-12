import React from "react";
import "../index.css";
import ChartsDiv from "./ChartsDiv";
import DataDiv from "./DataDiv";

function ChartSection({data , title}) {
  return (
    <div className="chartSection">
      <div className="SectionHolderDiv">
        <DataDiv data={data} title={title} />
        <ChartsDiv data={data} />
      </div>
    </div>
  );
}

export default ChartSection;
