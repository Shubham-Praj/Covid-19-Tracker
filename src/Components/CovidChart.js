import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CovidChart({data}) {
  const chartData = {
    labels: ["Cases"],
    datasets: [
      {
        label: "Recovered",
        data: [data.recovered],
        borderRadius: 10,
        backgroundColor: ["rgba(57, 200, 106, 0.7)"],
        borderColor: ["rgba(57, 200, 106, 0.7)"],
        borderWidth: 1,
      },
      {
        label: "Confirmed",
        data: [data.confirmed],
        borderRadius: 10,
        backgroundColor: ["rgba(245, 195, 36, 0.7)"],
        borderColor: ["rgba(245, 195, 36, 0.7)"],
        borderWidth: 1,
      },
      {
        label: "Deaths",
        data: [data.deaths],
        borderRadius: 10,
        backgroundColor: ["rgba(255, 107, 107, 0.7)"],
        borderColor: ["rgba(255, 107, 107, 0.7)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: "linear",
        grace: "5%",
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%", padding: "5% 0px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default CovidChart;
