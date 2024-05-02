export interface paginationContent {
   activePage?: number;
   itemPerPage?: number;
   totalPage?: number;
   onPress?: (e: number) => void;
}

export default ({ activePage = 1, itemPerPage = 50, totalPage = 1, onPress }: paginationContent) => {
   let pageCount = Math.ceil((totalPage / itemPerPage) || 0)
   return (
      <div className="paginationwrapper">
         <ul className="mypagination">
            <li className="cursor-pointer" onClick={() => onPress && onPress(1)}>«</li>
            {Array(pageCount).fill(0).map((item: any, i: any) => (

               <li onClick={() => onPress && onPress(i + 1)} className={activePage === (i + 1) ? `active cursor-pointer` : "cursor-pointer"}>{i + 1}</li>
            ))}
            {/* <li className="cursor-pointer" onClick={() => onPress && onPress(pageCount)}>»</li> */}
            {pageCount > 1 &&
               <li style={{ marginLeft: '5px' }} className="cursor-pointer" onClick={() => onPress && onPress(pageCount)}>Last Page</li>}
         </ul>

      </div>
   )
}