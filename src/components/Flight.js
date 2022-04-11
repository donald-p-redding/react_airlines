import React from 'react'
import { getAirlineById, getAirportByCode } from '../data'

const Flight = ({ route:{airline, src, dest} }) => {
  return (
    <tr>
      <td>{getAirlineById(airline).name}</td>
      <td>{getAirportByCode(src).name}</td>
      <td>{getAirportByCode(dest).name}</td>
    </tr>
  )
}

export default Flight