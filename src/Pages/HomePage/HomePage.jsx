import IntroSection from "../../Component/UI/IntroSection"
import AdvertisementSection from "../../Component/UI/AdvertisementSection"
import PropertyIntroductionSection from "../../Component/UI/PropertyIntroductionSection"
import ConsultationSection from "../../Component/UI/ConsultationSection"


function HomePage(){
    return(
        <>
           <div className="flex flex-col">
               <IntroSection />
               <AdvertisementSection />
               <PropertyIntroductionSection />
               <ConsultationSection />
           </div>
        </>
    )
}

export default HomePage