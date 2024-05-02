import React from "react"
import { Routes, RouteObject } from "react-router-dom"
import HomeIndex from "../pages/home/HomeIndex"
import ContactIndex from "../pages/contact/ContactIndex"
import ContactSingle from "../pages/contact/ContactSingle"


export const HomeRoute: RouteObject[] = [{
   path: "/index",
   children: [
      {
         path: "/index",
         element: <HomeIndex />
      },

   ]
}, {
   path: "/contact",
   children: [
      {
         path: "/contact",
         element: <ContactIndex />
      },
      {
         path: "/contact/:ID",
         element: <ContactSingle />
      },
   ]
}]