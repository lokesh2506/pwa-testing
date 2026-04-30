export interface Column<T> {
  header: string;
  accessor: keyof T;
  align?: "left" | "center" | "right";
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}