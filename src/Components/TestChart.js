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
// Chart.scaleService.updateScaleDefaults('linear', {
//     ticks: {
//         max: 10
//     }
// });

function TestChart() {
  const options = {
    scales: {
      y: {
        type: "linear",
        grace: "5%",
      },
    },
  };

  const chartData = {
    labels: ["Recovered", "Active", "Deaths"],

    datasets: [
      {
        data: [16, 4, 5],
        borderRadius: 10,
        backgroundColor: [
          "rgba(57, 200, 106, 0.7)",
          "rgba(245, 195, 36, 0.7)",
          "rgba(255, 107, 107, 0.7)",
        ],
      },
    ],
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default TestChart;
