export interface MetricCardData {
  id: string;
  title: string;
  value: string;
  trend: string;
  trendIcon: string;
  trendType: "up" | "down";
  progress: number;
  description: string;
  icon: string;
}