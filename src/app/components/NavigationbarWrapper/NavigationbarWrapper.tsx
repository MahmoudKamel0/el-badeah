"use client";
import { usePathname } from "next/navigation";
import Navigationbar from "../Navigationbar/Navigationbar";


export default function NavigationbarWrapper() {
       const pathname = usePathname()

       if (pathname === "/pages/Login") {
              return null;
       }

       return (
              <Navigationbar />
       )
}

