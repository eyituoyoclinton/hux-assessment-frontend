import { useState, useEffect } from "react"
import AppLayout from "../../components/AppLayout"
import { ObjectPayload } from "../../typings/general"
import { NavLink, useParams } from "react-router-dom"
import useUserFunction from "../../hooks/useUserFunction"

export type DataState = {
   data?: ObjectPayload;
   onPress?: Function;
}
export default (data: DataState) => {
   const params = useParams();
   const { fetchSingleContact } = useUserFunction()
   const [contactData, setContactData] = useState<any>([])
   useEffect(() => {
      fetchSingleContact(params?.ID as any).then((res: any) => {

         setContactData(res[0])
      })
   }, [])
   // console.log(contactData)
   let useData = contactData

   return (
      <AppLayout active="contact">
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