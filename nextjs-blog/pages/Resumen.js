import React from 'react'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Graficas.module.css";

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
        <span class="visually-hidden">Loading...</span>
      </div>
      <span className='px-3'>Esperando información ...</span>
      
      </div>
  );
}

function content(data, curr){
  console.log(data);
  return (  
    <div>   
    <div className='text-center'>
        <h1 className='display-3'>Resumen</h1>
      </div>
      <div className='row justify-content-around'>
        <div className='col-md-6'>
          <div className={styles.cell}>
            <div className='text-center'>
              <p>Pulso</p>
              {pulso(data[curr].bpm)}
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className={styles.cell}>
            <p>Oxigenación</p>
            <p><span className={styles.big}>98</span>%</p>
          </div>
        </div>
      </div>
      <div>{data[curr].time}</div>
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
    }, 2000);
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