import React from 'react'

const Slider = ({ onChange, disabled}) => {
  return (
    <div>
      <br/>
      Animation Speed:
      <div className='slider_wrapper'>
        max
        <input onChange={onChange} type="range" min="10" max="300" className="slider" id="myRange" disabled={disabled}></input>
        min
      </div>
      <br/>
    </div>
  )
}

export default Slider;