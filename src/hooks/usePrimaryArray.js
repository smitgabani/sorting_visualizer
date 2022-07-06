import { useState, useEffect } from "react";

export const usePrimaryArray = (arrSize) => {
    const [primaryArray, setPrimaryArray] = useState([]);

    // utility
    const randomVals = (min, max) => {
      let randomVal = Math.floor(Math.random() * (max - min + 1) + min)
      return randomVal;
    }

    const randomizeArray = () => {
        for (let i = 0; i < primaryArray.length; i++) {
          let array_bar = document.getElementById(i).style
          array_bar.backgroundColor = '#ff7f50'
        }
        let array = [];
        for (let i = 0; i < arrSize; i++) {
          array.push(randomVals(20, 400))
        }
        setPrimaryArray(array)
    }

    useEffect(() => {
      randomizeArray();
    },[]);

    return [primaryArray, setPrimaryArray, randomizeArray]

}