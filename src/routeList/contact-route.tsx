import React from "react"
import { Routes, RouteObject } from "react-router-dom"
import ContactIndex from "../pages/contact/ContactIndex"
import ContactSingle from "../pages/contact/ContactSingle"


export const ContactRoute: RouteObject = {
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
}