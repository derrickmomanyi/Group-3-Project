import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

function NavBar(){
    return (
        <div className='Nav'>
            
            <div className="ui container menu  ">
            <h3 className="title">Designer Wear</h3>
                 
                                   
                        <NavLink to='/' className="nav">Home </NavLink>
                        <NavLink to='/products' className="nav">Products</NavLink>
                        <NavLink to='/addproduct' className="nav">Add Product</NavLink> 
                        <NavLink to='/about' className="nav">About</NavLink> 
                        {/* <div class="right menu">
                            <a class="item">Logout</a>
                            </div> */}
                           
                        
                                </div>
                
                
                               
                
            
          
       
        </div>





          
          
          
    
        
    )
}

export default NavBar;