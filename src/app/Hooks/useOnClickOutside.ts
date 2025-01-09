import { RefObject, useEffect } from "react";

/**
       * This hook is used to close the dropdown list when the user clicks outside the dropdown list
       * @param ref  is a reference to the dropdown list
       * @param callback is a function that will be called when the user clicks outside the dropdown list
 */

export function useOnClickOutside(ref: RefObject<HTMLUListElement | HTMLElement | null>, callback: () => void) {
       useEffect(() => {
              const handleClickOutside = (e: MouseEvent) => {
                     if (ref.current && !ref.current.contains(e.target as Node)) {
                            callback();
                     }
              };
              document.addEventListener("click", handleClickOutside);
              return () => {
                     document.removeEventListener("click", handleClickOutside);
              };
       }, [ref, callback]);
}