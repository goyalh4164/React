import React from 'react'
import "../styles/Header.css"
// to prevent page reloading we will use the 'Link' tag inplace of anchor tag
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/about"> About </Link></li>
        <li><Link to="/contact"> Contact </Link></li>
      </ul>
    </nav>
  )
}

export default Header
