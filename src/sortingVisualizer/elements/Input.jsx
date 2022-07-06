import React from 'react'

const Input = (props) => {
  return (
    <div>
        Array size:
        <input id="size_input" placeholder="between 10 and 100" type="number" onChange={(e)=>{props.changeSize(e)}} disabled={props.disabled}/>
        <br/>
    </div>
  )
}

export default Input
