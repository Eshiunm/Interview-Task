import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  scales,
  elements,
  Animation,
} from "chart.js/auto";
// import constants data
import { sales_data } from "../constants/sales_data";
import { plugin } from "postcss";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  scales
);

const LineChart = props => {
  const salesElectronicsData = sales_data.sales.filter(
    salesData => salesData.category === "Electronics"
  );
  const salesClothingData = sales_data.sales.filter(
    salesData => salesData.category === "Clothing"
  );
  const labels = sales_data.sales.map(salesData => salesData.date);
  const newLabels = [...new Set(labels)];

  const data = {
    labels: newLabels,
    datasets: [
      {
        label: "Electronics Units Sold",
        data: salesElectronicsData.map(salesData => salesData.units_sold),
        borderColor: "#61DBFB",
        pointBackgroundColor: "#002fff",
        pointBorderColor: "#002fff",
      },
      {
        label: "Clothing Units Sold",
        data: salesClothingData.map(salesData => salesData.units_sold),
        borderColor: "#d0c52f",
        pointBackgroundColor: "#837c12",
        pointBorderColor: "#837c12",
      },
    ],
  };
  const options = {
    Animation: true,
    plugins: {
      title: {
        text: "水啦",
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className={props.className}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
