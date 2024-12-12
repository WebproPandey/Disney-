import React, { useState } from 'react'
const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value.toLowerCase());
    };
  
  
    return (
        <div>
        <div className="search-component absolute right-[-40%] top-1/2 -translate-y-1/2">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black text-black"
          />
        </div>
      </div>
    );
  };
  

export default Search