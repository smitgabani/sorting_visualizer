import React from 'react'

const Bar = (props) => {
  return (
    <div
        className='array_bar'
        id={props.id}
        key={props.id}
        style={{height: `${props.height / 8}vh`, width: `${100 / props.arrSize}vw`}}
    >
    </div>
  )
}

export default Bar
