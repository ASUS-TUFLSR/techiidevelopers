import './App.css';
import React from 'react'
import { Outlet  } from "react-router-dom";
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';


const AppLayout = () => {
  return (
    <>
      <Header/>
      <main>
        <Container  style={{maxWidth:"1400px", paddingRight:"0px", paddingLeft:"0px"}} > 
          <Outlet/>
         </Container>
      </main>
      <Footer/>
    </>
  )
}

export default AppLayout;
