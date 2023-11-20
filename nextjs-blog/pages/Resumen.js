import React from 'react'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Graficas.module.css";
import Grafica from "./Grafica"

var pulsoRecord = [];

function correcto(a){
  if (80 < a && a < 150){
    return("Bien")
  }else{
    return("Mal");
  }
}

function pulso(data){

  return(
    <div>
      <p><span className={styles.big}>{data}</span> bpm</p>
      <p>{correcto(data)}</p>
    </div>
  )
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

function content(data, curr){
  //console.log(data);
  pulsoRecord.push(data[curr].bpm);
  return (  
    <div>   
    <div className='text-center'>
        <h1 className='display-5'>Your baby is sleeping </h1>
      </div>

      <div className='row justify-content-around'>

        <div className='col-md-6 '>
          <div className={styles.cell}>
            <div className='text-center'>
              <p ><b>Pulso</b></p>
              {pulso(data[curr].bpm)}
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <div className={styles.cell}>
            <div className='text-center'>
              <p><b>Humedad</b></p>
              <p><span className={styles.big}>{Math.floor(Math.random() * (30 - 28) + 28)}</span>%</p>
            </div>
          </div>
        </div>
      </div>
      <Grafica d={pulsoRecord}></Grafica>
      <div className='text-center my-3'>{data[curr].time}
      <br/>
      <b>Time</b></div>
    </div>
    );
}

function Resumen({data}) {

  const [curr, setCurr] = useState(0);
  useEffect(() => {
    nextRegister();
    return () => {
    
    }
  }, )

  const nextRegister = ()=>{
    setTimeout(() => {
    setCurr(curr + 1);
    }, 1000);
  }
  
  return (
    <div>
      {(data != "W" && data.length > 0) ? content(data, curr) : waiting()}
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