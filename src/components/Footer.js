import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaMeta } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {

    const currentYear = new Date().getFullYear();


   return(
    <footer>
        <Container className="my-5" >
            <Row className="d-flex justify-content-between align-items-center" >
                <div className="col-md-4" >
                    <Link to='/contact' >
                     <button type="button" className="btn btn-outline-primary btn-lg mb-md-5" >
                        Get In Touch
                     </button>
                     </Link>
                     <span className="footer-social-icons d-flex justify-content-between" >
                       <Link to='/contact' >
                            <span >
                                <FaMeta className="fa-cons m-3" style={{height:"40px", width:"40px"}} />
                            </span>
                            <span  >
                                <FaLinkedin className="fa-cons m-3" style={{height:"40px", width:"40px"}} />
                            </span>
                            <span>
                                <RiTwitterXFill className="fa-cons m-3" style={{height:"40px", width:"40px"}} />
                            </span>
                        </Link>
                     </span>
                </div>
                <div className="col-md-7 col-lg-6">
                    <div className="d-row d-md-flex justify-content-between  align-items-center " >
                        <div className="col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0" >
                            <ul className="footer-navigation list-unstyled mb-0" >
                                <Link to='/' className="text-decoration-none text-primary" >
                                    <li className="fw-semibold" >HOME</li>
                                </Link>
                                <Link to='/About' className="text-decoration-none text-primary" >
                                    <li className="fw-semibold" >ABOUT</li>
                                </Link>
                                <Link to='/Blog' className="text-decoration-none text-primary" >
                                    <li className="fw-semibold" >BLOG</li>
                                </Link>
                                <Link to='/Testimonial' className="text-decoration-none text-primary" >
                                    <li className="fw-semibold" >TESTIMONIALS</li>
                                </Link>
                                <Link to='/contact' className="text-decoration-none text-primary" >
                                    <li className="fw-semibold" >CONTACT US</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-7" >     
                            <ul className="list-unstyled mb-0" >
                             <li>
                              <p>Main Address - Hinjewadi Phase I, Pune India</p>
                            </li>    
                             <li>
                              <p>Phone Number - +91 0012454637</p>
                            </li>    
                             <li>
                              <p>Email - techiiideveloperspvt@gmail.com</p>
                            </li>    
                            </ul>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col className="text-center bg-body-tertiary py-3" >
                  <p>Techii Developers &copy; {currentYear}</p>
                 </Col>
            </Row>
        </Container>
    </footer>
   )
}

export default Footer;

