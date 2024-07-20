import { Line } from "react-chartjs-2";
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

const LineChart_2 = props => {
  const data = {
    datasets: [
      {
        label: "船隻燃油效率",
        data: [
          {
            x: 7500,
            y: 500,
            incidents: 2,
            cargoWeight: 2500,
            month: "January",
          },
          {
            x: 7800,
            y: 480,
            incidents: 1,
            cargoWeight: 2000,
            month: "February",
          },
          { x: 8000, y: 550, incidents: 3, cargoWeight: 3000, month: "March" },
          { x: 8100, y: 530, incidents: 0, cargoWeight: 3000, month: "April" },
          { x: 8050, y: 540, incidents: 2, cargoWeight: 3500, month: "May" },
          { x: 8200, y: 560, incidents: 2, cargoWeight: 4000, month: "June" },
        ],
        backgroundColor: "rgba(30, 0, 255, 0.6)",
        borderColor: "#0000ff",
        pointRadius: 10,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "航行英里數",
        },
      },
      y: {
        title: {
          display: true,
          text: "燃油消耗 (加侖)",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const item = context.raw;
            return `${item.month}: 燃油消耗 ${item.y} 加侖, 航行 ${item.x} 英里, 事件 ${item.incidents}, 貨物重量 ${item.cargoWeight} 噸`;
          },
        },
      },
    },
  };
  return (
    <div className={props.className}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart_2;
