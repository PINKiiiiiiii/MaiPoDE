import { Line } from "react-chartjs-2";

const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          datasets: [
            {
              label: "% Alzheimer's Disease",
              data: [7, 19, 22, 36, 41, 50],
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgb(255, 99, 132)"],
              borderWidth: 3,
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

export default LineChart;
