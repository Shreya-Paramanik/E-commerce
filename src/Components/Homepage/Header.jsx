import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='Header_div'>
        <div className='Logo'>
          <h1>Logo</h1>
        </div>
        <input className = 'searchBar' placeholder='Search Here'/>
        <div className='right_section'>
          <h5>Log In</h5>
          <h5>Wishlist</h5>
          <h5>Cart</h5>

        </div>
      </div>
  )
}

export default Header