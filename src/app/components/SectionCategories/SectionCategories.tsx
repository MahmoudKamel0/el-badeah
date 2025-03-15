// import { data } from '@/app/api/test'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Photo from '../../../../public/CGcHcEXBrRA2SCm88sNbmdR7X7cxrXAsUTcQlglb.jpg' 
import './SectionCategories.scss'
import Location from '../../../../public/location'
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite'

export default function SectionCategories({title = 'unKnown', description ='unKnown', className, id}: {title: string, description: string, data?:object, className?:string, id?:string}) {
       
       
       return (
              <section id={id} className={`categories | ${className} px-10`} dir='rtl'>
                     <div className="header | flex items-end justify-between ">
                            <div className="title">
                                   <h2>{title}</h2>
                                   <p>{description}</p>
                            </div>
                            <Link href="/categories">عرض المزيد</Link>
                     </div>

                     <div className="items | w-full mt-10 flex items-center justify-start gap-20 overflow-x-auto">
                            <div className="item | block min-w-[200px] max-w-[200px] lg:min-w-[300px] lg:max-w-[300px]">
                                  <Link className='inline-block overflow-hidden rounded-3xl' href="/"><Image src={Photo} alt="category" /></Link>

                                   <div className="info | mt-5 flex items-center justify-between">
                                          <div>
                                          <h3>البهنساوي</h3>
                                          <p className='flex gap-5 mt-4'><Location />المريوطية</p>
                                          </div>

                                          <ButtonFavorite />
                                   </div>

                                   <div className="price-timePublisher | flex items-center justify-between mt-12">
                                          <span className='price'>5000000  ج.م</span>
                                          <span className='time'>منذ 10 أيام</span>
                                   </div>
                            </div>
                            
                            <div className="item | block min-w-[200px] max-w-[200px] lg:min-w-[300px] lg:max-w-[300px]">
                                  <Link className='inline-block overflow-hidden rounded-3xl' href="/"><Image src={Photo} alt="category" /></Link>

                                   <div className="info | mt-5 flex items-center justify-between">
                                          <div>
                                          <h3>البهنساوي</h3>
                                          <p className='flex gap-5 mt-4'><Location />المريوطية</p>
                                          </div>

                                          <ButtonFavorite />
                                   </div>

                                   <div className="price-timePublisher | flex items-center justify-between mt-12">
                                          <span className='price'>5000000  ج.م</span>
                                          <span className='time'>منذ 10 أيام</span>
                                   </div>
                            </div>

                            <div className="item | block min-w-[200px] max-w-[200px] lg:min-w-[300px] lg:max-w-[300px]">
                                  <Link className='inline-block overflow-hidden rounded-3xl' href="/"><Image src={Photo} alt="category" /></Link>

                                   <div className="info | mt-5 flex items-center justify-between">
                                          <div>
                                          <h3>البهنساوي</h3>
                                          <p className='flex gap-5 mt-4'><Location />المريوطية</p>
                                          </div>

                                          <ButtonFavorite />
                                   </div>

                                   <div className="price-timePublisher | flex items-center justify-between mt-12">
                                          <span className='price'>5000000  ج.م</span>
                                          <span className='time'>منذ 10 أيام</span>
                                   </div>
                            </div>

                            <div className="item | block min-w-[200px] max-w-[200px] lg:min-w-[300px] lg:max-w-[300px]">
                                  <Link className='inline-block overflow-hidden rounded-3xl' href="/"><Image src={Photo} alt="category" /></Link>

                                   <div className="info | mt-5 flex items-center justify-between">
                                          <div>
                                          <h3>البهنساوي</h3>
                                          <p className='flex gap-5 mt-4'><Location />المريوطية</p>
                                          </div>

                                          <ButtonFavorite />
                                   </div>

                                   <div className="price-timePublisher | flex items-center justify-between mt-12">
                                          <span className='price'>5000000  ج.م</span>
                                          <span className='time'>منذ 10 أيام</span>
                                   </div>
                            </div>

                            <div className="item | block min-w-[200px] max-w-[200px] lg:min-w-[300px] lg:max-w-[300px]">
                                  <Link className='inline-block overflow-hidden rounded-3xl' href="/"><Image src={Photo} alt="category" /></Link>

                                   <div className="info | mt-5 flex items-center justify-between">
                                          <div>
                                          <h3>البهنساوي</h3>
                                          <p className='flex gap-5 mt-4'><Location />المريوطية</p>
                                          </div>

                                          <ButtonFavorite />
                                   </div>

                                   <div className="price-timePublisher | flex items-center justify-between mt-12">
                                          <span className='price'>5000000  ج.م</span>
                                          <span className='time'>منذ 10 أيام</span>
                                   </div>
                            </div>

                            <div className="item | block min-w-[200px] max-w-[200px] lg:min-w-[300px] lg:max-w-[300px]">
                                  <Link className='inline-block overflow-hidden rounded-3xl' href="/"><Image src={Photo} alt="category" /></Link>

                                   <div className="info | mt-5 flex items-center justify-between">
                                          <div>
                                          <h3>البهنساوي</h3>
                                          <p className='flex gap-5 mt-4'><Location />المريوطية</p>
                                          </div>

                                          <ButtonFavorite />
                                   </div>

                                   <div className="price-timePublisher | flex items-center justify-between mt-12">
                                          <span className='price'>5000000  ج.م</span>
                                          <span className='time'>منذ 10 أيام</span>
                                   </div>
                            </div>

                            <div className="item | block min-w-[200px] max-w-[200px] lg:min-w-[300px] lg:max-w-[300px]">
                                  <Link className='inline-block overflow-hidden rounded-3xl' href="/"><Image src={Photo} alt="category" /></Link>

                                   <div className="info | mt-5 flex items-center justify-between">
                                          <div>
                                          <h3>البهنساوي</h3>
                                          <p className='flex gap-5 mt-4'><Location />المريوطية</p>
                                          </div>

                                          <ButtonFavorite />
                                   </div>

                                   <div className="price-timePublisher | flex items-center justify-between mt-12">
                                          <span className='price'>5000000  ج.م</span>
                                          <span className='time'>منذ 10 أيام</span>
                                   </div>
                            </div>

                            <div className="item | block min-w-[200px] max-w-[200px] lg:min-w-[300px] lg:max-w-[300px]">
                                  <Link className='inline-block overflow-hidden rounded-3xl' href="/"><Image src={Photo} alt="category" /></Link>

                                   <div className="info | mt-5 flex items-center justify-between">
                                          <div>
                                          <h3>البهنساوي</h3>
                                          <p className='flex gap-5 mt-4'><Location />المريوطية</p>
                                          </div>

                                          <ButtonFavorite />
                                   </div>

                                   <div className="price-timePublisher | flex items-center justify-between mt-12">
                                          <span className='price'>5000000  ج.م</span>
                                          <span className='time'>منذ 10 أيام</span>
                                   </div>
                            </div>


                     </div>
              </section>
       )
}
