import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Graficas.module.css";

function correcto(a){
  if (80 < a && a < 150){
    return("Bien")
  }else{
    return("Mal");
  }
}

function pulso(){
  var pulso = 70
  return(
    <div>
      <p><span className={styles.big}>{pulso}</span> bpm</p>
      <p>{correcto(pulso)}</p>
    </div>
  )
}

function Resumen(props) {
  return (
    <div>
      <div className='text-center'>
        <h1 className='display-1'>Resumen</h1>
      </div>
      <div className='row justify-content-around'>
        <div className='col-md-6'>
          <div className={styles.cell}>
            <div className='text-center'>
              <p>Pulso</p>
              {pulso()}
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