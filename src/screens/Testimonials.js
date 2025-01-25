import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import t1 from '../utils/images/modern-website-design-03.png'
import t2 from '../utils/images/modern-website-design-examples.jpg'
import t3 from '../utils/images/sterling-700x380.jpg'
import t4 from '../utils/images/5781568.jpg'
import t5 from '../utils/images/Screenshot 2025-01-25 215215.png'
import t6 from '../utils/images/igloo.png'
import { Link } from 'react-router-dom'


const Testimonials = () => {


    const blogs = [
    
      {
            id:1,
            img:[t1],
            title:"Web",
            description:""

        },
        {
            id:2,
            img:[t2],
            title:"Time",
            description:""
        },
        {
            id:3,
            img:[t3],
            title:"AI",
            description:""
        },
        {
            id:4,
            img:[t4],
            title:"Time",
            description:""
        },
        {
            id:5,
            img:[t5],
            title:"Python",
            description:""
        },
        {
            id:6,
            img:[t6],
            title:"Guido AI",
            description:""
        }
    
  ]


  return (
    <div className='test-page'>
      <header className="h-100 min-vh-100 d-flex align-items-center text-white" >
            <Container className="d-flex flex-column align-items-center" >
                <h1 className="text-center fw-semibold" >What Our Clients Say</h1>
                <p className='text-center w-75 mb-5'>
                  We bring our clients’ visions to life with stunning websites tailored
                   to their needs. Don’t just take our word for it—hear how we’ve helped 
                   businesses succeed through innovation and dedication.</p>
            </Container>
          </header>
          <div className="blog-section text-light py-5" >
            <Container className="d-flex flex-column align-items-center" >
                <h2 className="text-center text-capitalize mb-5" >TESTIMONIALS</h2>
                <Row className="g-4" >
                    {blogs.map((blog) => (
                        <div key={blog.id} className="col-md-6 col-lg-4" >
                            <Link to='/Blog' className="text-decoration-none" >
                              <Card className="h-100 shadow scale-hover-effect" >
                                 <Card.Img variant="top" src={blog.img} />
                                 <Card.Body>
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

export default Testimonials