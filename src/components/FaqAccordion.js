import React from 'react'
import { Accordion, Container } from 'react-bootstrap'

const FaqAccordion = () => {
  return (
    <div className='faq-section' >
      <Container className='d-flex flex-column align-items-center'>
        <h2 className='text-center text-capitalize mb-5'>
            Frequently Asked Questions </h2>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                        What services do you offer ?
                    </Accordion.Header>
                    <Accordion.Body>
                        We specialize in creating custom websites tailored to your needs, 
                        including design, development, SEO optimization, and ongoing maintenance.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                        How long does it take to build a website ?
                    </Accordion.Header>
                    <Accordion.Body>
                        The timeline depends on the complexity of your project. 
                        A simple website typically takes 2–4 weeks, 
                        while more complex projects may take 6–8 weeks.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>
                        Do you offer support after the website is launched ?
                    </Accordion.Header>
                    <Accordion.Body>
                        Yes, we provide ongoing support and maintenance to 
                        ensure your website stays updated and runs smoothly.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>
                        Can I update my website on my own ?
                    </Accordion.Header>
                    <Accordion.Body>
                       Yes! We can build your website using user-friendly platforms, 
                       and we’ll provide training so you can manage updates easily.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>
                        Why should I choose your company ?
                    </Accordion.Header>
                    <Accordion.Body>
                        We combine creativity, technical expertise,
                         and a client-focused approach to deliver websites that exceed expectations.
                         Let’s create something amazing together!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
      </Container>
    </div>
  )
}

export default FaqAccordion