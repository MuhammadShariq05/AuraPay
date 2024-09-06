import React from 'react'
import './button.css'
export const ButtonNav = ({label, onClick}) => {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  )
}
