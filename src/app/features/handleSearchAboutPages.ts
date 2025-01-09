import { KeyboardEvent } from "react";

export function enterSearch(event:KeyboardEvent):void{
       if (event.key === "Enter"){
              alert(`you click enter key`);
              const inputElement = event.target as HTMLInputElement;
              inputElement.value = "";
       }
}

// export function handleSearchAboutPages(){
//        if ()
// }