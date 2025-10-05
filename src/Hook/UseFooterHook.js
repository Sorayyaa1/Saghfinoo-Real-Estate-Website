import { useReducer } from "react"
import { useState } from "react"

function UseFooterHook(){

const[isVisible,setIsVisible]=useState(true)
const[Display,setDisplay]=useState(true)
const[preview,setPreview]=useState(true)

function ShowMoreBtn1(){
    setIsVisible(!isVisible)
}
function ShowMoreBtn2(){
    setDisplay(!Display)
}
function ShowMoreBtn3(){
    setPreview(!preview)
}
    return{ShowMoreBtn1,ShowMoreBtn2,ShowMoreBtn3,isVisible,Display,preview}
}

export default UseFooterHook