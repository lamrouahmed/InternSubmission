import styles from "./Sort.module.scss";

function Sort({ onSort, sortBy }) {
  return (
    <div className={styles.sortContainer}>
      <select value={sortBy} onChange={onSort}>
        <option value="none">Sort By</option>
        <option value="price">price</option>
        <option value="rating">rating</option>
      </select>
    </div>
  );
}

export default Sort;
