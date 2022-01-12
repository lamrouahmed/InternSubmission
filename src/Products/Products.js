import styles from "./Products.module.scss";
import Product from "../Product/Product";

function Products({ products }) {
  return (
    <>
      <div className={styles.products}>
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default Products;
