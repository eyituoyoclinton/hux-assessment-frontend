import React, { useState, useEffect } from "react"
import AppLayout from "../../components/AppLayout"
import AppTable from "../../components/AppTable"
import useUserFunction from "../../hooks/useUserFunction"
import { useNavigate } from "react-router-dom"
import CreateContact from "../../components/CreateContact"
import CreateContactUpdate from "../../components/CreateContactUpdate"
export default () => {
   const Navigate = useNavigate()
   const [contactModal, setContactModal] = useState({ status: false, data: {} })
   const [editContactModal, setEditContactModal] = useState({ status: false, data: {} })
   const { fetchContactList, deleteContact } = useUserFunction()
   const [contactData, setContactData] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const loadContact = () => {
      fetchContactList().then((res: any) => {
         setContactData(res)
         setIsLoading(false)
      })
   }
   useEffect(() => {
      loadContact()
   }, [])
   return (
      <AppLayout active="contact">
         <div className="mtop100">
            <div className="mb-3 d-flex">
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
                                 <td className="table-tr cursor-pointer cursor-hover tdclass1" key={i} onClick={() => Navigate(`/app/contact/${item?.contact_id}`)}><i className="fa fa-eye" aria-hidden="true"></i></td>
                                 <td className="table-tr cursor-pointer cursor-hover tdclass1" key={i} onClick={() => setEditContactModal({ status: true, data: item })}><i className="fa fa-pencil-square" aria-hidden="true"></i></td>
                                 <td className="cursor-pointer">
                                    <div>
                                       <div onClick={() => {
                                          deleteContact(item.contact_id, loadContact)

                                       }}>
                                          <i className="fa fa-trash" aria-hidden="true"></i>
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
               <CreateContact data={contactModal.data} onPress={() => {
                  loadContact()
                  setContactModal({ status: false, data: {} })
               }} />
            }
            {editContactModal.status &&
               <CreateContactUpdate data={editContactModal.data} onPress={() => {
                  loadContact()
                  setEditContactModal({ status: false, data: {} })
               }} />
            }
            <div className="mb-4">

            </div>
         </div>
      </AppLayout>

   )
}