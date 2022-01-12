import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import Pagination from "../Pagination/Pagination";
import Category from "../Category/Category";
import Sort from "../Sort/Sort";
import styles from "./Store.module.scss";

function Store() {
  const LIMIT = 5;
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("none");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  const handlePagination = (selectedPage = 1) => {
    setCurrentPage(selectedPage);
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilter = (event) => {
    setCategory(event.target.value);
    setCurrentPage(1);
  };

  const SORTS = {
    none: (products) => products,
    price: (products) => products.sort((a, b) => b.price - a.price),
    rating: (products) => products.sort((a, b) => b.rating.rate - a.rating.rate)
  };

  const categories = [...new Set(products.map((product) => product.category))];

  const sortedProducts = SORTS[sortBy](products);
  const filteredProducts = category
    ? sortedProducts.filter((product) => product.category === category)
    : sortedProducts;

  const start = currentPage * LIMIT - LIMIT;
  const end = start + LIMIT;
  const currentProducts = filteredProducts.slice(start, end);

  return (
    <>
      <Category
        categories={categories}
        onFilter={handleFilter}
        currentCategory={category}
      />
      <Sort onSort={handleSort} sortBy={sortBy} />
      <Products products={currentProducts} />
      <Pagination
        onPagination={handlePagination}
        currentPage={currentPage}
        size={Math.ceil(filteredProducts.length / LIMIT)}
      />
    </>
  );
}

export default Store;
