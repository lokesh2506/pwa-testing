import { CardData } from "@/types/dashboard/datacard"

interface CardDataProps{
    cardData: CardData
}
const DataCard = ({cardData}:CardDataProps) => {

  const trendStyles: Record<CardData["subIcon"], string> = {
    trending_up: "text-emerald-400 bg-emerald-400/10",
    remove: "card-subtitle font-bold bg-white dark:bg-slate-700",
    trending_down: "text-red-400 bg-red-400/10",
  };
  return (
    <div className="flex flex-col gap-3 rounded-xl p-5 card-bg border border-slate-700/50 shadow-sm hover:border-primary/50 transition-colors">
      <div className="flex justify-between items-start">
        <p className="card-subtitle text-sm font-medium uppercase tracking-wider">{cardData.cardTitle}</p>
        <span className={`material-symbols-outlined p-1 rounded ${cardData.iconStyle}`}>{cardData.cardIcon}</span>
      </div>
      <div>
        <p className="card-title text-3xl font-bold">{cardData.data}</p>
        <div className="flex items-center gap-2 mt-1">
          <span
            className={`text-xs font-bold px-1.5 py-0.5 rounded flex items-center gap-1 
            ${trendStyles[cardData.subIcon]}`}
          >
            <span className="material-symbols-outlined datacard-icon">{cardData.subIcon}</span> {cardData.subData}
          </span>
          <span className="card-subtitle text-xs">{cardData.cardSubTitle}</span>
        </div>
      </div>
    </div>
  )
}

export default DataCard