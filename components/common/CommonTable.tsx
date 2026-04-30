"use client";

import { Column } from "@/types/common/table";

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

const CommonTable = <T,>({ columns, data }: TableProps<T>) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] md:min-w-full">
        <table className="w-full text-left border-collapse">
          
          {/* HEADER */}
          <thead>
            <tr className="card-subtitle text-[10px] font-bold uppercase tracking-widest border-b border-border">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`px-6 py-5 ${
                    col.align === "center"
                      ? "text-center"
                      : col.align === "right"
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-hover transition-colors border-b border-border"
                >
                  {columns.map((col, colIndex) => {
                    const value = row[col.accessor];

                    return (
                      <td
                        key={colIndex}
                        className={`px-6 py-4 text-sm card-subtitle ${
                          col.align === "center"
                            ? "text-center"
                            : col.align === "right"
                            ? "text-right"
                            : "text-left"
                        }`}
                      >
                        {col.render
                          ? col.render(value, row)
                          : (value as React.ReactNode)}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-6 card-subtitle"
                >
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default CommonTable;