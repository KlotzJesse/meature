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

interface SurveyMeatSubstitutesProps {}

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
  scales: {
    x: {
      ticks: {},
    },
  },
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

const labels = [
  ["I think this", "is a good substitute", "to conventional meat"],
  "I would try that",
  "I am rather skeptical",
  ["This is out of the", "question for my diet"],
  ["Do not know /", "does not concern me"],
];

export const data = {
  labels,
  datasets: [
    {
      label: "Lab Meat",
      data: [5, 27, 30, 29, 9],
      backgroundColor: "lightblue",
    },
    {
      label: "Insect based Meat",
      data: [6, 25, 29, 35, 5],
      backgroundColor: "darkgray",
    },
    {
      label: "Soy based Meat",
      data: [15, 26, 23, 32, 4],
      backgroundColor: "lightgray",
    },
  ],
};

export const SurveyMeatSubstitutes = (props: SurveyMeatSubstitutesProps) => {
  return <Bar options={options} data={data} />;
};

export default SurveyMeatSubstitutes;
