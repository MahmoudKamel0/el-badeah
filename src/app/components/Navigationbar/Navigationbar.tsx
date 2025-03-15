"use client"
import Image from "next/image"
import Link from "next/link"
import Search from "../../../../public/search"
import "./Navigationbar.scss"
import Dropdown from "../Dropdown/Dropdown"
import MarqueeLinksNav from "../MarqueeLinksNav/MarqueeLinksNav"
import MenuButton from "../../../../public/menuButton"
import { useState } from "react"
import Lang from "../../../../public/lang"
import { handleSearch } from "@/app/utils/handleSearch"
import { useRouter } from "next/navigation"



export default function Navigationbar() {

       const [isShowMenu, setIsShowMenu] = useState(false)
       const [valueInput, setValueInput] = useState("")
       const router = useRouter()

       return (
       <>
              <nav className="navigation | flex items-center justify-between px-14 gap-10" dir="rtl">
                     <div className="rightSide-logo-search | flex items-center justify-between flex-auto gap-10">
                            <Link href="/"><Image src="/logo.svg" alt="logo elbeadah" loading="lazy" width="80" height="80"/></Link>

                            <form onSubmit={(e)=> handleSearch(e, valueInput, router)} className={`input-search | ${!isShowMenu ? 'hidden' : 'flex absolute top-32 left-0 right-0 w-full mx-auto border bg-white'} md:static md:flex flex-auto rounded-full overflow-hidden p-2 gap-2 border z-20`}>
                                   <Dropdown />
                                   <input className="flex-auto" onInput={(e)=> setValueInput((e.target as HTMLInputElement).value)} value={valueInput} type="text" placeholder="عايز تشتري إيه؟ تصفح بين السيارات، العقارات، الإلكترونيات، وأكثر!" />
                                   <button className="search | hidden lg:flex items-center justify-center rounded-full gap-5">أبحث الان <Search /></button>
                            </form>
                     </div>

                     <div className={`authentication | ${!isShowMenu ? 'hidden' : 'flex absolute top-56 md:top-32 left-0 right-0 w-full mx-auto border bg-white'} lg:!static !w-auto lg:flex rounded-full overflow-hidden p-2 gap-2 border z-10`}>
                            <Link className="flex flex-auto lg:inline text-center" href="/pages/Login">تسجيل الدخول</Link>
                            <Link className="flex flex-auto lg:inline text-center" href="/register">انشاء حساب</Link>
                     </div>

                     <button onClick={()=> setIsShowMenu(!isShowMenu)} className="menuButton | block lg:hidden p-3 rounded-full"><MenuButton /></button>
                     <button className="language | flex items-center justify-center rounded-full overflow-hidden p-2 px-4 gap-5 border">
                            <span className="inline-block ms-3">EN</span> 
                            <div className="icon | rounded-full"><Lang /></div>
                     </button>
              </nav>
              <MarqueeLinksNav />
       </>       
       )
}
