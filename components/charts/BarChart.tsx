"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { BAR_COLORS } from "@/config/chartColors";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

interface Props {
  labels: string[];
  values: number[];
  colors?: string[];
}

const BarChart = ({ labels, values, colors }: Props) => {
  const appliedColors =
    colors && colors.length > 0
      ? colors
      : values.map((_, i) => BAR_COLORS[i % BAR_COLORS.length]);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: appliedColors,
        borderRadius: {
            topLeft: 6,
            topRight: 6,
            bottomLeft: 0,
            bottomRight: 0,
        }, // small rounded radius (as requested)
        borderSkipped: false, // important for full rounding
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { color: "#9db2b9" },
        grid: { display: false },
      },
      y: {
        ticks: { display:false },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;