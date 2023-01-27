
import ProductContainer from "./components/ProductContainer";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddProduct from "./components/AddProduct";
import  About  from "./components/About";
import Footer from "./components/Footer";
import AddToCart from "./components/AddToCart";




function App() {
 

  return (
    <div>
      
      <NavBar/>
      

      <Routes>
        
        <Route path="addproduct" element ={ <AddProduct   />}/>
        <Route path="products" element = {<ProductContainer />} />       
        <Route path="about" element ={ <About />}/>
        <Route path="addtocart" element = { <AddToCart />} />
    
        
       
        
       
      </Routes>

      <Footer />
      
     
      
    </div>
  );
}

export default App;
