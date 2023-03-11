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
              data: [19, 21, 23, 25],
              backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgb(75, 192, 192)",
                "rgb(75, 192, 192)",
                "rgb(75, 192, 192)",
                "rgb(75, 192, 192)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              ticks: {
                font: {
                  size: 20,
                  family: "Anuphan",
                },
              },
            },
            y: {
              ticks: {
                font: {
                  size: 20,
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
