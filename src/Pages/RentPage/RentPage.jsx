import {useState } from "react"
import PropertyRental from '../../Component/UI/PropertyRental'
import AssociatedRealEstateOffice from '../../Component/UI/AssociatedRealEstateOffice'
import MoreHomeForRent from '../../Component/UI/MoreHomeForRent'

function RentPage(){

    const[Input,setInput]=useState("تهران")
    
        function InputValue(e){
            setInput(e.target.value)
        }

    return(
        <>
        <div>
            <PropertyRental Input={Input} InputValue={InputValue}/>
            <AssociatedRealEstateOffice />
            <MoreHomeForRent Input={Input} InputValue={InputValue}/>
        </div>
        </>
    )
}

export default RentPage