import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const NavBar=()=>{
      const auth= localStorage.getItem('user');

      const navigate = useNavigate();
      const Logout=()=>{
        localStorage.clear();
        navigate("/SignUp");
        console.log("User logout");
      }
    return(
        <div>
          <ul className='nav-ul'>
            <li><Link to='/'>Products</Link></li>
             <li><Link to="/add">Add Products</Link></li>
              <li><Link to="/update">Update Products</Link></li>
               <li><Link to="/profile">Profile</Link></li>
               <li>{auth?<Link onClick={Logout} to="/SignUp">Logout</Link>:
                <Link to='/SignUp'>SignUp</Link>}</li>
          </ul>
    </div>
    )
}

export default NavBar