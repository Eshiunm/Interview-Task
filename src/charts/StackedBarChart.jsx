import { Bar } from "react-chartjs-2";
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
import { sales_data } from "../constants/sales_data";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  scales
);

const StackedBarChart = props => {
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
        label: "Electronics Sales Amount",
        data: salesElectronicsData.map(salesData => salesData.sales_amount),
        backgroundColor: "#61DBFB",
      },
      {
        label: "Clothing Sales Amount",
        data: salesClothingData.map(salesData => salesData.sales_amount),
        backgroundColor: "#d0c52f",
      },
    ],
  };
  const options = {
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
