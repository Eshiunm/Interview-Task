import { Bubble } from "react-chartjs-2";
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

const BubbleChart = props => {
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
        label: "Electronics",
        data: salesElectronicsData.map(salesData => {
          return {
            x: salesData.units_sold,
            y: salesData.sales_amount,
            r: 10,
          };
        }),
        backgroundColor: "#61DBFB",
      },
      {
        label: "Clothing",
        data: salesClothingData.map(salesData => {
          return {
            x: salesData.units_sold,
            y: salesData.sales_amount,
            r: 10,
          };
        }),
        backgroundColor: "#d0c52f",
      },
    ],
  };
  const options = {};
  return (
    <div className={props.className}>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default BubbleChart;
