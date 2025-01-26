import React from 'react'
import { Carousel, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import team from '../utils/images/friendly-coworkers.jpg'
import Choose from '../components/Choose'
import img1 from '../utils/images/js.png'
import img2 from '../utils/images/py.png.jpeg'
import img3 from '../utils/images/note.png (1).png'


const About = () => {


  const clients = [
    {
      id:1,
      title:"Brenden Eich",
      img:[img1],
    },
    {
      id:2,
      title:"Guido van Rossum",
      img:[img2],
    },
    {
      id:3,
      title:"Bill Gates",
      img:[img3],
    },
  ]

  return (
    <div className='about-page' >
         <header className="h-100 min-vh-100 d-flex align-items-center text-white" >
            <Container className="d-flex flex-column align-items-center" >
                <h2 className="text-center fw-semibold" >About Us</h2>
                <p className='text-center w-75 mb-5' >At Techii, we create custom, user-friendly websites that reflect your vision and deliver results.
                   Whether you’re a startup or an established brand, we combine modern design with 
                   innovative solutions to meet your unique needs. Your success is our priority—let’s 
                   build something amazing together!</p>
            </Container>
          </header>
          <Container className='my-5' >
            <Row>
     <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0' >
                <h2 className='mb-4 mb-lg-5' >Work With Us</h2>
                  <p>
                    where creativity meets technology. We specialize in crafting custom websites that 
                    reflect your vision and deliver real results. Whether you're a startup,
                     small business, or established brand, we are dedicated to building user-friendly 
                     and visually stunning websites that work seamlessly across all devices.
                  </p>
                  <p className='mb-4 mb-lg-5'>
                    Our solutions are tailored to meet your unique business needs, 
                    combining modern designs with innovative technology. With a passion 
                    for excellence and a commitment to your success, we’re more than just
                     a web design company—we’re your trusted digital partner. Let’s create 
                     something amazing together!
                  </p>
                  <Link to='/contact' >
                    <button className='btn btn-primary btn-lg mx-0 mx-sm-2 my-2 my-sm-0' >Contact Us</button>
                  </Link>
              </div>
                <div className='col-lg-6 d-flex justify-content-center' >
                  <img src={team} className='img-fluid w-80' alt="img" />
                </div>
              </Row>

          </Container>
          <div className='py-5 bg-dark text-light ' >
            <Choose/>
          </div>
        
      <div className='py-5' >
        
            <h2 className='text-center'>Our Clients</h2>
              <Carousel pause='hover' className='bg-dark mb-4'  >
      {clients.map((client) => (

         
        <Carousel.Item key={client.id} style={{textAlign:'center'}} >
                <Carousel.Caption style={{background:'none', top: '0px',color: '#fff',paddingBottom: '20px', paddingTop: '20px', textAlign: 'center',zIndex: '10',}} >
              <h2 className='text-white' style={{fontSize:'1.4rem', padding:'.5rem 0',}}  >
                {client.title}
              </h2>
            </Carousel.Caption>
            <Image  src={client.img} alt={client.title} style={{width:'30%', margin:'5px',padding:'20px', borderRadius:'20%'}} fluid />
        </Carousel.Item>
      ))}
    </Carousel>

        
      </div>

     
    </div>
  )
}

export default About