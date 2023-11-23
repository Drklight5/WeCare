import React from 'react'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Graficas.module.css";
import Grafica from "./Grafica"
import Dato from "./Dato"

var pulsoRecord = [];
var temperaturaRecord = [];

function checkPulso(a){
  if (80 < a && a < 150){
    return(true);
  }else{
    return(false);
  }
}

function checkGiro(dato){
  return dato == 0 ? true: false;
}

function checkTemperatura(dato){
  
  return ((dato + 8) > 36  && (dato + 8) < 40 ) ? true: false;
}
function waiting(){
  return(
    <div className='centered bg-warning rounded-3 p-5'>
      
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className='px-3'>Esperando información ...</span>
      
      </div>
  );
}

function content(data){
  //console.log(data);
  data.forEach((element) =>{
    pulsoRecord.push(element.bpm);
    temperaturaRecord.push(element.temperatura);
  });

  if (pulsoRecord.length > 20){
    pulsoRecord.shift();
    temperaturaRecord.shift();
  }


  return (  
    <div>   
    <div className='text-center'>
        <h1 className='display-5'>Your baby is sleeping </h1>
      </div>

      <div className='row justify-content-around'>
        <Dato title={"Pulso"} dato={data[0].bpm} type={"bpm"} evaluate={checkPulso}></Dato>
        <Dato title={"Position"} dato={data[0].giro} type={"°"} evaluate={checkGiro}></Dato>
        <Dato title={"Temperatura"} dato={data[0].temperatura} type={"°"} evaluate={checkTemperatura}></Dato>
      </div>
      <Grafica d={pulsoRecord}></Grafica>
      <Grafica d={temperaturaRecord}></Grafica>
      <div className='text-center my-3'>{data[0].time}
      <br/>
      <b>Time</b></div>
    </div>
    );
}

function Resumen({data}) {
  return (
    <div>
      {(data != "W" && data.length > 0) ? content(data) : waiting()}
    </div>
  )
}


export default Resumen


// {dataSensores.map((sensor) => {
//     return (
//         <div key={sensor.idSensores}>
//             <div>{sensor.nombre}</div>
//         </div>
//     );
// })}