import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  scales,
} from "chart.js/auto";
// import constants data
import { ShipManagement } from "../constants/shipManagement";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  scales
);

const SchatterChart = props => {
  const data = {
    datasets: [
      {
        label: "貨物運輸效率",
        data: [
          {
            x: 4000,
            y: 8200,
            fuelConsumption: 560,
            incidents: 2,
            month: "June",
          },
          {
            x: 2500,
            y: 7500,
            fuelConsumption: 500,
            incidents: 2,
            month: "January",
          },
          {
            x: 2000,
            y: 7800,
            fuelConsumption: 480,
            incidents: 1,
            month: "February",
          },
          {
            x: 3000,
            y: 8000,
            fuelConsumption: 550,
            incidents: 3,
            month: "March",
          },
          {
            x: 3000,
            y: 8100,
            fuelConsumption: 530,
            incidents: 0,
            month: "April",
          },
          {
            x: 3500,
            y: 8050,
            fuelConsumption: 540,
            incidents: 2,
            month: "May",
          },
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointRadius: 10,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "貨物重量 (噸)",
        },
      },
      y: {
        title: {
          display: true,
          text: "航行英里數",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const item = context.raw;
            return `${item.month}: 航行 ${item.y} 英里, 貨物重量 ${item.x} 噸, 燃油消耗 ${item.fuelConsumption} 加侖, 事件 ${item.incidents}`;
          },
        },
      },
    },
  };

  return (
    <div className={props.className}>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default SchatterChart;
