import { Pagination } from "flowbite-react"
import { useState,useEffect } from "react"


function Paginations({Input}){
    const[currentPage,setCurrentPage]=useState(1)
    const[totalPage,setTotalPage]=useState(10)
    const[paginationArray,setPaginationArray]=useState([])


    useEffect(()=>{
        setTotalPage(Math.ceil(Math.round()*30))
    },[Input])
     
 
    function onPageChange(page){
        setCurrentPage(page)
    }

    function createArray(totalPage){
        for(let i=1;i<=totalPage;i++){
        paginationArray.push([i])
        console.log(paginationArray)
    }}
    createArray()

    return(
        <>
        <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={10}
        onPageChange={onPageChange}
        previousLabel=""
        nextLabel=""
        shape="rounded"
        pageSize="px-4 py-2"
        showIcons
        className=" border-2 border-green-400"
      />
        </div>
        </>
    )
}

export default Paginations