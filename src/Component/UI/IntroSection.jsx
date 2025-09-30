import { Icons } from "./Icon/Icon"
import UseRentBuyHook from "../../Hook/UseRentBuyHook"


function IntroSection(){
    const{rentBtn}=UseRentBuyHook()
    return(
        <>
        <div className=" bg-[url('/public/IntrosectionBackground.png')] bg-auto bg-center bg-no-repeat py-10 min-h-96">
           <div className="text-white font-semibold text-center pb-7 my-7">
            <p className="pt-10 text-2xl pb-4">سقفینو، سقفی برای همه</p> 
            <p>آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید</p>
           </div>
           <div className="bg-white w-1/2 mx-auto px-4 rounded-xl">
               <div className="flex border-b-2 border-gray-200">
                   <button className="searchBoxIntroSection">خرید</button>
                   <button className="searchBoxIntroSection" onClick={rentBtn}>اجاره</button> 
               </div>
               <div className="flex w-full flex-row-reverse items-center pb-2 mb-8">
                <Icons icon={'searchIcon'} />
                <input className=" pe-4 py-2 outline-none w-full placeholder-black text-end" type="text" placeholder="شهر مورد نظر را جستجو کنید"/>
               </div>
           </div>  
        </div>
       
        </>
    )
}

export default IntroSection