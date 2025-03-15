import React from 'react'

export default function Favorite({size = 17, fill, stroke} : {size?:number, fill:string, stroke:string}) {
       return (
              <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path fill={fill} stroke={stroke} strokeWidth={2} d="M1,8.4 C1,4 4.5,3 6.5,3 C9,3 11,5 12,6.5 C13,5 15,3 17.5,3 C19.5,3 23,4 23,8.4 C23,15 12,21 12,21 C12,21 1,15 1,8.4 Z" />
              </svg>

       )
}
