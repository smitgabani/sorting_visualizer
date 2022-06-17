import React from 'react'

const Button = ({displayText, onClick, disabled}) => {
  return (
    <div>
      <button id="control_btn" onClick={onClick} disabled={disabled}> {displayText} </button>
    </div>
  )
}

export default Button
