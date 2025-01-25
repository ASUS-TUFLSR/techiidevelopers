import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { FaHandshake, FaShieldAlt } from 'react-icons/fa'
import { FaScrewdriverWrench } from 'react-icons/fa6'

const Choose = () => {
  return (
    <div>
        <Container>
            <h2 className='text-center mb-5' >Why Choose Us ?</h2>
            <Row className='g-4' >
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100' > 
                        <div className='mt-3'>
                            <FaScrewdriverWrench style={{height:"40px", width:"40px"}} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                Custom Solutions
                            </Card.Title>
                            <Card.Text className='text-center'>
                                We craft websites tailored to your specific needs and vision.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100' > 
                        <div className='mt-3'>
                            <FaShieldAlt style={{height:"40px", width:"40px"}} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                Support & Maintenance
                            </Card.Title>
                            <Card.Text className='text-center' >
                                We’re here for you even after the project is complete, offering reliable support.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100' > 
                        <div className='mt-3'>
                            <FaHandshake style={{height:"40px", width:"40px"}} /> 
                            {/* increase size of the icons */}
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                               Client-Centered Approach
                            </Card.Title>
                            <Card.Text className='text-center'>
                                Your satisfaction is our priority—we work closely with you at every step.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Choose