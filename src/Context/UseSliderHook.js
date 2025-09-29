import { useState,useEffect } from "react";
import {RealEstateNewsList} from "../core/contence/RealEstateNewsSectionList"

function UseSliderHook(){
    
    const[Index,setIndex]=useState(0);
    const[slide,setSlide]=useState(true);
    const[time,setTime]=useState(null);

    useEffect(()=>{
       if(slide){
        setSlide(false)
        setTime(
            setTimeout(()=>{
               slideNext()
               setSlide(true)
            },3000)
        )
       }
    },[slide])

    const slideNext=()=>{
       setIndex((ItemIndex)=>{
           if(ItemIndex>RealEstateNewsList.length-1){
            return [0,ItemIndex+3]
        }else{
            return [ItemIndex+1,ItemIndex+4]
        }
       }    
       )
    }

    const slidePrev=()=>{
        setIndex((ItemIndex)=>{
            if(ItemIndex<=0){
                return [RealEstateNewsList.length-4,RealEstateNewsList.length-1]
            }else{
                return [ItemIndex-4,ItemIndex-1]
            }
        })
    }

    const AutoPlayStop=()=>{
        if(time>0){
           clearTimeout(time)
           setSlide(false)
        }
    }

    const AutoplayStart=()=>{
        if(!slide){
            setSlide(true)
        }
    }

    return{AutoPlayStop,AutoplayStart,slideNext,slidePrev,Index}
     
}

export default UseSliderHook