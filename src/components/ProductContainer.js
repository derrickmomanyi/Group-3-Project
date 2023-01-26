// main component // parent component that holds all components
//All

import React, {useState, useEffect} from "react";
import AddProduct from "./AddProduct";
import Search from "./Search";
import ProductList from "./ProductList";



function ProductContainer(){

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  

  useEffect(() => {
    fetch("http://localhost:8002/products")
    .then((res) => res.json())
    .then((products) => setProducts(products))
  }, [])
  console.log(products)


  function addProduct(newProduct) {
    const updatedProduct = [...products, newProduct]
    setProducts(updatedProduct)
  }

 
 
    return(
        <>
        
        <Search search = {search} setSearch = {setSearch}/>
        <AddProduct addProduct = {addProduct} />        
        <ProductList products = {products} search = {search} />
        
        
        </>
    )
}

export default ProductContainer;