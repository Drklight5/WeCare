

import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Graficas.module.css";

import React, { useState} from 'react'

function Dato({title, dato, evaluate, type}) {
    const [style, setStyle] = useState("bg-secondary")

    function evaluateStyle(){
        evaluate() ?  setStyle("bg-success"): setStyle("bg-danger");
    }
  return (
    <div>
        <div className='col-md-6'>
            <div className={[styles.cell, style].join(' ')}>
                <div className='text-center'>
                    <p ><b>{title}</b></p>
                    <p><span className={styles.big}>{dato}</span> {type}</p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Dato
