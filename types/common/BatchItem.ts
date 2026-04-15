export interface BatchItem {
  label: string;
  batches: {
    name: string;
    status: {
      label: string;
      bgClass: string;
      textClass: string;
    };
  }[];
}   