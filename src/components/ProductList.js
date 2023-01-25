import React from 'react';
import ProductCard from './ProductCard';

function ProductList({products}){

    const displayProducts = products.map((product) => (
     <ProductCard 
      key = {product.id} 
    name = {product.title} 
    price = {product.price}
    description = {product.description}
    category = {product.category}
    image = {product.image}
    rating = {product.rating.rate}
    count = {product.rating.count}
     
     />
    ))
    return(
        <>
        {displayProducts}
        </>
    )
}

export default ProductList;