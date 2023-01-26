import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(){
    return (
        <div >
            <div className="ui tabular menu">
               
                 <h2>Designer Wear</h2>
                <NavLink to='/'>Home </NavLink>
                <NavLink to='/addproduct'>Add Product</NavLink>
                
                <NavLink to='/search'>Search</NavLink>
            
                
                
                
                
        </div>
        </div>





          
          
          
    
        
    )
}

export default NavBar;