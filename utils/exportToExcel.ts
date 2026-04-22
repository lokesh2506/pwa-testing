
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportMultiSheetExcel = (data: Record<string, any[]>,fileName:string) => {
  const workbook = XLSX.utils.book_new();

  Object.keys(data).forEach((sheetName) => {
    const sheet = XLSX.utils.json_to_sheet(data[sheetName]);
    XLSX.utils.book_append_sheet(workbook, sheet, sheetName);
  });

  const file = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const blob = new Blob([file], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(blob, `${fileName}.xlsx`);
};