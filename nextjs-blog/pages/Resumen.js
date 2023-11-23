import React from 'react'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Graficas.module.css";
import Grafica from "./Grafica"
import Dato from "./Dato"

var pulsoRecord = [];
var temperaturaRecord = [];

function Row(el) {
  console.log(el);
  return (
    <tr >
        <td scope="col">{el.time}</td>
        <td scope="col">{el.bpm}</td>
        <td scope="col">{el.temperatura}</td>
        <td scope="col">{el.giro}</td>
        <td scope="col">{el.sonido}</td>
    </tr>
  )
}
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

function checkSonido(dato){
  return (dato < 510 ) ? true: false;
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

function content(data, ambient){
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

      <div className='row justify-content-around my-5'>
        <h2>Baby</h2>
        <Dato title={"Pulso"} dato={data[0].bpm} type={"bpm"} evaluate={checkPulso}></Dato>
        <Dato title={"Position"} dato={data[0].giro} type={"°"} evaluate={checkGiro}></Dato>
        <Dato title={"Temperatura"} dato={data[0].temperatura} type={"°"} evaluate={checkTemperatura}></Dato>
        <Dato title={"Ruido"} dato={data[0].sonido} type={""} evaluate={checkSonido}></Dato> 
      </div>
      <div className='row justify-content-around my-5'>
        <h2>Ambient</h2>
        <Dato title={"Infrarrojo"} dato={ambient[0].infra} type={""} evaluate={checkPulso}></Dato>
        <Dato title={"Temperatura"} dato={ambient[0].temp} type={"°"} evaluate={checkGiro}></Dato>
        <Dato title={"Humedad"} dato={ambient[0].humedad} type={""} evaluate={checkTemperatura}></Dato>
      </div>
      
      <div className='text-center my-3'>{data[0].time}<br/><b>Time</b></div>
      
      <div>
        <h1>Ciclo de sueño</h1>
        <Grafica d={pulsoRecord} title={"Pulso"}></Grafica>
        <Grafica d={temperaturaRecord} title={"Temperatura"} ></Grafica>
      </div>

      <div>
        <h1>Historial</h1>
        <table className={"table"}>
          <thead>
            <th>Time</th>
            <th>Pulse</th>
            <th>Temp</th>
            <th>Giro</th>
            <th>Sound</th>
          </thead>
          <tbody>
            {data.map((el) => Row(el))}
          </tbody>
        </table>

      </div>
      
      
      
    </div>
    );
}

function Resumen({data, ambient}) {
  return (
    <div>
      {((data != "W" && data.length > 0) && (ambient != "W" && data.length > 0)) ? content(data,ambient) : waiting()}
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