//search component to search by description
//Jackline
import React from "react";

function Search({search, setSearch}){
    return (
        
      <div className="ui icon input">
          <input type= "text"
          placeholder="Search by Name"
          onChange = {(e)=> setSearch(e.target.value)}
          value= {search}
          >
           
          </input>
      </div>
    )

}
export default Search;