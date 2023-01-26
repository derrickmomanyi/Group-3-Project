
import ProductContainer from "./components/ProductContainer";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddProduct from "./components/AddProduct";
import  Search  from "./components/Search";
import ProductCard from "./components/ProductCard";



function App() {
  return (
    <div >
      
      <NavBar/>
      

      <Routes>
        <Route path="/" element ={<ProductContainer />}/>
        <Route path="addproduct" element ={ <AddProduct />}/>
       
        <Route path="search" element ={ <Search />}/>
        
       
        
       
      </Routes>
      
     
      
    </div>
  );
}

export default App;
