import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";
import * as d3 from "d3";

function LinePlot({
    data,
    width = 100,
    height = 400,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 20,
    marginLeft = 20
  }) {

    width = window.innerWidth * 0.75;
    const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
    const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
    const line = d3.line((d, i) => x(i), y);
    return (
      <svg width={width} height={height}>
        <path fill="none" stroke="currentColor" stroke-width="1.5" d={line(data)} />
        <g fill="white" stroke="currentColor" stroke-width="1.5">
          {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5" />))}
        </g>
      </svg>
    );
  }

function Grafica({d, title}) {

  return (
    <div>
      <div className='bg-light p-3 m-2 rounded shadow'>
        <h1>{title}</h1>
        <LinePlot data={d}/>
      </div>
    </div>
  )
  }
  
  
  export default Grafica