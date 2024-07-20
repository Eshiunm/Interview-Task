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
  const newLabels = ShipManagement.shipOperations.map(
    ShipManagement => ShipManagement.month
  );
  const fuelEfficiencyData = ShipManagement.shipOperations.map(shipData => {
    return {
      x: shipData.distanceTravelled,
      y: parseFloat(
        (shipData.distanceTravelled / shipData.fuelConsumption).toFixed(2)
      ),
      distanceTravelled: shipData.distanceTravelled,
      fuelConsumption: shipData.fuelConsumption,
      incidents: shipData.incidents,
      cargoWeight: shipData.cargoWeight,
    };
  });
  const data = {
    labels: newLabels,
    datasets: [
      {
        label: "船隻燃油效率",
        data: fuelEfficiencyData,
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
          text: "月份（從 1 月到 6 月）",
        },
      },
      y: {
        title: {
          display: true,
          text: "燃油效率（每單位燃油消耗所行駛的距離）",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const item = context.raw;
            return `燃油效率 ${item.y}，燃油消耗 ${item.fuelConsumption} 加侖，航行 ${item.distanceTravelled} 英里，事件 ${item.incidents}，貨物重量 ${item.cargoWeight} 噸`;
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
