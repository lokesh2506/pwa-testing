interface SearchBoxProps{
  searchBoxStyle: string,
  placeholder:string,
  type?:string
}
export const SearchBox = ({searchBoxStyle,placeholder,type='text'}:SearchBoxProps) => {
  return (
    <div className="relative">
      <span className="material-symbols-outlined card-subtitle absolute left-3 top-1/2 -translate-y-1/2 text-lg">search</span>
      <input className={searchBoxStyle} placeholder={placeholder}  type={type}/>
    </div>
  )
}