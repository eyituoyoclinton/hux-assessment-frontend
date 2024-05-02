import React, { MouseEventHandler, useEffect, useState } from "react"
import HeaderLayout from "../../components/HeaderLayout";
import LoginModal from "../../components/LoginModal";
import RegisterModal from "../../components/RegisterModal";
const sideImg = require('../../assets/images/contact.jpg');
const sideImg2 = require('../../assets/images/golady.png');

interface AppLayoutProps {
   children: React.ReactNode;
   active?: string;
   onPress?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default () => {
   const [login, setLogin] = useState(false)
   const [register, setRegister] = useState(false)
   return (
      <div className="container-fluid pLO">
         <HeaderLayout />
         <section className="sectionOne newBg">
            <div className="container ptb202">
               <div className="row centerFlex">
                  <div className="col-lg-5 col-12 mb-4">
                     <div className="homeTexter">
                        <p className="headerPText mb-4 text-white">
                           Back to savings accounts?
                        </p>
                        <h1 className="headerText mb-4 text-white">
                           Savings contacts
                        </h1>
                        <p className="text-white headerPText eighty showcasePtext mb-4">You might be able to find the answer to your question in our frequently asked questions section.
                        </p>
                        <div className="mb-4">
                           <a href="#" className="createBtn" onClick={(e) => setRegister(true)}>
                              Give it a try
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-1 col-12"></div>
                  <div className="col-lg-6 col-12">
                     <div className="">
                        <div className="homeImg">
                           <img src={sideImg2} alt="" />
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="sectionOne">
            <div className="container ptb202">
               <div className="row centerFlex">
                  <div className="col-lg-6 col-12">
                     <div className="">
                        <div className="homeImg">
                           <img src={sideImg} alt="" />
                        </div>

                     </div>
                  </div>
                  <div className="col-lg-5 col-12 mb-4">
                     <div className="homeTexter">
                        <h1 className="headerText mb-4">
                           Manage your account 24/7
                        </h1>
                        <p>Our eSavings platform allows you to manage your account securely at any time. You can complete the following tasks online:</p>

                        <div className="doubleBtn mb-4">
                           <a href="#" className="createBtn mr5" onClick={(e) => setRegister(true)}>
                              Register
                           </a>
                           <a href="#" className="getLogin" onClick={(e) => setLogin(true)}>
                              Login
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="sectionOne bg-black">
            <div className="container ptb202">
               <div className="row centerFlex">

                  <div className="col-12 mb-4">
                     <div className="homeTexter text-center">
                        <p className="text-white pt-4">@copy 2024</p>

                     </div>
                  </div>
               </div>
            </div>
         </section>

         {login &&
            <LoginModal onPress={() => setLogin(false)} />
         }
         {register &&
            <RegisterModal onPress={() => setRegister(false)} />
         }

      </div>
   )
}