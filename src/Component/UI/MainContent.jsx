import { use, useState } from "react"
import RentSection from "./RentSection"
import InitialStateMainContent from "./InitialStateMainContent"
import BuySection from "./BuySection"
import { Icons } from "./Icon/Icon"
import Modal from "../../Context/Modal"
import PropertyRental from "./PropertyRental"


function MainContent(){
    
        const[selected,setSelected]=useState("")
        const[getRentInput,setGetRentInput]=useState('تهران')
        const[getBuyInput,setGetBuyInput]=useState('تهران')
        const[latestSearchesRentSection,setLatestSearchesRentSection]=useState([])
        const[latestSearchesBuySection,setLatestSearchesBuySection]=useState([])
        const[open,setOpen]=useState(false)
        const[itemIndex,setItemIndex]=useState(0)

        function getInputRentSectionValue(e){
            setGetRentInput(e.target.value) 
        }  

        function getInputBuySectionValue(e){
            setGetBuyInput(e.target.value)
        }

        function rentBtn(){
            setSelected('RentingHome')  
            getRentInput!=='' && 
            setLatestSearchesRentSection(()=>[...latestSearchesRentSection,getRentInput])
            setItemIndex((itemIndex)=>itemIndex+1)
            console.log(itemIndex)
            console.log(getRentInput) 
            console.log(latestSearchesRentSection)   
        }
        
        function buyBtn(){
            setSelected('BuyingHome')
            getBuyInput!=='' && 
            setLatestSearchesBuySection(
                [...latestSearchesBuySection,getBuyInput]
                ) 
        }

        function openModal(){
            setOpen(true)
        }

        function closeModal(){
            setOpen(false)
        }


        function clearLatestSearchesRentSection(e){
            e.preventDefault();
            setLatestSearchesRentSection([])
        }

        function clearLatestSearchesBuySection(e){
            e.preventDefault();
            setLatestSearchesBuySection([])
        }

        function removeRentSearchItems(item){
            const itemsIndex=latestSearchesRentSection.indexOf(item)
            console.log("index")
            console.log(itemsIndex)
            setLatestSearchesRentSection(latestSearchesRentSection.splice(itemsIndex,1))
        }
       
        function removeBuySearchItems(index){
            setLatestSearchesBuySection(latestSearchesBuySection.splice(index,1))
        }
        
    return(
        <>
        <div className=" bg-[url('/public/IntrosectionBackground.png')] bg-auto bg-center bg-no-repeat py-10 min-h-96">
            <div className="text-white font-semibold text-center pb-7 my-7">
                <p className="pt-10 text-2xl pb-4">سقفینو، سقفی برای همه</p> 
                <p>آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید</p>
            </div>
            <div  className="bg-white w-1/2 mx-auto px-5 rounded-xl">
                <div className="flex border-b-2 border-gray-200">
                    <button id="buyH" className="searchBoxIntroSection" onClick={buyBtn}>خرید</button>
                    <button id="rentH" className="searchBoxIntroSection" onClick={rentBtn}>اجاره</button> 
                </div>
                <div className="flex w-full pb-2 mb-8 px-1">
                    
                        {
                            selected ==="" || selected==="RentingHome" ? (
                                <div className="w-full flex flex-row-reverse items-start gap-2">
                                    <div className="w-3/5 flex gap-1 items-center px-2">
                                        <input className=" py-2 outline-none w-full placeholder-black text-end" type="text" placeholder="شهر مورد نظر را جستجو کنید" value={getRentInput} onChange={getInputRentSectionValue}/>
                                        <Icons icon={'searchIcon'} />    
                                    </div> 
                                    <div className=" w-2/5 flex items-center gap-1 py-1">
                                        {
                                        latestSearchesRentSection.length<=3 ? (
                                            latestSearchesRentSection.slice(0,3).map((item,index)=>(
                                                <div key={index} className="flex gap-2 p-1 bg-slate-200 rounded-md items-start">
                                                    <button onClick={removeRentSearchItems}><Icons icon={'remove'} /></button>
                                                    <p key={index} className="w-fit text-gray-600">{item}</p>   
                                                </div>
                                   
                                             ))
                                        ) : (
                                        !open ? (
                                            <div className="flex gap-1">
                                                <button onClick={openModal} >
                                                    <Icons icon={"plus"} />
                                                </button>
                                                <button onClick={clearLatestSearchesRentSection}>
                                                    <Icons icon={'minus'} />
                                                </button>
                                                {
                                                latestSearchesRentSection.slice(0,3).map((item,index)=>(
                                                    <div className="flex gap-2 p-1 bg-slate-200 rounded-md items-start">
                                                        <button onClick={removeRentSearchItems}><Icons icon={'remove'} /></button>
                                                        <p key={index} className="w-fit text-gray-600">{item}</p>   
                                                    </div>
                                                    ))
                                                }
                                            </div>
                                        ) : (
                                            <Modal isOpen={open}  onClose={closeModal}>
                                               {
                                               latestSearchesRentSection.map((item,index)=>(
                                                <div className="flex gap-2 p-1 bg-slate-200 rounded-md items-start">
                                                   <button onClick={removeRentSearchItems}><Icons icon={'remove'} /></button>
                                                   <p key={index} className=" w-fit text-gray-600">{item}</p>   
                                                </div>
                                                )) 
                                                }
                                           </Modal>
                                                )    
                                            ) 
                                        }
                                    </div>
                                </div>    
                            ): (
                                <div className="w-full flex flex-row-reverse items-start gap-2">
                                    <div className="w-3/5 flex gap-1 items-center px-2">
                                        <input className=" py-2 outline-none w-full placeholder-black text-end" type="text" placeholder="شهر مورد نظر را جستجو کنید" value={getBuyInput} onChange={getInputBuySectionValue}/>
                                        <Icons icon={'searchIcon'} />    
                                    </div> 
                                    <div className=" w-2/5 flex items-center gap-1 py-1">
                                        {
                                        latestSearchesBuySection.length<=3 ? (
                                            latestSearchesBuySection.slice(0,3).map((item,index)=>(
                                                <div key={index} className="flex gap-2 p-1 bg-slate-200 rounded-md items-start">
                                                    <button onClick={removeBuySearchItems}><Icons icon={'remove'} /></button>
                                                    <p key={index} className="w-fit text-gray-600">{item}</p>   
                                                </div>
                                   
                                             ))
                                        ) : (
                                        !open ? (
                                            <div className="flex gap-1">
                                                <button onClick={openModal} >
                                                    <Icons icon={"plus"} />
                                                </button>
                                                <button onClick={clearLatestSearchesBuySection}>
                                                    <Icons icon={'minus'} />
                                                </button>
                                                {
                                                latestSearchesBuySection.slice(0,3).map((item,index)=>(
                                                    <div className="flex gap-2 p-1 bg-slate-200 rounded-md items-start">
                                                        <button onClick={removeBuySearchItems}><Icons icon={'remove'} /></button>
                                                        <p key={index} className="w-fit text-gray-600">{item}</p>   
                                                    </div>
                                                    ))
                                                }
                                            </div>
                                        ) : (
                                            <Modal isOpen={open}  onClose={closeModal}>
                                               {
                                               latestSearchesBuySection.map((item,index)=>(
                                                <div className="flex gap-2 p-1 bg-slate-200 rounded-md items-start">
                                                   <button onClick={removeBuySearchItems}><Icons icon={'remove'} /></button>
                                                   <p key={index} className="w-fit text-gray-600">{item}</p>   
                                                </div>
                                                )) 
                                                }
                                            </Modal>
                                                )    
                                            ) 
                                        }
                                    </div>
                                </div>      
                            )
                        }       
                       
                </div>
            </div>  
        </div>
        <div>
            {selected==="" && (<InitialStateMainContent />) }
            {selected==="RentingHome" ? (<RentSection getRentInput={getRentInput} selected={selected}/>) : (null)}
            {selected==="BuyingHome" ? (<BuySection getBuyInput={getBuyInput} selected={selected}/>) : (null)}          
        </div>
        
        </>
    )
}
//
export default MainContent