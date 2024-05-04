import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import NotFound from './pages/404.jsx';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={ <Home/> }/>
        <Route path="about/:text" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
