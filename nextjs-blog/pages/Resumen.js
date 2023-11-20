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

function correctoO(a){
  if (96 < a){
    return("Bien")
  }else{
    return("Mal");
  }
}

function ox(){
  var oxi = 98
  return(
    <div>
      <p><span className={styles.big}>{oxi}</span>%</p>
      <p>{correctoO(oxi)}</p>
    </div>
  )
}

function correctoT(a){
  if (30 < a){
    return("Bien")
  }else{
    return("Mal");
  }
}

function temp(){
  var t = 35
  return(
    <div>
      <p><span className={styles.big}>{t}</span>°C</p>
      <p>{correctoT(t)}</p>
    </div>
  )
}

function volteado(){
  var t = 0
  if (t == 0){
    return(
      <div>
        <p>No se encuentra volteado</p>
      </div>
    )
  }
  return(
    <div>
      <p>Peligro: Está volteado</p>
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
            <div className='text-center'>
              <p>Oxigenación</p>
              {ox()}
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-around'>
        <div className='col-md-6'>
          <div className={styles.cell}>
            <div className='text-center'>
              <p>Temperatura</p>
              {temp()}
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className={styles.cell}>
            <div className='text-center'>
              <p>Posición</p>
              {volteado()}
            </div>
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