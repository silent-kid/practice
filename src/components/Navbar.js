import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'

const Navbar = ({videoRating}) => {
  return (
    <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Contact</Link>
        Video Rating = {videoRating}
    </div>
  )
}

export default Navbar
