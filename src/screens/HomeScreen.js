import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';
import Choose from "../components/Choose";
import prof from '../utils/images/corporate-workers-brainstorming-together.jpg'
import FaqAccordion from "../components/FaqAccordion";
import JSblog from '../utils/images/js.png.webp'
import Noteblog from '../utils/images/note.png (1).png'
import Pyblog from '../utils/images/py.png.jpeg'

const HomeScreen = () => {


    const blogs = [
        {
            id:1,
            img:[JSblog],
            title:"Brendan Eich: JavaScript’s 10-Day Creation That Changed the Web",
            description:"In 1995, Brendan Eich created JavaScript in just 10 days. Initially meant for adding interactivity to web pages, it now powers everything from dynamic websites to full-stack applications. JavaScript’s impact on the modern web is immeasurable, making Eich a true tech pioneer."

        },
        {
            id:2,
            img:[Noteblog],
            title:"Bill Gates’ Notepad: Simplicity That Stood the Test of Time",
            description:"Introduced in 1985 with Windows 1.0, Notepad reflects Bill Gates' vision of productivity through simplicity. Lightweight and distraction-free, it remains a favorite tool for quick notes and code editing. Even in a world of advanced editors, Notepad proves that sometimes less is more."
        },
        {
            id:3,
            img:[Pyblog],
            title:"Guido van Rossum: The Creator of Python Driving AI",
            description:"Guido van Rossum designed Python in 1991, aiming for simplicity and readability. Today, Python powers AI innovations, thanks to its robust libraries like TensorFlow and PyTorch. Its ease of use and active community have made it the top choice for data science and machine learning, shaping the AI revolution."
        }
    ]

    return(
        <div className="home-page" >
          <header className="h-100 min-vh-100 d-flex align-items-center text-white" >
            <Container className="d-flex flex-column align-items-center" >
                <h2>Welcome To</h2>
                <h1 className="text-center fw-semibold" >Techii Developers</h1>
                <p>We specialize in crafting custom websites tailored to your unique needs.
                    Let us bring your vision to life with designs that inspire and solutions that deliver.
                    Explore our work and let's create something amazing together!"</p>
                <div className="d-flex flex-column flex-sm-row align-items-center" >
                    <Link to='/Testimonial' >
                        <button type="button" className="btn btn-primary btn-lg mx-0 mx-sm-2 my-2 my-sm-0" >
                            Testimonials
                            </button>
                    </Link>
                    <Link to='/contact' >
                        <button type="button" className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0" >
                            Contact Us
                            </button>
                    </Link>
                </div>
            </Container>
          </header>
          <div className="py-5" >
            <Choose/>
          </div>
          <div className="py-5 bg-light">
                <Container>
                    <Row className="d-flex align-items-center justify-content-ground " >
                        <div className="col-lg-5" >
                            <h2>Expert Team</h2>
                            <p>Our experienced professionals are skilled in the latest technologies and trends.</p>
                            <Link to='/contact' >
                             <button type="button" className="btn btn-primary btn-lg mx-0 mx-sm-2 my-2 my-sm-0" >
                                Learn More</button>
                            </Link>
                        </div>
                        <div className="col-lg-5 mt-5 mt-lg-0" >
                            <img src={prof} className="img-fluid" alt="team"/>
                        </div>
                    </Row>
                </Container>
          </div>
          <div className="py-5" >
            <FaqAccordion/>
          </div>
          <div className="blog-section text-light py-5" >
            <Container className="d-flex flex-column align-items-center" >
                <h2 className="text-center text-capitalize mb-5" >Latest On The Blog</h2>
                <Row className="g-4" >
                    {blogs.map((blog) => (
                        <div key={blog.id} className="col-md-6 col-lg-4" >
                            <Link to='/Blog' className="text-decoration-none" >
                              <Card className="h-100 shadow scale-hover-effect" >
                                 <Card.Img variant="top" src={blog.img} />
                                 <Card.Body className="p-md-5" >
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text>{blog.description}</Card.Text>
                                 </Card.Body>
                              </Card>
                            </Link>
                        </div>
                    ))}
                </Row>
                <Link to='/Blog'>
                  <button type="button" className="btn btn-primary btn-lg mt-5 " >Read More Blogs</button>
                 </Link>
            </Container>
          </div>
          
        </div>
    )
}

export default HomeScreen;