import React, { useState, useEffect } from "react"
import AppLayout from "../../components/AppLayout"
import AppTable from "../../components/AppTable"
import helpers from "../../utils/helpers"
// import SessionModal from "../../components/SessionModal"
import useUserFunction from "../../hooks/useUserFunction"
import { useStoreSelector } from "../../store/useStore"
import { useNavigate } from "react-router-dom"
import CreateContact from "../../components/CreateContact"
import CreateContactUpdate from "../../components/CreateContactUpdate"
export default () => {
   const Navigate = useNavigate()
   const [contactModal, setContactModal] = useState({ status: false, data: {} })
   const [editContactModal, setEditContactModal] = useState({ status: false, data: {} })
   const { fetchContactList, deleteContact } = useUserFunction()
   const { contactData, isLoading } = useStoreSelector(["contactData", "isLoading"])
   useEffect(() => {
      fetchContactList()
   }, [])
   return (
      <AppLayout active="sessions">
         <div className="">
            <div className="mb-3">
               <h4>Contacts</h4>
               <button className="loginBtn newContactBtn" type="button" onClick={() => setContactModal({ status: true, data: [] })}>Create User</button>
            </div>
            <div className="row mb-4 mtop100">
               <div className="col-12">
                  <div className="bg-white newHeight">
                     <div className="myTableHeight">
                        <AppTable data={contactData} isLoading={isLoading} headers={["Firstname", "Lastname", "Mobile", "Date", "View", "Edit", "Action"]} tableTitle="">
                           {(contactData || []).map((item: any, i: any) => (
                              <tr>
                                 <td className="tdclass4 tableGrid">{item?.firstname}</td>
                                 <td className="tdclass4">{item?.lastname}</td>
                                 <td className="tdclass4">{item?.mobile}</td>
                                 <td className="tdclass1">{new Date(item.createdAt).toDateString()}</td>
                                 <td className="table-tr cursor-pointer cursor-hover tdclass1" key={i} onClick={() => Navigate(`/contact/${item?.contact_id}`)}>Views</td>
                                 <td className="table-tr cursor-pointer cursor-hover tdclass1" key={i} onClick={() => setEditContactModal({ status: true, data: item })}>Edit</td>
                                 <td className="cursor-pointer">
                                    <div>
                                       <div onClick={() => deleteContact(item.contact_id)}>
                                          delete
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                           ))}
                        </AppTable>
                     </div>
                  </div>
               </div>
            </div>
            {contactModal.status &&
               <CreateContact data={contactModal.data} onPress={() => setContactModal({ status: false, data: {} })} />
            }
            {editContactModal.status &&
               <CreateContactUpdate data={editContactModal.data} onPress={() => setEditContactModal({ status: false, data: {} })} />
            }
            <div className="mb-4">

            </div>
         </div>
      </AppLayout>

   )
}