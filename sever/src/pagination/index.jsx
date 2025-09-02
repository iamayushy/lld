const Pagination = ({ pageProps, setPageProps }) => {
  const { totalPages, pageOptions, currentPage, size } = pageProps;
  const totalPageCount = Math.ceil(totalPages / size);
const startIndex = (currentPage - 1) * size + 1;
const endIndex = Math.min(currentPage * size, totalPages);
  const onPageChange = (newSize) => {
    setPageProps((prev) => ({
      ...prev,
      size: Number(newSize),
      currentPage: 1,
    }));
  };

  const nextPage = () => {
    setPageProps((prev) =>
      prev.currentPage < totalPageCount
        ? { ...prev, currentPage: prev.currentPage + 1 }
        : prev
    );
  };

  const prevPage = () => {
    setPageProps((prev) =>
      prev.currentPage > 1
        ? { ...prev, currentPage: prev.currentPage - 1 }
        : prev
    );
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="border px-3 py-1 rounded disabled:opacity-50"
        onClick={prevPage}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Prev
      </button>

      <span>
        Page {startIndex} - {endIndex} of {totalPageCount * size}
      </span>

      <button
        type="button"
        className="border px-3 py-1 rounded disabled:opacity-50"
        onClick={nextPage}
        disabled={currentPage === totalPageCount}
        aria-label="Next Page"
      >
        Next
      </button>

      <select
        value={size}
        onChange={(e) => onPageChange(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        {pageOptions.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
