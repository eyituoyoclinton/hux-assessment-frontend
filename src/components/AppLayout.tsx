import React, { MouseEventHandler, useEffect } from "react"
import SidebarIndex from "./SidebarIndex";

interface AppLayoutProps {
   children: React.ReactNode;
   active?: string;
   onPress?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default (props: AppLayoutProps) => {

   return (
      <div className="container-fluid pLO">
         <div className="row">
            <div className="col-3 ncol-2 ncol-22">
               <SidebarIndex activeClass={props.active} />
            </div>
            <div className="col-9 ncol-10 pd-l-0">
               <div className="container containerBody" style={{ minHeight: '700px' }}>
                  {props.children}
               </div>
            </div>
         </div>
      </div>
   )
}