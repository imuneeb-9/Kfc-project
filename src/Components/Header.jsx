import React from 'react'
import '../Css/Navcss.css'
import kfclogo from './img/kfclogo.png'


export default function Navbar({cartcounter}) {
  return (
    <>
      <nav className="navbar sticky-top  navbar-expand-lg bg-dark text-danger border-bottom border-danger">
  <div className="container">
    <a className="navbar-brand logoname fs-1 ms-5" href="#"><img className='kfclogo' src={kfclogo} alt="" />KFC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto textmargin  mb-2 mb-lg-0 text-align-center mx-auto">
        <li className="nav-item">
          <a className="nav-link active text-light fs-5 m-2 fw-bold" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fs-5 m-2 fw-bold" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fs-5 m-2 fw-bold" href="#">Delivery</a>
        </li>
       
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control  mt-3 border-danger  " type="search" placeholder="Search" aria-label="Search"/>
        
        <button class="btn btn-outline-danger mt-3 ms-4" type="submit">Search</button>

        <button className="btn btn-danger mt-3 ms-4 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"  >Cart({cartcounter})</button>
      
      </form>
      </div>
      </div>
      </nav>
    </>
  )
}
