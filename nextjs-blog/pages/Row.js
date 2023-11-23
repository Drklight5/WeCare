import React from 'react'
import PropTypes from 'prop-types'

function Row(props) {
  return (
    <tr>
        <td>props.time</td>
        <td>props.bpm</td>
        <td>props.temperatura</td>
        <td>props.giro</td>
        <td>props.sonido</td>
    </tr>
  )
}

Row.propTypes = {}

export default Row
