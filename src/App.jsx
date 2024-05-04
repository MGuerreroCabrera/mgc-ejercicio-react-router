import "./App.css";
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="" className="lnk-menu" activeClassName="active">Home</NavLink>
          <NavLink to="about/About - parámetro" className="lnk-menu" activeClassName="active">About</NavLink>
          <NavLink to="contact" className="lnk-menu" activeClassName="active">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>Made by MGC 🤗</footer>
    </div>
  )
}

export default App