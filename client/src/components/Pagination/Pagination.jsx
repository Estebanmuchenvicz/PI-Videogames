import React from "react";
import './pagination.css'

function Pagination({ currentPage, totalPages, onPageChange }) {


  const maxDisplayedPages = 5;
  const halfMaxDisplayedPages = Math.floor(maxDisplayedPages / 2);

  let startPage, endPage;

  if (totalPages <= maxDisplayedPages) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= halfMaxDisplayedPages) {
    startPage = 1;
    endPage = maxDisplayedPages;
  } else if (currentPage + halfMaxDisplayedPages >= totalPages) {
    startPage = totalPages - maxDisplayedPages + 1;
    endPage = totalPages;
  } else {
    startPage = currentPage - halfMaxDisplayedPages;
    endPage = currentPage + halfMaxDisplayedPages;
  }

  const pageRange = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button className="prev" onClick={() => onPageChange(currentPage - 1)}>
          Prev
        </button>
      )}

      {pageRange.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination-button ${pageNumber === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      {currentPage < totalPages && (
        <button className="next" onClick={() => onPageChange(currentPage + 1)}>
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;