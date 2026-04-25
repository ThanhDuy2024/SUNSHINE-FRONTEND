/* eslint-disable @typescript-eslint/no-explicit-any */
export const getPagination = (currentPage: any, totalPages: any) => {
  const pages = [];

  const delta = 1; // số trang xung quanh current
  const range = [];

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    range.push(i);
  }

  // luôn có trang 1
  pages.push(1);

  // thêm "..." nếu cần
  if (currentPage - delta > 2) {
    pages.push("...");
  }

  // thêm các trang ở giữa
  pages.push(...range);

  // thêm "..." nếu cần
  if (currentPage + delta < totalPages - 1) {
    pages.push("...");
  }

  // luôn có trang cuối
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};