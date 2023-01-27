// main component // parent component that holds all components
//All

import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Search from "./Search";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import "../css/ProductContainer.css"


function ProductContainer(){

  
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate();
  


  useEffect(() => {
    fetch("https://json-products-server.onrender.com/products")
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
        {<button className = "btn" onClick={() => navigate("/addproduct", <AddProduct addNewProduct = {addNewProduct} />)}>Go to Add Product</button> }
        
        
        
        </>
    )
}

export default ProductContainer;