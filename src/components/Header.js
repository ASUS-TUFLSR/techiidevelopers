import React from 'react'
import { FaCode } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
     <Navbar expand='lg' className='position-absolute w-100 ' >
        <Container>
          <Navbar.Brand>
             <Link to='/' className='navbar-brand d-flex align-items-center' >
              <FaCode style={{color:"white"}} />
              <span className='mx-2 text-white lh-1 fw-semibold' >
                Techii Developers
              </span>
              </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light'/>
          <Navbar.Collapse id='basic-navbar-nav' >
            <Nav className='me-auto justify-content-end w-100'  >
                <Link to='/'  style={{margin:"15px"}} className={"link-styles"}>HOME</Link>
                <Link to='/About' style={{margin:"15px"}} className={"link-styles"}>ABOUT</Link>
                <Link to='/Blog' style={{margin:"15px"}} className={"link-styles"}>BLOG</Link>
                <Link to='/Testimonial' style={{margin:"15px"}} className={"link-styles"}>TESTIMONIALS</Link>
                <Link to='/contact' style={{margin:"15px"}}S className={"link-styles"}>CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  )
}

export default Header