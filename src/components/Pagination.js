
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        {"< Prev"}
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}

      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        {"Next >"}
      </button>
    </div>
  );
};

export default Pagination;
