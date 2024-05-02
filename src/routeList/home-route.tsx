import React from "react"
import { Routes, RouteObject, Route } from "react-router-dom"
import HomeIndex from "../pages/home/HomeIndex"
import ContactIndex from "../pages/contact/ContactIndex"
import ContactSingle from "../pages/contact/ContactSingle"
import { useStoreSelector } from '../store/useStore';
import useUserFunction from "../hooks/useUserFunction"
const LoaderPonent = () => {
   const { getprofile } = useUserFunction()
   React.useEffect(() => {
      getprofile()
   }, [])
   return <div>loading</div>
}

export default () => {
   const { userData } = useStoreSelector(["userData"])
   console.log(userData)
   return (
      userData?.user_id ?
         <Routes>
            <Route path="/contact" Component={() => <ContactIndex />} />
            <Route path="/contact/:ID" Component={() => <ContactSingle />} />
         </Routes> : <LoaderPonent />
   )
}