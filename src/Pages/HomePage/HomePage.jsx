import IntroSection from "../../Component/UI/IntroSection"
import MainContent from "../../Component/UI/MainContent"


function HomePage(){
    return(
        <>
           <div className="flex flex-col">
               <IntroSection />
               <MainContent />
           </div>
        </>
    )
}

export default HomePage