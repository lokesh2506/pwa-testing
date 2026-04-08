const DataCard = () => {
  return (
    <div className="flex flex-col gap-3 rounded-xl p-5 card-bg border border-slate-700/50 shadow-sm hover:border-primary/50 transition-colors">
      <div className="flex justify-between items-start">
        <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">SM Target</p>
        <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded">target</span>
      </div>
      <div>
        <p className="text-white text-3xl font-bold">500</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">trending_up</span> 5%
          </span>
          <span className="text-text-secondary text-xs">vs last month</span>
        </div>
      </div>
    </div>
  )
}

export default DataCard