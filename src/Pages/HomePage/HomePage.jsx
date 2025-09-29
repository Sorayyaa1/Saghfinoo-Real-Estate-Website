import IntroSection from "../../Component/UI/IntroSection"
import AdvertisementSection from "../../Component/UI/AdvertisementSection"
import PropertyIntroductionSection from "../../Component/UI/PropertyIntroductionSection"
import ConsultationSection from "../../Component/UI/ConsultationSection"
import RealEstateNewsSection from "../../Component/UI/RealEstateNewsSection"

function HomePage(){
    return(
        <>
           <div className="flex flex-col">
               <IntroSection />
               <AdvertisementSection />
               <PropertyIntroductionSection />
               <ConsultationSection />
               <RealEstateNewsSection />
           </div>
        </>
    )
}

export default HomePage