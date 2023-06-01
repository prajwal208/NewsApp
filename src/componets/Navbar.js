import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav>
                <header>NewsApp</header>
                <ul>
                    <li>Trending News</li>
                        <li>Popular</li>
                        <Link to='/'><li>News</li></Link>
                        
                </ul> 
            </nav>   
        </>
    )
}

export default Navbar
