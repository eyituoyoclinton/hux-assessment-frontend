import React from "react";

const emptyImg: string = require('../assets/images/emptyImg.svg').default
export default () => {

   return (
      <div className="myTable w-100">
         <table className="w-100">
            <tbody className="my-table-body">
               <div className="emptyTableClass">
                  <img src={emptyImg} />
                  <p>There is data</p>
               </div>
            </tbody>
         </table>
      </div>

   )
}