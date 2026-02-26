import React from 'react';
import { Link } from 'react-router-dom';
const NavBar=()=>{
    return(
        <div>
        <ul className='nav-ul'>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/Add">Add Product</Link></li>
            <li><Link to ="/Update">UpdateProduct</Link></li>
            <li><Link to ="/Logout">Logout </Link></li>
            <li><Link to ="/Profile">Profile</Link></li>
        </ul>
    </div>
    )
}

export default NavBar