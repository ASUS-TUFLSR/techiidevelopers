import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import JSblog from '../utils/images/js.png.webp'
import Noteblog from '../utils/images/note.png.webp'
import Pyblog from '../utils/images/py.png.jpeg'


const Blog = () => {

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
        },
        {
            id:4,
            img:[Noteblog],
            title:"Bill Gates’ Notepad: Simplicity That Stood the Test of Time",
            description:"Introduced in 1985 with Windows 1.0, Notepad reflects Bill Gates' vision of productivity through simplicity. Lightweight and distraction-free, it remains a favorite tool for quick notes and code editing. Even in a world of advanced editors, Notepad proves that sometimes less is more."
        },
        {
            id:5,
            img:[Pyblog],
            title:"Guido van Rossum: The Creator of Python Driving AI",
            description:"Guido van Rossum designed Python in 1991, aiming for simplicity and readability. Today, Python powers AI innovations, thanks to its robust libraries like TensorFlow and PyTorch. Its ease of use and active community have made it the top choice for data science and machine learning, shaping the AI revolution."
        },
        {
            id:6,
            img:[Pyblog],
            title:"Guido van Rossum: The Creator of Python Driving AI",
            description:"Guido van Rossum designed Python in 1991, aiming for simplicity and readability. Today, Python powers AI innovations, thanks to its robust libraries like TensorFlow and PyTorch. Its ease of use and active community have made it the top choice for data science and machine learning, shaping the AI revolution."
        }
    
  ]

  return (
    <div className='blog-page' >
<header className="h-100 min-vh-100 d-flex align-items-center text-white" >
            <Container className="d-flex flex-column align-items-center" >
                <h1 className="text-center fw-semibold" >Blog</h1>
                <p className='text-center w-75 mb-5'>Dive into the world of code with our latest tips, tutorials, and insights.
                   From web development techniques to programming best practices, 
                   our blog is your go-to resource for everything tech.
                    Whether you're a beginner or a seasoned developer, there’s 
                    something here for you. Let’s build something amazing together!</p>
            </Container>
          </header>
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
            </Container>
          </div>
    </div>
  )
}

export default Blog