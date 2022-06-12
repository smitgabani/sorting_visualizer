import React from "react";
import { useState, useEffect, useRef } from 'react';
import './sortingcss.css';

// Default const (should give conrol to user)


export default function SortingVisualizer(props) {

    const [array, setArray] = useState([]);  // defalult array: []

    const [isSorting, setIsSorting] = useState([]);
    const [isSorted, setIsSorted] = useState([]);

    const containerRef = useRef(null);

    useEffect(arrInit,[]);

    function arrInit() {
    }


    return (
      <div>
        <div id="nav">
        <span style={{display:"block"}}><span className="head">Sorting Visualizer</span>  .by smitgabani</span>
        <hr className="hr_inner"/>
        </div>
        <div id="controls">
            <button id="control_btn">Button</button>
            <button id="control_btn">Button</button>
            <button id="control_btn">Button</button>
            <button id="control_btn">Button</button><br/>
            Array size:
            <input id="size_input"/>
            <br/>
            Speed:

        <div className="sidebar__inner "></div>
        </div>
        <div id='visualizer'>
            <h3>alogo name</h3>
            <div className="visualizer">
                <div className="array-bar" style={{height: "50vh", width: `${100 / 10}vw`}}></div>
                <div className="array-bar" style={{height: "50vh", width: `${100 / 10}vw`}}></div>
                <div className="array-bar" style={{height: "50vh", width: `${100 / 10}vw`}}></div>
                <div className="array-bar" style={{height: "50vh", width: `${100 / 10}vw`}}></div>
                <div className="array-bar" style={{height: "50vh", width: `${100 / 10}vw`}}></div>
                <div className="array-bar" style={{height: "50vh", width: `${100 / 10}vw`}}></div>
                <div className="array-bar" style={{height: "50vh", width: `${100 / 10}vw`}}></div>
                <div className="array-bar" style={{height: "50vh", width: `${100 / 10}vw`}}></div>
                <div className="array-bar" style={{height: "50vh", width: `${100 / 10}vw`}}></div>
                <div className="array-bar" style={{height: "50vh", width: `${100 / 10}vw`}}></div>
            </div><br/>
            alogo description
        </div>
      </div>
    )
}
