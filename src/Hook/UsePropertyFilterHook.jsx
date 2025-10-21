import { useState } from "react";


function UsePropertyFilterHook(){

    const[show,setShow]=useState(true)
    const[close,setClose]=useState(true)
    const[closeMoreFilter,setCloseMoreFilter]=useState(true)
    const[openMoreFilterSecondPart,setOpenMoreFilterSecondPart]=useState(false)
    const[openMoreFilterThirdPart,setOpenMoreFilterThirdPart]=useState(false)
    const[openMoreFilterFourthPart,setOpenMoreFilterFourthPart]=useState(false)

    function showPopup(){
        setShow(!show)
    }

    function closePopup(){
        setClose(!close)
    }
    function closeMoreFilterPopup(){
        setCloseMoreFilter(!closeMoreFilter)
    }
    function moreFilterSecondPart(){
        setOpenMoreFilterSecondPart(!openMoreFilterSecondPart)
    }

    function moreFilterThirdPart(){
        setOpenMoreFilterThirdPart(!openMoreFilterThirdPart)
    }

    function moreFilterFourthPart(){
        setOpenMoreFilterFourthPart(!openMoreFilterFourthPart)
    }


    return{show,setShow,
        close,closePopup,
        closeMoreFilter,closeMoreFilterPopup,
        openMoreFilterSecondPart,moreFilterSecondPart,
        openMoreFilterThirdPart,moreFilterThirdPart,
        openMoreFilterFourthPart,moreFilterFourthPart
    }
}

export default UsePropertyFilterHook

