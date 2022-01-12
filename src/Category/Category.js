import styles from "./Category.module.scss";

function Category({ categories, onFilter, currentCategory }) {
  return (
    <>
      <select value={currentCategory} onChange={onFilter}>
        <option value="">Category</option>
        {categories.map((cat, i) => (
          <option value={cat}>{cat}</option>
        ))}
      </select>
    </>
  );
}

export default Category;
