// main component // parent component that holds all components
//All

import React, {useState, useEffect} from "react";

import Search from "./Search";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";



function ProductContainer(){

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  
  

  useEffect(() => {
    fetch("http://localhost:8002/products")
    .then((res) => res.json())
    .then((products) => setProducts(products))
  }, [])

  console.log(products);

  function addNewProduct(newProduct) {
    const updatedProduct = [...products, newProduct]
    setProducts(updatedProduct)
  }
 
    return(
        <>
        
        <Search search = {search} setSearch = {setSearch}/>               
        <ProductList products = {products} search = {search} />
        <AddProduct addNewProduct={addNewProduct}/>
        
        
        </>
    )
}

export default ProductContainer;