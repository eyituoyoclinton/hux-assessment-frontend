import React from "react"
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomeRoute } from "./home-route"


export default () => {

   const appRouter = createBrowserRouter(HomeRoute)
   return (
      <RouterProvider router={appRouter} fallbackElement={<div>Not found</div>} />
   )
}