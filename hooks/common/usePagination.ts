import { useMemo, useState, useEffect } from "react";

type UsePaginationProps<T> = {
  data: T[];
  itemsPerPage?: number;
};

export const usePagination = <T>({
  data,
  itemsPerPage = 5,
}: UsePaginationProps<T>) => {
  const [page, setPageState] = useState(1);

  const totalItems = data.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const setPage = (newPage: number | ((prev: number) => number)) => {
    setPageState((prev) => {
      const nextPage =
        typeof newPage === "function" ? newPage(prev) : newPage;

      if (nextPage < 1) return 1;
      if (nextPage > totalPages) return totalPages;

      return nextPage;
    });
  };

  const startIndex = totalItems === 0 ? 0 : (page - 1) * itemsPerPage + 1;
  const endIndex = Math.min(page * itemsPerPage, totalItems);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, page, itemsPerPage]);

  useEffect(() => {
    setPageState(1);
  }, [data]);

  return {
    page,
    setPage,
    totalPages,
    paginatedData,
    totalItems,
    startIndex,
    endIndex,
  };
};