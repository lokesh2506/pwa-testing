export interface CardData {
  cardTitle: string;
  cardIcon: string;
  data: string;
  subIcon: "trending_up" | "remove" | "trending_down";
  subData: string; 
  cardSubTitle: string;
  iconStyle: string;
}