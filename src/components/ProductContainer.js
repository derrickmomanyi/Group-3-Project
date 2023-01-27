// main component // parent component that holds all components
//All

import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Search from "./Search";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";



function ProductContainer(){

  
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate();
  


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
 
  // function addProduct(){
  //   navigate("/addproduct", <AddProduct addNewProduct = {addNewProduct} />) 
  // }
 
    return(
        <>
         
        <Search search = {search} setSearch = {setSearch}/>               
        <ProductList products = {products} search = {search} />
        {<button onClick={() => navigate("/addproduct", <AddProduct addNewProduct = {addNewProduct} />)}></button> }
        
        
        
        </>
    )
}

export default ProductContainer;