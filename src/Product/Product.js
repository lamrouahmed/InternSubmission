import styles from "./Product.module.scss";
import { ReactComponent as Star } from "./star.svg";
function Product({
  title,
  price,
  description,
  category,
  image,
  rating: { rate, count },
}) {
  return (
    <>
      <div className={styles.product}>
        <div className={styles.img}>
          <img src={image} alt="product" />
        </div>
        <div className={styles.productDetail}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>
            {description.slice(0, 30)}...
          </div>
        </div>
        <div className={styles.category}>{category}</div>
        <div className={styles.price}>{price}$</div>
        <div className={styles.rating}>
          <div className={styles.stars}>
            {Array(5)
              .fill()
              .map((e, i) => (
                <Star
                  key={i}
                  className={i < Math.floor(rate) ? styles.filled : ""}
                />
              ))}
          </div>
          <div className={styles.count}>
            {rate}({count})
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
