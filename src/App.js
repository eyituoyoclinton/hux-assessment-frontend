import React from 'react';
import './App.css';
// import './assets/style/mainStyle.css'
// import './assets/style/responsive.css'
import RouteComponent from "./routeList/index"
// import AppUpdatePopup from './components/AppUpdatePopup';
import useUserFunction from './hooks/useUserFunction';
import { useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import HomeIndex from './pages/home/HomeIndex';
import { useStoreSelector } from './store/useStore';
// import LoginIndex from './pages/login/LoginIndex';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default () => {
   const { userData } = useStoreSelector(["userData"])
   // const { getprofile } = useUserFunction()
   // getprofile()
   return (
      <div>
         {userData?.user_id ?
            <RouteComponent /> :
            <BrowserRouter>
               <Routes><Route path="*" Component={() => <HomeIndex />} /></Routes>
            </BrowserRouter>}
         {/* <AppUpdatePopup /> */}
         <ToastContainer style={{ width: "auto" }} pauseOnHover newestOnTop />
      </div>
   )
}
