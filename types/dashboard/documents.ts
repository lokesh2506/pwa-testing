export interface PolicyDocument {
  id: string;
  docName: string;
  docType: "pdf" | "word" | "excel" | "powerpoint" | "archive";
  updateDate: string;
  url: string;
}
 
export interface DocumentConfig {
  type: "pdf" | "word" | "excel" | "powerpoint" | "archive";
  icon: string;
  color: {
    bg: string;
    text: string;
    hover: string;
  };
}