import React, {useEffect, useState} from "react"
import Product from "../Product/Product"
import Pagination from "../Pagination/Pagination"
import styles from "./Store.module.scss"



function Store() {
  const LIMIT = 5
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])  
  const [currentPage, setCurrentPage] = useState(1)
  const [displayedProducts, setDisplayedProducts] = useState([])

  useEffect(() => {
    fetchProducts();
  }, [])  

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data)
    const cats = [...new Set(data.map((product) => product.category))]
    setCategories(cats);
    handlePagination(currentPage, data)
  }
  
  
  const handlePagination = (selectedPage = 1, data = products) => { 
    const start = selectedPage * LIMIT - LIMIT
    const end = start + LIMIT
    setCurrentPage(selectedPage);
    setDisplayedProducts(data.slice(start, end))
  }

  const sortProducts = (type) => {
    setProducts(SORTS[type](products))
    handlePagination(currentPage, products)
  }


  const SORTS = {
    price: (products) => products.sort((a, b) => b.price - a.price),
    rating: (products) => products.sort((a, b) => b.rating.rate - a.rating.rate),
  }

  return (
    <>
      
      <div className={styles.products}>
        {displayedProducts.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        {Array(Math.ceil(products.length / 5))
          .fill()
          .map((e, i) => (
            <Pagination
              page={i + 1}
              onPagination={handlePagination}
              key={i}
              currentPage={currentPage}
            />
          ))}
      </div>
      {/* <div className="sort">
        <p onClick={() => sortProducts("price")}>price</p>
        <p onClick={() => sortProducts("rating")}>rating</p>
      </div> */}

    </>
  );
}

export default Store;
