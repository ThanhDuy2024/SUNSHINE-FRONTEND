/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPagination } from "@/app/helpers/getPagination";
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: any;
  totalPages: any;
  onPageChange: any;
}) {
  const pages = getPagination(currentPage, totalPages);
  return (
    <>
      <div className="join mt-4 flex justify-end">
        <button
          className="join-item btn bg-white cursor-pointer"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          «
        </button>
        {pages.map((p, index) => (
          <button
            key={index}
            className={`join-item btn ${p === currentPage ? "btn-active bg-green-500 text-white" : ""
              } ${p === "..." ? "btn-disabled" : ""}`}
            onClick={() => typeof p === "number" && onPageChange(p)}
          >
            {p}
          </button>
        ))}

        <button
          className="join-item btn bg-white cursor-pointer"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          »
        </button>
      </div>
    </>
  )
}