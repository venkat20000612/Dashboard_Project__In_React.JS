import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Navbar.css'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-color">
    <div className='search-background'>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle nav-dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          patients
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">HR</a>
          <a className="dropdown-item" href="#">Labs</a>
          <a className="dropdown-item" href="#">Pharma</a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0 search-bar">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      
    </form>
    <button type='submit' className='search-icon'><FontAwesomeIcon icon={faSearch}/></button>
    <button className="btn btn-outline-success my-2 my-sm-0 add-btn">+ Add New</button>
  </div>
  </div>
  <i className='notification-bell'><FontAwesomeIcon icon={faBell}/></i>
  <img className='nav-image' src="images/team-1.jpg" alt="JAVA"/>
</nav>
    
    
  )
}

export default Navbar