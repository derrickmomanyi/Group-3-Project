//component to display fetched data from server
//Derick
import React from 'react'

function ProductCard({ name, price, image,  description, category, rating, count}){

   
    return(
        <>
   <div className="ui column ">
    <div
      className="ui card"
            
    >
      <div className="image">
        <img alt="product!" src={image} />
      </div>
      <div className="content">
        <div className="header">
          {name}
          
          
         
        </div>
        <div className="meta text-wrap">
          <p>Category: {category}</p>
        <p>Price: Ksh {price}</p>
          <small>{description}</small>
        </div>
      </div>
      <div className="extra content">
        
          <div className="ui center aligned segment basic">
          <p>Rating: {rating}/5</p>
            
            <button
              className="ui mini red button"
              // onClick={() =>
              //   console.log("add buy button function")
              // }
            >
              Add To Cart
            </button>
            <p>{count} items left</p> 
          </div>
       
      </div>
    </div>
  </div>
        </>
    )
}

export default ProductCard;