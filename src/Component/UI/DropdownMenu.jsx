import {useState } from "react"
import {PropertyRentalBtns} from "../../core/contence/PropertyRental"
import { Icons } from "./Icon/Icon"

function DropDown(){
    const[openItem1,setOpenItem1]=useState(false)
    const[openItem2,setOpenItem2]=useState(false)
    const[openItem3,setOpenItem3]=useState(false)
    const[openItem4,setOpenItem4]=useState(false)
    const[openItem5,setOpenItem5]=useState(false)

    function openDropdwon1(){
        setOpenItem1(!openItem1)
    }

    function openDropdwon2(){
        setOpenItem2(!openItem2)
    }

    function openDropdwon3(){
        setOpenItem3(!openItem3)
    }

    function openDropdwon4(){
        setOpenItem4(!openItem4)
    }
    
    function openDropdwon5(){
        setOpenItem5(!openItem5)
    }

   

    return(
        <>
         <div className="flex flex-row-reverse gap-2">
            <div className="dropdown">
                <button onClick={openDropdwon1}>
                    <Icons icon={"blackDropdown"} />
                    <p>{PropertyRentalBtns[0].title}</p>
                </button>
                {
                    openItem1 &&
                        <ul>
                            {
                                PropertyRentalBtns[0].subset.map((item,index)=>(
                                    <li key={index} value={item}>{item}</li>
                                ))
                            }
                        </ul>
                }
            </div>
            <div className="dropdown">
                <button onClick={openDropdwon2}>
                    <Icons icon={"blackDropdown"} />
                    <p>{PropertyRentalBtns[1].title}</p>
                </button>
                {
                    openItem2 &&
                        <ul>
                            {
                                PropertyRentalBtns[1].subset.map((item,index)=>(
                                    <li key={index} value={item}>{item}</li>
                                ))
                            }
                        </ul>
                }
            </div>
             <div className="dropdown">
                <button onClick={openDropdwon3}>
                    <Icons icon={"blackDropdown"} />
                    <p>{PropertyRentalBtns[2].title}</p>
                </button>
                {
                    openItem3 &&
                        <ul>
                            {
                                PropertyRentalBtns[2].subset.map((item,index)=>(
                                    <li key={index} value={item}>{item}</li>
                                ))
                            }
                        </ul>
                }
            </div>
             <div className="dropdown">
                <button onClick={openDropdwon4}>
                    <Icons icon={"blackDropdown"} />
                    <p>{PropertyRentalBtns[3].title}</p>
                </button>
                {
                    openItem4 &&
                        <ul>
                            {
                                PropertyRentalBtns[3].subset.map((item,index)=>(
                                    <li key={index} value={item}>{item}</li>
                                ))
                            }
                        </ul>
                }
            </div>
             <div className="dropdown">
                <button onClick={openDropdwon5}>
                    <p>{PropertyRentalBtns[4].title}</p>
                    <Icons icon={"filterIcon"}/>
                </button>
                {
                    openItem5 &&
                        <ul>
                            {
                                PropertyRentalBtns[4].subset.map((item,index)=>(
                                    <li key={index} value={item}>{item}</li>
                                ))
                            }
                        </ul>
                }
            </div>
            
             
         </div>
        </>
    )
}

export default DropDown