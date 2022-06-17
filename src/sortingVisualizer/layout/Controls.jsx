import React from 'react'
import Button from '../elements/Button'
import Dropdown from '../elements/Dropdown'
import Slider from '../elements/Slider'
import Input from '../elements/Input'

const Controls = ({handleSorting, disableOptions, randomizeArray, setAnimationSpeed, changeSize}) => {
  return (
    <div id="controls">
            <Button
              displayText={"Sort"}
              onClick={handleSorting}
              disabled={disableOptions}
            >Generate random array</Button>
            <Button
              displayText={"Generate random array"}
              onClick={randomizeArray}
              disabled={disableOptions}
            >Generate random array</Button>
           <Dropdown/>
           <Slider disabled={disableOptions} onChange={(e) => setAnimationSpeed(e.target.value)} />
           <Input changeSize={changeSize} disabled={disableOptions}/>
           <br/>
           <a href='https://github.com/smitgabani/sorting_visualizer'><i class="fa-brands fa-github fa-2x"></i></a>
       <div className="sidebar__inner "></div>
    </div>
  )
}

export default Controls
