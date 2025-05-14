import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const CustomPagination = ({ data, itemsPerPage, currentItemsParent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setCurrentItems] = useState(
    data.slice(indexOfFirstItem, indexOfLastItem),
  );
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );
  const pageRange = [];

  const calculation = () => {
    if (data.length > itemsPerPage) {
      setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
    } else {
      setCurrentItems(data);
    }
  };

  const pageNumber = () => {
    if (pageNumbers.length <= 7) {
      return pageNumbers;
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageRange.push(i);
        }
        pageRange.push('...');
        return pageRange;
      } else if (currentPage >= pageNumbers.length - 2) {
        pageRange.push('...');
        for (let i = pageNumbers.length - 4; i <= pageNumbers.length; i++) {
          pageRange.push(i);
        }
        return pageRange;
      } else {
        pageRange.push(1);
        pageRange.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageRange.push(i);
        }
        pageRange.push('...');
        pageRange.push(pageNumbers.length);
      }
      return pageRange;
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    currentItemsParent(currentItems);
  }, [currentItems]);

  useEffect(() => {
    calculation();
  }, [currentPage, data]);

  return (
    <>
      <button
        className="pagination-item"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pageNumber().map((page, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(page)}
          disabled={page === currentPage || page === '...'}
          className="pagination-item"
        >
          {page}
        </button>
      ))}
      <button
        className="pagination-item"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </>
  );
};

CustomPagination.propTypes = {
  data: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentItemsParent: PropTypes.func.isRequired,
};

export default CustomPagination;
