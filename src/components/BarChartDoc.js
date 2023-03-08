import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["ม.ค.", "ก.พ.", "มี.ค", "เม.ย."],
          datasets: [
            {
              label: "Alzheimer's",
              data: [67, 15, 23, 48],
              backgroundColor: ["#b4c6ff"],
              borderColor: ["#b4c6ff"],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              ticks: {
                font: {
                  size: 15,
                  family: "Anuphan",
                },
              },
            },
            y: {
              ticks: {
                font: {
                  size: 15,
                  family: "Anuphan",
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
