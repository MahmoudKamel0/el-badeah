import Slider from "./components/Slider/Slider";
import OfferAdsLatest from "./components/OfferAdsLatest/OfferAdsLatest";
import SectionCategories from "./components/SectionCategories/SectionCategories";


export default function Home() {
       
       return (
       <>
              <Slider />
              <OfferAdsLatest />

              <SectionCategories className="mt-14"/>
              <SectionCategories className="mt-20"/>
              <SectionCategories className="mt-20"/>
       </>
       )
}
