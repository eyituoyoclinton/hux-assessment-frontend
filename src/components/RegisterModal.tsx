import React, { useState } from 'react'
import { Properties as CSSProperties } from 'csstype'
import { ObjectPayload } from '../typings/general';
import useUserFunction from '../hooks/useUserFunction';
const closebtn: string = require('../assets/images/closebtn.svg').default


export type DataState = {
   data?: ObjectPayload;
   onPress?: Function;
   containerStyle?: CSSProperties;
}

export default (props: DataState) => {
   const [registerData, setRegisterData] = useState({ firstname: '', password: '', lastname: '', email: '', mobile: '' })

   const { createAccount } = useUserFunction()
   return (
      <div style={{
         position: 'absolute', left: 0, top: 0,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'rgba(0, 0, 0, 0.3)', width: '100%', height: '100%', zIndex: 999,
      }}>
         <div style={{ borderRadius: '20px', padding: '20px', width: '700px', ...props.containerStyle }}>
            <div className='bg-white dropdownMainNew max400 dropdownMain22'>
               <div className="filterForm w-100">
                  <div className='popupClass1'>
                     <div className='popupText1 mb-2 d-flex spaceRounded'>
                        <p>Register</p>
                        <i onClick={() => props.onPress && props.onPress()} style={{ fontSize: '20px', marginLeft: '80%' }} className="fa fa-times m-color-red cursor-pointer cursor-hover" aria-hidden="true"></i>
                     </div>
                     <form method="post">
                        <div className="containerForm">
                           <div className="row">
                              <div className="col-lg-6 col-12">
                                 <div className="w-100 mb-2">
                                    <p>firstname</p>
                                    <input className='my-form-control' type="text" placeholder="firstname" onChange={(e) => { setRegisterData(state => ({ ...state, firstname: e.target.value })) }} />
                                 </div>
                              </div>
                              <div className="col-lg-6 col-12">
                                 <div className="w-100 mb-2">
                                    <p>lastname</p>
                                    <input className='my-form-control' type="text" placeholder="lastname" onChange={(e) => { setRegisterData(state => ({ ...state, lastname: e.target.value })) }} />
                                 </div>
                              </div>
                              <div className="col-lg-6 col-12">
                                 <div className="w-100 mb-2">
                                    <p>email</p>
                                    <input className='my-form-control' type="text" placeholder="email" onChange={(e) => { setRegisterData(state => ({ ...state, email: e.target.value })) }} />
                                 </div>
                              </div>
                              <div className="col-lg-6 col-12">
                                 <div className="w-100 mb-2">
                                    <p>mobile</p>
                                    <input className='my-form-control' type="text" placeholder="mobile" onChange={(e) => { setRegisterData(state => ({ ...state, mobile: e.target.value })) }} />
                                 </div>
                              </div>
                              <div className="col-lg-6 col-12">
                                 <div className="w-100 mb-2">
                                    <p>Password</p>
                                    <input className='my-form-control' type="password" placeholder="password" onChange={(e) => { setRegisterData(state => ({ ...state, password: e.target.value })) }} />
                                 </div>
                              </div>
                              <div className="col-12">
                                 <button className="loginBtn mt-4" type="button" onClick={(e) => {
                                    e.preventDefault()
                                    createAccount(registerData?.firstname, registerData?.lastname, registerData?.mobile, registerData?.email, registerData.password)
                                 }}>Register</button>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}