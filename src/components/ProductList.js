import React from 'react';
import ProductCard from './ProductCard';

function ProductList({products, search}){
   
   
   
    
   
    const displayProducts = products
    .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    
    
    .map((product) => (
     <ProductCard 
      key = {product.id} 
    name = {product.title} 
    price = {product.price}
    description = {product.description}
    category = {product.category}
    image = {product.image}
    rating = {product.rating.rate}
    
    
     
     />
    

    

   
    ))



    
    return(
        <div className = "ui four column grid">
          <div className='row'>
            
        {displayProducts}
       
        </div>
        </div>
    )
}

export default ProductList;