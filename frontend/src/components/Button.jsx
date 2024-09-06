import React from 'react'
import "./button.css"

export const Button = ({label, onClick}) => {
  return (
    <button className='p-2 font-semibold text-md' onClick={onClick}>{label}</button>
  )
}
