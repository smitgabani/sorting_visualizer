import './sortingcss.css';
import React from "react";
import { useState } from 'react';
import { usePrimaryArray } from "../hooks/usePrimaryArray";
import { useArrSize } from "../hooks/useArrSize";
import { useAnimationSpeed } from '../hooks/useAnimationSpeed';
import Controls from './layout/Controls';
import Demonstration from './layout/Demonstration';
import Navbar from './layout/Navbar';

const DEFAULT_ARRAY_SIZE = 50;
const DEFAULT_SPEED = 50;

export default function SortingVisualizer(props) {
   const [arrSize, setArrSize] = useArrSize(DEFAULT_ARRAY_SIZE);
   const [primaryArray, setPrimaryArray, randomizeArray] = usePrimaryArray(arrSize);
   const [algorithm, setAlgorithm] = useState('bubbleSort');
   const [animationSpeed, setAnimationSpeed] = useAnimationSpeed(DEFAULT_SPEED);
   const [disableOptions, setDisableOptions] = useState(false);

   const bubbleSort = async () => {
     let currentArr = primaryArray;
     let sorted = false
     setAlgorithm({ name: 'Bubble Sort', timeComplexity: 'O(n^2)', desc: 'bubble sort description' })
     while (!sorted) {
       sorted = true
       for (let i = 0; i < currentArr.length - 1; i++) {
         for (let j = 0; j < currentArr.length - i - 1; j++) {
           if (currentArr[j] > currentArr[j + 1]) {
             let temp = currentArr[j]
             currentArr[j] = currentArr[j + 1]
             currentArr[j + 1] = temp
             setPrimaryArray([...primaryArray, currentArr])
             let bar1 = document.getElementById(j).style
             let bar2 = document.getElementById(j + 1).style
             bar1.backgroundColor = '#DC143C'
             bar2.backgroundColor = '#6A5ACD'
             await sleep(animationSpeed)
             bar1.backgroundColor = '#FF7F50'
             bar2.backgroundColor = '#FF7F50'
             sorted = false
           }
         }
       }
       if (sorted) finishedAnimation()
     }
   }
   const sleep = (milliSeconds) => {
     return new Promise((resolve) => setTimeout(resolve, milliSeconds))
   }
   const finishedAnimation = async () => {
     for (let i = 0; i < primaryArray.length; i++) {
       let array_bar = document.getElementById(i).style
       array_bar.backgroundColor = 'green'
       await sleep(animationSpeed)
     }
     setDisableOptions(false);
   }
   const handleSorting = () => {
     setDisableOptions(true)
     switch (algorithm) {
       case 'bubbleSort':
         bubbleSort()
         break
        default:
          bubbleSort()
     }
   }
   const changeSize = (e) => {
     if (e.target.value > 10 && e.target.value < 100) {
       setArrSize((arrSize) => e.target.value);
       randomizeArray();
     }
   }
   return (
     <div>
        <Navbar/>
        <Controls
          handleSorting={handleSorting}
          disableOptions={disableOptions}
          randomizeArray={randomizeArray}
          setAnimationSpeed={setAnimationSpeed}
          changeSize={changeSize}
        />
        <Demonstration
          algorithm={algorithm}
          primaryArray={primaryArray}
          arrSize={arrSize}
        />
     </div>
   )
}