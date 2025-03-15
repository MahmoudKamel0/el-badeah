"use client"
import React, { useState } from 'react'
import Favorite from '../../../../public/favorite'

export default function ButtonFavorite() {
       const [isFavorite, setIsFavorite] = useState(false)
       return (
              <button onClick={()=> setIsFavorite(!isFavorite)} className='favorite'>
                     <Favorite fill={isFavorite ? "#D90429" : 'none'} stroke={isFavorite ? "#D90429" : '#000000'} />
              </button>
       )
}
