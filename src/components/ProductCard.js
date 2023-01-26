//component to display fetched data from server
//Derick
import React, { useState } from 'react'
import ShoppingList from './ShoppingList';

function ProductCard({ name, price, image,  description, category, rating}){
  
  const [isAddedToCart, setIsAddedToCart] = useState(true);
 
  function handleClick(){
   setIsAddedToCart((isAddedToCart) => !isAddedToCart)
}
    
   
    return(
        <>
   
   <div className=" column">    
    <div className="ui card ">
      <div className=" image">
        <img alt="product!" src={image} />
      </div>
      <div className="content">
        <div className="header">
          {name}         
          
         
        </div>
        <div className="meta text-wrap">
          <p>Category: {category}</p>
        <p>Price: Ksh {price}</p>
          <small>Description: {description}</small>
        </div>
      </div>
      <div className="extra content">
        
          <div className="ui center aligned segment basic ">
          <p>Rating: {rating}/5</p>
            
            <button
              className= {isAddedToCart ? "ui mini orange button" : "ui mini red button" }
              onClick={handleClick}
              
            >
              <i className= "icon cart"></i>
              {isAddedToCart ? "Add To" : "Remove From" } Cart
            </button>
            
          </div>
       
      </div>
    </div>
  </div>
  <ShoppingList category = {category}/>
 
        </>
    )
}

export default ProductCard;