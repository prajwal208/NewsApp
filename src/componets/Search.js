import React from 'react'

function Search({search,setSearch}) {
    return (
        <>
         <input type="text" placeholder="Search..."
         value={search}
         onChange={(e) => setSearch(e.target.value.toLowerCase())}/>   
        </>
    )
}

export default Search
