import { Icons } from "../Component/UI/Icon/Icon"

const Modal=({isOpen,onClose,children})=>{
    !isOpen && null
    return(
        <>
             <div className=" flex flex-col items-end bg-slate-50 px-3 py-2 rounded-xl">
                <button onClick={onClose}>
                    <Icons icon={'close'} />
                </button>
               <div className="flex flex-col gap-1 ">
                    {children}
               </div>
           </div>
          
        </>
    )
}


export default Modal