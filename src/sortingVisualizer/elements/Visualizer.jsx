import React from 'react'
import Bar from './Bar'

const Visualizer = (props) => {
  return (
    <div>
        <div className='visualizer'>
            {props.primaryArray &&
            props.primaryArray.map((val, key) => {
                return (
                        <Bar id={key} key={key} height={val} arrSize={props.arrSize}/>
                )
            })}
        </div>
        <br/>
    </div>
  )
}

export default Visualizer
