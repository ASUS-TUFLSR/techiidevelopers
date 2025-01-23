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
      <main className="py-3" >
        <Container> 
          <Outlet/>
         </Container>
      </main>
      <Footer/>
    </>
  )
}

export default AppLayout;
