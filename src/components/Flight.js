import React from 'react'
import { getAirlineById, getAirportByCode } from '../data'

const Flight = ({ route:{airline, src, dest} }) => {
  return (
    <tr>
      <td>{getAirlineById(airline)}</td>
      <td>{getAirportByCode(src)}</td>
      <td>{getAirportByCode(dest)}</td>
    </tr>
  )
}

export default Flight