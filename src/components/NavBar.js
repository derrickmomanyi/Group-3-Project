import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(){
    return (
        <div >
            <div className="ui menu">
               
                 <h3>Designer Wear</h3>
                 <div>
                  
                        <NavLink to='/'>Home </NavLink>
                        <NavLink to='/products'>Products</NavLink>
                        <NavLink to='/addproduct'>Add Product</NavLink> 
                        <NavLink to='/about'>About</NavLink> 
                        {/* <div class="right menu">
                            <a class="item">Logout</a>
                            </div> */}
                            </div>
                        
                                </div>
                
                
                               
                
            
          
       
        </div>





          
          
          
    
        
    )
}

export default NavBar;