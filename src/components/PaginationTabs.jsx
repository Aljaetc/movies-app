import React from "react";

const Pagination = ({ page, updatePage, total_pages }) => {
  const handleClick = value => () => {
    updatePage(value);
  };

  return (
    <div>
      <button type="button" onClick={handleClick(page - 1)}>
        Prev
      </button>
      <span>
        {page} from {total_pages}
      </span>
      <button type="button" onClick={handleClick(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
