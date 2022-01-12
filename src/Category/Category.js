import styles from "./Category.module.scss";

function Category({ categories, onFilter, currentCategory }) {
  return (
    <div className={styles.categoriesContainer}>
      <select value={currentCategory} onChange={onFilter}>
        <option value="">Category</option>
        {categories.map((cat, i) => (
          <option value={cat} key={i}>{cat}</option>
        ))}
      </select>
    </div>
  );
}

export default Category;
