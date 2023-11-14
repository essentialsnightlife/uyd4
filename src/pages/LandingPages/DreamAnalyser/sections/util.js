import { useState } from "react";

export const usePagination = (data) => {
  data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const [currentPage, setCurrentPage] = useState(1);

  const PER_PAGE = 2;
  const maxPage = Math.ceil(data.length / PER_PAGE);

  // Option 1
  const currentData = () => {
    const begin = (currentPage - 1) * PER_PAGE;
    const end = begin + PER_PAGE;

    return data.slice(begin, end);
  };

  const handleChange = (_, page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  };

  return { handleChange, data: currentData(), count: maxPage, currentPage };
};
