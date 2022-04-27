import React from 'react'

export default function Button({Text,handleClick}) {
  return (
    <div>
        <button  onClick={()=>{
            handleClick(Text)
        }} className='offi-button'>{Text}</button>
    </div>
  )
}
