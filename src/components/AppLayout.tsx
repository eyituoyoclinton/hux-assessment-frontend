import React, { MouseEventHandler, useEffect } from "react"
import SidebarIndex from "./SidebarIndex";

interface AppLayoutProps {
   children: React.ReactNode;
   active?: string;
   onPress?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default (props: AppLayoutProps) => {

   return (
      <div className="container-fluid">
         <div className="row">
            <div className="col-2">
               <SidebarIndex activeClass={props.active} />
            </div>
            <div className="col-10 pd-l-0">
               <div className="container containerBody" style={{ minHeight: '700px' }}>
                  {props.children}
               </div>
            </div>
         </div>
      </div>
   )
}