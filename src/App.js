import './App.css';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { Link, Routes, RouterProvider, Route, createBrowserRouter, Outlet  } from "react-router-dom";
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen'
import About from './screens/About'
import Blog from './screens/Blog'
import ContactUs from './screens/ContactUs'
import Testimonials from './screens/Testimonials'
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
