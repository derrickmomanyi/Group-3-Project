//search component to search by description
//Jackline
import React from "react";
import "../css/Search.css"

function Search({search, setSearch}){
    return (
        
      <div className="ui icon input">
          <input type= "text"
          placeholder="Search by Name"
          onChange = {(e)=> setSearch(e.target.value)}
          value= {search}
          />
          
          <i className="circular search link icon"></i>
      </div>
    )

}
export default Search;