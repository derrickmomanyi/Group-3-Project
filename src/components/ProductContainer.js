// main component // parent component that holds all components
//All

import React, {useState, useEffect} from "react";
import AddProduct from "./AddProduct";

import ProductList from "./ProductList";


function ProductContainer(){

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/products")
    .then((res) => res.json())
    .then((products) => setProducts(products))
  }, [])
  console.log(products)

<<<<<<< HEAD
  function addProduct(newProduct) {
    const updatedProduct = [...products, newProduct]
    setProducts(updatedProduct)
  }

=======
>>>>>>> a0bcd9864b41be4a13f702fb189a88b27677affb
 
    return(
        <>
        <AddProduct addProduct = {addProduct}/>        
        <ProductList products = {products}/>
        
        </>
    )
}

export default ProductContainer;