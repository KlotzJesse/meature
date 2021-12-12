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

interface MeatEmissionsStatProps {}

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
      text: "CO2 emissions from meats in kg of CO2",
    },
  },
};

const labels = ["BEEF", "CHICKEN", "PORK"];

export const data = {
  labels,
  datasets: [
    {
      label: "Meat type",
      data: { BEEF: 50, CHICKEN: 7, PORK: 13.3 },
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const MeatEmissionsStat = (props: MeatEmissionsStatProps) => {
  return <Bar options={options} data={data} />;
};

export default MeatEmissionsStat;
