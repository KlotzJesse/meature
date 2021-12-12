import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

interface WaterConsumptionStatProps {}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Water consumption of meats in litres per kg of meat",
    },
  },
};

const labels = ["BEEF", "CHICKEN", "PORK"];

export const data = {
  labels,
  datasets: [
    {
      label: "Meat type",
      data: { BEEF: 4184, CHICKEN: 930, PORK: 1782 },
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const WaterConsumptionStat = (props: WaterConsumptionStatProps) => {
  return <Bar options={options} data={data} />;
};

export default WaterConsumptionStat;
