import React, {useEffect, useState} from "react"
import Product from "../Product/Product"
import Pagination from "../Pagination/Pagination"
import styles from "./Store.module.scss"



function Store() {
  const LIMIT = 5
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')  
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('none')

  useEffect(() => {
    fetchProducts();
  }, [])  

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data)
    
  }
  
  
  const handlePagination = (selectedPage = 1) => { 
    setCurrentPage(selectedPage);
  }

  const handleSort = (type) => {
    setSortBy(type)
  }

   const handleFilter = (cat) => {
    setCategory(cat)
  }

  const SORTS = {
    none: (products) => products,
    price: (products) => products.sort((a, b) => b.price - a.price),
    rating: (products) => products.sort((a, b) => b.rating.rate - a.rating.rate),
  }

  const categories = [...new Set(products.map((product) => product.category))];

  
  const sortedProducts = SORTS[sortBy](products);
  const filteredProducts = category ? sortedProducts.filter(product => product.category === category) : sortedProducts;

  const start = currentPage * LIMIT - LIMIT;
  const end = start + LIMIT;
  const currentProducts = filteredProducts.slice(start, end);

  return (
    <>
      <div className={styles.products}>
        {currentProducts.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        {Array(Math.ceil(filteredProducts.length / 5))
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
      <div className="sort">
        <p onClick={() => handleSort("price")}>price</p>
        <p onClick={() => handleSort("rating")}>rating</p>
      </div>
      {categories.map((cat, i) => <div onClick={() => handleFilter(cat)} key={i}>{cat}</div>)}      
    </>
  );
}

export default Store;
