import { Pagination } from "flowbite-react"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

function Paginations({Input}){
    const[currentPage,setCurrentPage]=useState(1)
    const[totalPage,setTotalPage]=useState(10)
    const[paginationArray,setPaginationArray]=useState([])


    const TotalPage=useEffect(()=>{
        setTotalPage(Math.ceil(Math.round()*30))
    },[Input])
     
 
    function onPageChange(page){
        setCurrentPage(page)
    }

    function createArray(value=TotalPage){
        for(let i=1;i<=value;i++){
        paginationArray.push([i])
        
    }}
    createArray()
    console.log(paginationArray)
    return(
        <>
        <div className="flex flex-row sm:justify-center">
        {/* <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={10}
        onPageChange={onPageChange}
        previousLabel=""
        nextLabel=""
        shape="rounded"
        showIcons
        className=" border-2 border-green-400"
      /> */}
         <ul className=" flex gap-4">
            {
                paginationArray.map((item,index)=>(
                    <li key={index} className="p-2 border-2 border-gray-100 rounded-md">
                        <Link to="rent/propertyNotFond">{item}</Link>
                    </li>
                ))
            }
         </ul>
        </div>
        </>
    )
}

export default Paginations