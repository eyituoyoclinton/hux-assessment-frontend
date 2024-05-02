import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import HomeIndex from './pages/home/HomeIndex';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeRoute from '../src/routeList/home-route';


export default () => {

   return (
      <div>
         {/* {userData?.user_id ? */}
         {/*  <RouteComponent /> : */}
         <BrowserRouter>
            <Routes>
               <Route path="/app/*" Component={() => <HomeRoute />} />
               <Route path="*" Component={() => <HomeIndex />} />
            </Routes>
         </BrowserRouter>
         {/* } */}
         <ToastContainer style={{ width: "auto" }} pauseOnHover newestOnTop />
      </div>
   )
}
