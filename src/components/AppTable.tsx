import React from "react";
import EmptyTable from "./EmptyTable";
import Loader from "./Loader";

interface AppTableProps {
   tableTitle?: string;
   headers?: string[];
   data?: Array<any>;
   isLoading?: boolean;
   children: React.ReactNode
}

export default (props: AppTableProps) => {

   return (
      <div className="myTable w-100 mb-4 myTable14 mt-4">
         {(!props.data || props.data?.length === 0) ? props.isLoading ? null : <EmptyTable /> :
            <div>
               {props.tableTitle &&
                  <div className="table-text"><p>{props.tableTitle}</p></div>}
               <table className="w-100">
                  <thead className="bg-color-second table-head-pad">
                     {props.headers && props.headers.map((item, i) => <th key={i}>{item}</th>)}
                  </thead>
                  <tbody className="my-table-body newSticky">
                     {props.children}
                  </tbody>
               </table>
            </div>
         }
         {props.isLoading && <Loader position="relative" />}
      </div>

   )
}