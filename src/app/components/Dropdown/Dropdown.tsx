"use client"
import {ChangeEvent, useRef, useState } from "react"
import { cites } from "./city"
import './Dropdown.scss'
import DropdownIcons from "../../../../public/dropdownIcons"
import { useOnClickOutside } from "@/app/Hooks/useOnClickOutside"

export default function Dropdown() {
       const [selectCity, setSelectCity] = useState('جميع المحافظات'),
             [searchTerm, setSearchTerm] = useState(""),
             [showDropdown, setShowDropdown] = useState(false)
       const dropdownReference = useRef<HTMLUListElement>(null)

       // show or close dropdown when click outside the dropdown list
       useOnClickOutside(dropdownReference, () => setShowDropdown(false));
       
       const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
              setSearchTerm(e.target.value)
       }
       
       return (
              <button className="dropdown">
                     <p className="flex items-center justify-start gap-3" onClick={() => setShowDropdown(!showDropdown)}>{selectCity} <DropdownIcons /></p>

                     <ul ref={dropdownReference}
                     className={`${!showDropdown ? 'hidden' : 'flex'} z-10 absolute top-32 p-5 flex-col items-start justify-start gap-7`}>
                            <input type="text" placeholder="ابحث عن المحافظه" value={searchTerm}
                                   onChange={(search) => handleSearch(search)} />

                            {cites.filter(city => city.governorate_name_ar.includes(searchTerm)).length > 0
                                   ? (
                                          cites.filter(city => city.governorate_name_ar.includes(searchTerm))
                                          .map((city) => (
                                                 <li key={city.id} onClick={() => {
                                                        setSelectCity(city.governorate_name_ar)
                                                        setShowDropdown(false)
                                                        setSearchTerm("")
                                                 }
                                                 }>
                                                        {city.governorate_name_ar}
                                                 </li>
                                          ))
                                   )
                                   : (
                                          <li className="h-full cursor-default hover:!bg-white flex items-center justify-center">
                                                 لا يوجد نتائج
                                          </li>
                                   )
                            }
                     </ul>                            
              </button>
       )
}
