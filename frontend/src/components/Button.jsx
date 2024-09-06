import React from 'react'

export const Button = ({label, onClick}) => {
  return (
    <button className='p-2 font-semibold text-md' onClick={onClick}>{label}</button>
  )
}
