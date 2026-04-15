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

interface Dataset {
  label?: string;
  data: number[];
  backgroundColor?: string;
}

interface Props {
  labels: string[];

  //  Single dataset
  values?: number[];
  colors?: string[];

  //  Multi dataset
  datasets?: Dataset[];
}

const BarChart = ({ labels, values, colors, datasets }: Props) => {
  //  MULTI DATASET MODE
  const finalDatasets = datasets
    ? datasets.map((ds, i) => ({
        ...ds,
        backgroundColor:
          ds.backgroundColor ||
          BAR_COLORS[i % BAR_COLORS.length], //  USE BAR_COLORS
        borderRadius: {
          topLeft: 6,
          topRight: 6,
        },
        borderSkipped: false,
      }))
    : [
        //  SINGLE DATASET MODE
        {
          data: values || [],
          backgroundColor:
            colors && colors.length > 0
              ? colors
              : (values || []).map(
                  (_, i) => BAR_COLORS[i % BAR_COLORS.length]
                ), //  USE BAR_COLORS
          borderRadius: {
            topLeft: 6,
            topRight: 6,
          },
          borderSkipped: false,
        },
      ];

  const data = {
    labels,
    datasets: finalDatasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: !!datasets, // show only in multi
        labels: {
          color: "#9db2b9",
          font: { size: 10 },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#9db2b9" },
        grid: { 
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: { display: false },
        grid: { 
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;