import React from "react";
import { useUserContext } from "../context/user_context";

const Pagination = ({props}) => {
  const {data}=useUserContext()
    const {page,handleNext,handlePrevious}=props
    const {pageCount}=data.pagination

  return (
    <div>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {page}
          </span>
          of
          <span className="font-semibold text-gray-900 dark:text-white">
            {pageCount}
          </span>
        </span>

        <div className="inline-flex mt-2 xs:mt-0">
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={handlePrevious}
            disabled={page===1}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={handleNext}
            disabled={page===pageCount}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
