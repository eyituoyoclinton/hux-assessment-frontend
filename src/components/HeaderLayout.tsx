import React from 'react'
import { NavLink } from "react-router-dom"
const myLogo: string = require('../assets/images/shawbrook.svg').default

export default () => {
   // console.log(userData)
   return (
      <div className="mainHeader">

         <nav className="navbar sticky-top navbar-expand-lg bg-white">
            <div className="container">
               <NavLink className="navbar-brand" to="/"><img className="mylogo" src={myLogo} /></NavLink>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-bars"></i>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="#">About us</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="#">Contacts</NavLink>
                     </li>

                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}