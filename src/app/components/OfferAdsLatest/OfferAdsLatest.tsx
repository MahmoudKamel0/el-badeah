"use client"
// import dynamic from "next/dynamic";
import Image from "next/image";

// const Image = dynamic(() => import("next/image"), {
//        ssr: false, 
//        loading: () => <div>Loading...</div> 
// });

export default function OfferAdsLatest() {
       
       return (
              <section className="offersAdsLatest | flex flex-auto py-5 px-10 gap-5 mt-10" dir="rtl">
              <div className="startSide | flex-auto grid grid-cols-1 overflow-hidden rounded-lg">
                     <Image className="object-cover h-full w-full" src="/offersAds/1 main.webp" alt="startSide" loading="lazy" width="500" height="500"  />
              </div>
              <div className="endSide | flex-auto grid grid-cols-2 gap-5">
                     <Image className="object-cover h-full w-full" src="/offersAds/2.webp" alt="startSide" loading="lazy" width="300" height="300"  />
                     <Image className="object-cover h-full w-full" src="/offersAds/3.webp" alt="startSide" loading="lazy" width="300" height="300"  />
                     <Image className="object-cover h-full w-full" src="/offersAds/4.webp" alt="startSide" loading="lazy" width="300" height="300"  />
                     <Image className="object-cover h-full w-full" src="/offersAds/5.webp" alt="startSide" loading="lazy" width="300" height="300"  />
              </div>
              </section>
       )
}
