import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import JSblog from '../utils/images/js.png'
import Noteblog from '../utils/images/note.png (1).png'
import Pyblog from '../utils/images/py.png.jpeg'
import AIblog from '../utils/images/AIN.jpeg'
import Sblog from '../utils/images/steve-jobs-toolshero.jpg'
import Mblog from '../utils/images/musk.webp'


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
            img:[Sblog],
            title:"Steve Jobs: The Visionary Innovator",
            description:"Steve Jobs, co-founder of Apple Inc., was a pioneer whose vision reshaped the tech industry. Born in 1955, Jobs revolutionized personal computing, music, and communication with iconic products like the Macintosh, iPod, iPhone, and iPad.Known for his relentless focus on design and user experience, Jobs believed in creating technology that felt intuitive and elegant. His philosophy of connecting the dots and pushing boundaries inspired groundbreaking innovations"
        },
        {
            id:5,
            img:[AIblog],
            title:"Geoffrey Hinton: The Godfather of AI",
            description:"Geoffrey Hinton: The Godfather of AI Geoffrey Hinton, a pioneer in artificial intelligence, revolutionized the field with his work on neural networks. His development of the backpropagation algorithm in the 1980s and AlexNet in 2012 laid the foundation for modern deep learning, driving advancements in industries like healthcare and technology.Hinton’s contributions earned him the 2018 Turing Award, and his work at Google continues to inspire AI innovation. His legacy defines the future of intelligent technologies."
        },
        {
            id:6,
            img:[Mblog],
            title:"Elon Musk: Visionary Entrepreneur",
            description:"Elon Musk, the founder of Tesla, SpaceX, Neuralink, and The Boring Company, is a pioneer in technology and innovation. From revolutionizing electric vehicles to advancing space exploration, Musk’s ventures aim to shape the future. SpaceX’s reusable rockets and Tesla’s breakthroughs in sustainable energy have made him a global icon. Known for bold ideas like colonizing Mars and integrating AI with humanity, Musk continues to inspire and challenge the boundaries of what’s possible, redefining the future one innovation at a time."
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