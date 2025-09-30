import { useState } from "react"

function UseRentBuyHook(){
   const[isVisible,setIsVisible]=useState(false)
    function rentBtn(){
        setIsVisible(!isVisible)         
    }

    return{rentBtn, isVisible}
}

export default UseRentBuyHook