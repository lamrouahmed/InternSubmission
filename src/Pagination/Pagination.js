import styles from "./Pagination.module.scss"

function Pagination({ page, onPagination, currentPage}) {
  return (
    <div
      className={`${styles.paginationItem} ${currentPage === page && styles.paginationItemSelected}`}
      onClick={() => onPagination(page)}
    >
      {page}
    </div>
  );
}

export default Pagination;
