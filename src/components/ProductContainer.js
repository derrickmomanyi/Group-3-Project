// main component // parent component that holds all components
//All

import React, {useState, useEffect} from "react";


import ProductCard from "./ProductCard"


function ProductContainer(){

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/products")
    .then((res) => res.json())
    .then((products) => setProducts(products))
  }, [])
  console.log(products)
    return(
        <>
                
        <ProductCard />
        
        </>
    )
}

export default ProductContainer;