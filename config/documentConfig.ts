import { DocumentConfig } from "@/types/dashboard/documents";

export const DOCUMENT_CONFIG: Record<string, DocumentConfig> = {
  pdf: {
    type: "pdf",
    icon: "picture_as_pdf",
    color: {
      bg: "bg-red-500/10",
      text: "text-red-400",
      hover: "group-hover:bg-red-500 group-hover:text-white"
    }
  },
  word: {
    type: "word",
    icon: "description",
    color: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      hover: "group-hover:bg-blue-500 group-hover:text-white"
    }
  },
  excel: {
    type: "excel",
    icon: "table_chart",
    color: {
      bg: "bg-green-500/10",
      text: "text-green-400",
      hover: "group-hover:bg-green-500 group-hover:text-white"
    }
  },
  powerpoint: {
    type: "powerpoint",
    icon: "slideshow",
    color: {
      bg: "bg-orange-500/10",
      text: "text-orange-400",
      hover: "group-hover:bg-orange-500 group-hover:text-white"
    }
  },
  archive: {
    type: "archive",
    icon: "folder_zip",
    color: {
      bg: "bg-yellow-500/10",
      text: "text-yellow-400",
      hover: "group-hover:bg-yellow-500 group-hover:text-white"
    }
  }
};