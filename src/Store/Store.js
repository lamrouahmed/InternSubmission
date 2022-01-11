import React, {useEffect, useState} from "react"
import Product from "../Product/Product"
import styles from "./Store.module.scss"

function Store() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])  
  useEffect(() => {
    fetchProducts();
  }, [])  

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data)
    const cats = [...new Set(data.map((product) => product.category))]
    setCategories(cats);
  }
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product {...product} key = {product.id}/>
      ))}
    </div>
  );
}

export default Store;
