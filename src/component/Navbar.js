import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header>
        <h1 className="logo">
            <Link to='/'>
            <img src={logo} alt="logo" />
            SPWO
            </Link>
        </h1>
        <nav className="gnb">
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/shop'>SHOP</NavLink>
            <NavLink to='/new'>NEW</NavLink>
            <NavLink to='/best'>BEST</NavLink>
            <NavLink to='/qna'>Q&A</NavLink>
        </nav>
    </header>
  )
}

export default Navbar