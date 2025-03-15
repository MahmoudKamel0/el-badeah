import React from 'react'

export default function Location({size = 20}:{size?:number}) {
       return (
              <svg width={size} height={size} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M7.5 17C4.25 13.8 1 10.9346 1 7.4C1 3.86538 3.91014 1 7.5 1C11.0898 1 14 3.86538 14 7.4C14 10.9346 10.75 13.8 7.5 17Z" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

       )
}
