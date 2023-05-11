import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='head'>
        <span className='logo'>
     TY
     <span style={{fontSize:"15px"}}>TYPESCRIPT</span>
            </span>
            
        <div className='nav'>
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/cart' className='nav-item'>Cart</Link>
        
        </div>
        <span className='CartCounter'>Item:0</span>
    </div>
  )
}

export default NavBar