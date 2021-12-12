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

interface MeatSubstituteEnvStatProps {}

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
      text: "Substitute products less harmful to the climate than meat",
    },
  },
};

const labels = [
  "BEEF",
  "CHICKEN",
  "PORK",
  "Insect based meat substitute",
  "Soy based meat substitute",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Meat type",
      data: {
        BEEF: 50,
        CHICKEN: 7,
        PORK: 13.3,
        "Insect based meat substitute": 20,
        "Soy based meat substitute": 10,
      },
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const MeatSubstituteEnvStat = (props: MeatSubstituteEnvStatProps) => {
  return <Bar options={options} data={data} />;
};

export default MeatSubstituteEnvStat;
