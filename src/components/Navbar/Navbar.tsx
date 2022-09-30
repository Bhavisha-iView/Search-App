import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { login, signUp } from '../../redux/actions/SearchAction'
import './Navbar.css'

const Navbar = () => {

    let signupData : any = localStorage.getItem('signup')

    let signupName = JSON.parse(signupData).name

    // console.log(JSON.parse(signupData).name)

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/home"><img src='https://i.pinimg.com/736x/08/73/0b/08730b6f81bdc2177804f101abdfe1a9.jpg' className='logo' /></Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item nameOfUser">  
                    <div className="nav-link">{signupName}</div>
                </li>
                </ul>
        </div>

        <div className='page-links'>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item" >  
                    <Link to='/imageSearch' className="nav-link">Images</Link>
                </li>
                </ul>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">  
                    <Link to='/newsSearch' className="nav-link">News</Link>
                </li>
                </ul>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">  
                    <Link to='/login' className="nav-link" onClick={() => localStorage.removeItem('login')} >Logout</Link>
                </li>
                </ul>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">  
                    <Link to='/' className="nav-link" onClick={() => 
                        {localStorage.removeItem('login')
                         localStorage.removeItem('signup')}} >Delete Account</Link>
                </li>
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navbar