import React, { useState } from 'react'
import { Properties as CSSProperties } from 'csstype'
import { ObjectPayload } from '../typings/general';
import useUserFunction from '../hooks/useUserFunction';

export type DataState = {
   data?: ObjectPayload;
   onPress?: Function;
   containerStyle?: CSSProperties;
}
export default (props: DataState) => {
   const { createContact } = useUserFunction()
   const [comState, setComState] = useState<{ data: any }>({ data: { firstname: '', phoneNumber: '', lastname: '' } })


   return (
      <div style={{
         position: 'fixed', left: 0, top: 0,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'rgba(0, 0, 0, 0.3)', width: '100%', height: '100%', zIndex: 999,
      }}>
         <div style={{ borderRadius: '20px', padding: '20px', width: '400px', ...props.containerStyle }}>
            <div className='bg-white dropdownMainNew max600 dropdownMain22' style={{ marginTop: '10px' }}>
               <div className="filterForm w-100">
                  <div className='popupClass1'>
                     <div className='popupText1 mb-2 d-flex spaceRounded'>
                        <p>Create</p>
                        <i onClick={() => props.onPress && props.onPress()} style={{ fontSize: '20px', marginLeft: '80%' }} className="fa fa-times m-color-red cursor-pointer cursor-hover" aria-hidden="true"></i>

                     </div>
                     <form method="post">
                        <div className="containerForm">
                           <div className='row'>
                              <div className='col-12 mb-2'>
                                 <div className="w-100 mb-2">
                                    <p>Firstname</p>
                                    <input className='my-form-control' type="text" placeholder="e.g: Name of user" onChange={(e) => {
                                       setComState(state => ({ ...state, data: { ...state.data, firstname: e.target.value } }))
                                    }} />
                                 </div>
                              </div>
                              <div className='col-12 mb-2'>
                                 <div className="w-100 mb-2">
                                    <p>lastname</p>
                                    <input className='my-form-control' type="text" placeholder="e.g: Name of user" onChange={(e) => {
                                       setComState(state => ({ ...state, data: { ...state.data, lastname: e.target.value } }))
                                    }} />
                                 </div>
                              </div>
                              <div className='col-6 mb-2'>
                                 <div className="w-100 mb-2">
                                    <p>Phone of user</p>
                                    <input className='my-form-control' type="tel" placeholder="e.g: 23470619xxxx" onChange={(e) => {
                                       setComState(state => ({ ...state, data: { ...state.data, phoneNumber: e.target.value } }))
                                    }} />
                                 </div>
                              </div>
                           </div>
                           <button className="loginBtn mt-4" type="button" onClick={(e) => {
                              e.preventDefault()
                              createContact(comState?.data, props?.onPress)
                           }}>Create Contact</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}