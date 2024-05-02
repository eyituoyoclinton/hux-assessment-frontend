import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const DashboardIcon: string = require('../assets/images/dash.svg').default
interface sidebarProps {
   activeClass?: string
}
export default (props: sidebarProps) => {
   const Navigate = useNavigate()
   const [scrollDirection, setScrollDirection] = useState(null);

   useEffect(() => {

   }, []); // run when scroll direction changes
   const LogOut = () => {
      localStorage.removeItem('__mtoken')
      Navigate("/")
   }
   return (
      <div className={`sidebar `}>
         <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
            <li onClick={() => Navigate('/app/contact')} className={`marginBottom cursor-pointer cursor-hover ${props.activeClass === 'dashboard' ? "activeNav" : ""}`}><NavLink to="/contact"><span>
               <img src={DashboardIcon} />
            </span><p className='gohidden'>Dashboard</p></NavLink></li>
            <li onClick={() => Navigate('/app/contact')} className={`marginBottom cursor-pointer cursor-hover ${props.activeClass === 'contact' ? "activeNav" : ""}`}><NavLink to="/contact"><span>
               <img src={DashboardIcon} />
            </span><p className='gohidden'>Contact</p></NavLink></li>
            <li onClick={() => LogOut()} className={`marginBottom cursor-pointer cursor-hover`}><NavLink to="#" onClick={() => LogOut()}><span>
               <img src={DashboardIcon} />
            </span><p className='gohidden'>Logout</p></NavLink></li>
         </ul>
      </div>
   )
}