export interface ButtonProps {
  buttonStyle: string,
  content: React.ReactNode,
  clickFunction: () => void,
  type?:"button" | "submit" | "reset",
  disabled?:boolean
}