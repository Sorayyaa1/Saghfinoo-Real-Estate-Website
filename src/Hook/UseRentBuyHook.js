import { useState } from "react"


function UseRentBuyHook(){
   const[selected,setSelected]=useState('')
   const[getInput,setGetInput]=useState('')

    function getInputValue(e){
        setGetInput(e.target.value)   
    }

    function rentBtn(){
        alert('test')
        setSelected('RentingHome')       
    }

    function buyBtn(){
        setSelected('BuyingHome')
    }

    return{rentBtn,getInput,getInputValue,buyBtn,selected}
}

export default UseRentBuyHook