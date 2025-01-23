import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import AppLayout from './App';
import HomeScreen from './screens/HomeScreen';
import About from './screens/About';
import Blog from './screens/Blog';
import Testimonials from './screens/Testimonials';
import ContactUs from './screens/ContactUs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout/>}>
      <Route path='/' element={<HomeScreen/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Blog' element={<Blog/>} ></Route>
      <Route path='/Testimonial' element={<Testimonials/>} ></Route>
      <Route path='/contact' element={<ContactUs/>} ></Route>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


