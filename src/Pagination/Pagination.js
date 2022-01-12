import styles from "./Pagination.module.scss";

function Pagination({ onPagination, currentPage, size }) {
  return (
    <div className={styles.paginationContainer}>
      {Array(size)
        .fill()
        .map((e, i) => (
          <div
            className={`${styles.paginationItem} ${
              currentPage === i + 1 && styles.paginationItemSelected
            }`}
            onClick={() => onPagination(i + 1)}
            key={i}
          >{i+1}</div>
        ))}
    </div>
  );
}

export default Pagination;
