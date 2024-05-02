import { useState, useEffect } from "react"
import AppLayout from "../../components/AppLayout"
import { ObjectPayload } from "../../typings/general"
import { NavLink, useParams } from "react-router-dom"
import { useStoreSelector } from "../../store/useStore"
import useUserFunction from "../../hooks/useUserFunction"
import helpers from "../../utils/helpers"
import AppTable from "../../components/AppTable"

export type DataState = {
   data?: ObjectPayload;
   onPress?: Function;
}
export default (data: DataState) => {
   const params = useParams();
   const { fetchSingleContact } = useUserFunction()
   const { singleContact } = useStoreSelector(["singleContact"])
   useEffect(() => {
      fetchSingleContact(params?.ID as any)
   }, [])
   let useData = singleContact[0]

   return (
      <AppLayout active="sessions">
         <div className="">
            <div className="row mb-4">
               <div className="col-12">
                  <div className="myTable w-100 mb-4">
                     <div className="mtop100">
                        <div className="row">
                           <div className="col-lg-6 col-12">
                              <div className="d-flex alignCenter">
                                 <div className="sessionTableHead">
                                    <div className="mt20">
                                       <div className="d-flex marginBTM5">
                                          <p className="mr5">FirstName: </p>
                                          <p>{useData?.firstname}</p>
                                       </div>
                                       <div className="d-flex marginBTM5">
                                          <p className="mr5">Lastname: </p>
                                          <p>{useData?.lastname}</p>
                                       </div>
                                       <div className="d-flex marginBTM5">
                                          <p className="mr5">Mobile: </p>
                                          <p>{useData?.mobile}</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </AppLayout>

   )
}