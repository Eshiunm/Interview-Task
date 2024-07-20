import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { ShipManagement } from "../constants/shipManagement";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = props => {
  // 標準化數據函數
  const normalize = (value, min, max) => (value - min) / (max - min);

  // 找出每個指標的最大和最小值
  const maxFuel = Math.max(
    ...ShipManagement.shipOperations.map(op => op.fuelConsumption)
  );
  const minFuel = Math.min(
    ...ShipManagement.shipOperations.map(op => op.fuelConsumption)
  );
  const maxDistance = Math.max(
    ...ShipManagement.shipOperations.map(op => op.distanceTravelled)
  );
  const minDistance = Math.min(
    ...ShipManagement.shipOperations.map(op => op.distanceTravelled)
  );
  const maxCargo = Math.max(
    ...ShipManagement.shipOperations.map(op => op.cargoWeight)
  );
  const minCargo = Math.min(
    ...ShipManagement.shipOperations.map(op => op.cargoWeight)
  );

  const chartData = {
    labels: ["燃油效率", "航行距離", "貨物重量"],
    datasets: ShipManagement.shipOperations.map(op => ({
      label: op.month,
      data: [
        1 - normalize(op.fuelConsumption, minFuel, maxFuel), // 燃油效率（越低越好，所以用1減去）
        normalize(op.distanceTravelled, minDistance, maxDistance),
        normalize(op.cargoWeight, minCargo, maxCargo),
      ],
      fill: true,
      backgroundColor: `rgba(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      },0.2)`,
      borderColor: `rgba(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      },1)`,
      pointBackgroundColor: `rgba(${Math.random() * 255},${
        Math.random() * 255
      },${Math.random() * 255},1)`,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
    })),
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 1,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "船舶綜合性能分析",
      },
    },
  };

  return (
    <div className={props.className}>
      <Radar data={chartData} options={options} />
    </div>
  );
};

export default RadarChart;
