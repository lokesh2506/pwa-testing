"use client";

import {Chart as ChartJS,LineElement,CategoryScale,LinearScale,PointElement,Tooltip,Filler,} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement,Tooltip,Filler);

interface Props {
  labels: string[];
  data: number[];
}

const LineChart = ({ labels, data }: Props) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Performance",
        data,
        borderColor: "#13b6ec",
        backgroundColor: "rgba(19, 182, 236, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#13b6ec",
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
        ticks: { color: "#9db2b9" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;