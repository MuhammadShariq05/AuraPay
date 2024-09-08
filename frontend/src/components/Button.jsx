import React from 'react'

export const Button = ({label, onClick}) => {
  return (
    <button className='p-2 font-semibold text-md bg-slate-900 text-white rounded-lg' onClick={onClick}>{label}</button>
  )
}
