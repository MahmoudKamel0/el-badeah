'use client'
import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
// import Image from "next/image";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
       ssr: false, 
       loading: () => <div>Loading...</div> 
});

const Image = dynamic(() => import("next/image"), {
       ssr: false, 
       loading: () => <div>Loading...</div> 
});
   
//    const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), {
//        ssr: false, 
//        loading: () => <div>Loading2...</div> 
//    });


export default function Slider() {
       return (
              <Swiper className="h-[90vh]" modules={[Autoplay]} autoplay={{delay:3000}} loop={true} spaceBetween={50} slidesPerView={1}>
                     <SwiperSlide className="h-full">
                            <Link href='https://www.facebook.com/share/18StkekJRG/' target="_blank" passHref>
                                   <Image className="object-cover h-full w-full" src='/slide1.webp' alt="slide offer" loading="lazy" width={1351} height={224.8}/>
                            </Link>
                     </SwiperSlide>
                     <SwiperSlide className="h-full">
                            <Link href='https://www.facebook.com/share/1BV3nnw49W/' target="_blank" passHref>
                                   <Image className="object-cover h-full w-full" src='/slide2.webp' alt="slide offer" loading="lazy" width={1351} height={224.8}/>
                            </Link>
                     </SwiperSlide>
                     <SwiperSlide className="h-full">
                            <Link href='https://www.facebook.com/share/p/1HP9EvFied/' target="_blank" passHref>
                                   <Image className="object-cover h-full w-full" src='/slide3.webp' alt="slide offer" loading="lazy" width={1351} height={224.8}/>
                            </Link>
                     </SwiperSlide>
                     

              </Swiper>
       );
}
