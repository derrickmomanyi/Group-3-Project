
import ProductContainer from "./components/ProductContainer";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddProduct from "./components/AddProduct";
import  About  from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";




function App() {
 

  return (
    <div>
      
      <NavBar/>
      

      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="addproduct" element ={ <AddProduct   />}/>
        <Route path="products" element = {<ProductContainer />} />       
        <Route path="about" element ={ <About />}/>
    
        
       
        
       
      </Routes>

      <Footer />
      
     
      
    </div>
  );
}

export default App;
