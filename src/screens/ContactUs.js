import React from "react";
import { Carousel, Col, Container, Form, Image, Row } from "react-bootstrap";
import img1 from '../utils/images/h1.jpeg'
import img2 from '../utils/images/h2.jpeg'
import img3 from '../utils/images/h3.jpeg'


const ContactUs = () => {

        
  const clients = [
    {
      id:1,
      title:"Hinjewadi",
      img:[img1],
    },
    {
      id:2,
      title:"Eon Park",
      img:[img2],
    },
    {
      id:3,
      title:"Baner I",
      img:[img3],
    },
  ]

    return(
        <div className="contact-page" >
            <header className="h-100 min-vh-100 d-flex align-items-center text-white" >
            <Container className="d-flex flex-column align-items-center" >
                <h1 className="text-center fw-semibold" >Contact Us</h1>
                <p className='text-center w-75 mb-5'>We’re here to bring your ideas to life!
                     Whether you have a project in mind, need support, or just want to say hello, 
                     we’d love to hear from you. 
                    Let’s connect and create something extraordinary together!</p>
            </Container>

          </header>
          <Container className="my-5 d-flex justify-content-center" >
            <Form className="contact-form" >
                <Row className="mb-3" >
                    <Col sm={12} md={6} className="mb-3 mb-md-0" >
                      <Form.Label>First Name</Form.Label>
                      <Form.Control placeholder="First Name"/>
                    </Col>
                    <Col sm={12} md={6} className="mb-3 mb-md-0" >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control placeholder="Last Name"/>
                    </Col>
                </Row>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control  type="email" placeholder="Enter Email" />
                    <Form.Text>
                        we'll never share your email with anyone else
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="your address" />
                </Form.Group>


                <Row className="mb-3">
                    <Col sm={12} md={6} className="mb-3 mb-md-0" >
                      <Form.Label>Location</Form.Label>
                      <Form.Select defaultValue='Pune' >
                        <option>Hinjewadi Phase I </option>
                        <option>Eon Park</option>
                        <option>Baner I</option>
                      </Form.Select>
                    </Col>
                   <Col sm={12} md={6} className="mb-3 mb-md-0" >
                           <Form.Label>PostCode</Form.Label>
                           <Form.Control placeholder="Post-Code" />             
                    </Col>

                </Row>
                <Form.Group className="mb-3" >
                <Form.Label>Your Message</Form.Label>
                <Form.Control as='textarea' rows={3} /> 
               </Form.Group>
               <button className="btn btn-primary btn-lg mx-0 mx-sm-2 my-2 my-sm-0"  >Submit</button>
            </Form>
          </Container>

           <div className='py-5' >
        r
            <h2 className='text-center'>Location</h2>
              <Carousel pause='hover' className='bg-dark mb-4'  >
      {clients.map((client) => (

         
        <Carousel.Item key={client.id} style={{textAlign:'center'}} >
                <Carousel.Caption style={{background:'none', top: '0px',color: '#fff',paddingBottom: '20px', paddingTop: '20px', textAlign: 'center',zIndex: '10',}} >
              <h2 className='text-white' style={{fontSize:'1.4rem', padding:'.5rem 0',}}  >
                {client.title}
              </h2>
            </Carousel.Caption>
            <Image  src={client.img} alt={client.title} style={{width:'30%', margin:'5px',padding:'20px', borderRadius:'8%'}} fluid />
        </Carousel.Item>
      ))}
    </Carousel>

        
      </div>

        </div>

        
    )
}

export default ContactUs;