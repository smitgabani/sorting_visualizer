import React from 'react'
import Visualizer from '../elements/Visualizer'

const Demonstration = ({algorithm, primaryArray, arrSize}) => {
  return (
    <div id='visualizer'>
           <h3>{algorithm.name || "Select an Algorithm"}</h3>

           <Visualizer primaryArray={primaryArray} arrSize={arrSize}/>

           Time Complexity: <b>{algorithm.timeComplexity || "select an algorithm"}</b>
           <br/><br/>
           🟥 and 🟦 Key comparisons <br/>
       </div>
  )
}

export default Demonstration
