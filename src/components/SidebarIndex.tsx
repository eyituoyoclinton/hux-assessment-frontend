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
      let lastScrollY = window.pageYOffset;
      // function to run on scroll
      const updateScrollDirection = () => {
         const scrollY = window.pageYOffset;
         const direction: any = scrollY > lastScrollY ? "down" : "up";
         if (direction !== scrollDirection) {
            setScrollDirection(direction);
         }
         lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
         window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
   }, [scrollDirection]); // run when scroll direction changes
   const LogOut = () => {
      localStorage.removeItem('__mtoken')
      Navigate("/")
   }
   return (
      <div className={`sidebar ${scrollDirection === 'down' ? 'fixedToTop' : ''}`}>
         <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
            <li onClick={() => Navigate('/dashboard')} className={`marginBottom cursor-pointer cursor-hover ${props.activeClass === 'dashboard' ? "activeNav" : ""}`}><NavLink to="/dashboard"><span>
               <img src={DashboardIcon} />
            </span><p className='gohidden'>Dashboard</p></NavLink></li>
            <li onClick={() => Navigate('/members')} className={`marginBottom cursor-pointer cursor-hover ${props.activeClass === 'member' ? "activeNav" : ""}`}><NavLink to="/members"><span>
               <img src={DashboardIcon} />
            </span><p className='gohidden'>Members</p></NavLink></li>
            <li onClick={() => Navigate('/providers')} className={`marginBottom cursor-pointer cursor-hover ${props.activeClass === 'provider' ? "activeNav" : ""}`}><NavLink to="/providers"><span>
               <img src={DashboardIcon} />
            </span><p className='gohidden'>Service Providers</p></NavLink></li>
            <li onClick={() => Navigate('/sessions')} className={`marginBottom cursor-pointer cursor-hover ${props.activeClass === 'sessions' ? "activeNav" : ""}`}><NavLink to="/sessions"><span>
               <img src={DashboardIcon} />
            </span><p className='gohidden'>Sessions</p></NavLink></li>
            <li onClick={() => LogOut()} className={`marginBottom cursor-pointer cursor-hover`}><NavLink to="#" onClick={() => LogOut()}><span>
               <img src={DashboardIcon} />
            </span><p className='gohidden'>Logout</p></NavLink></li>
         </ul>
      </div>
   )
}