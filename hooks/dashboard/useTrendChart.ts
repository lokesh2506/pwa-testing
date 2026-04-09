"use client";

import { useState } from "react";
import trendData from "@/data/performanceTrend.json";

type TrendType = "weekly" | "monthly";

export const useTrendChart = () => {
  const [type, setType] = useState<TrendType>("weekly");

  const current = trendData[type];

  const changeType = (value: TrendType) => {
    setType(value);
  };

  return {
    type,
    labels: current.labels,
    data: current.data,
    changeType
  };
};