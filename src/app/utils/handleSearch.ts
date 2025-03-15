"uce client"
import { useRouter } from "next/navigation";
import { FormEvent } from "react";


export function handleSearch(formEvent:FormEvent<HTMLFormElement>, value:string, router:ReturnType<typeof useRouter>):void {
       formEvent.preventDefault()

     // redirect to search page
       if (value) {
              router.push(`/search?q=${encodeURIComponent(value)}`);
       }      

       // when input is empty, redirect to home page
       if (value == "") {
              router.push(`/`);
       }       

       console.log(formEvent);
       
}

// export function handleSearchAboutPages(){
//        if ()
// }