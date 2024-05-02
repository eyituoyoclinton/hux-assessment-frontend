import React, { useState } from 'react'
import { Properties as CSSProperties } from 'csstype'
import { ObjectPayload } from '../typings/general';
import useUserFunction from '../hooks/useUserFunction';
const closebtn: string = require('../assets/images/closebtn.svg').default


type DropdownItems = {
   name?: string;
   value?: any;
   onPress?: Function;
}
interface DropdownOptions {
   onPress?: ((e: DropdownItems) => void) | undefined;
   containerStyle?: CSSProperties;
   title1?: string;
   title2?: string;
   data1?: Array<DropdownItems>;
   data2?: Array<DropdownItems>;
}
export type DataState = {
   data?: ObjectPayload;
   onPress?: Function;
   containerStyle?: CSSProperties;
}

export default (props: DataState) => {
   const [loginData, setLoginData] = useState({ username: '', password: '' })

   const { login } = useUserFunction()
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
                        <p>Login</p>
                        <i onClick={() => props.onPress && props.onPress()} style={{ fontSize: '20px', marginLeft: '80%' }} className="fa fa-times m-color-red cursor-pointer cursor-hover" aria-hidden="true">X</i>
                     </div>
                     <form method="post">
                        <div className="containerForm">
                           <div className="w-100 mb-2">
                              <p>username</p>
                              <input className='my-form-control' type="text" placeholder="email/mobile" onChange={(e) => { setLoginData(state => ({ ...state, username: e.target.value })) }} />
                           </div>
                           <div className="w-100 mb-2">
                              <p>Password</p>
                              <input className='my-form-control' type="password" placeholder="password" onChange={(e) => { setLoginData(state => ({ ...state, password: e.target.value })) }} />
                           </div>
                           <button className="loginBtn mt-4" type="button" onClick={(e) => {
                              e.preventDefault()
                              login(loginData?.username, loginData.password)
                           }}>Login</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}