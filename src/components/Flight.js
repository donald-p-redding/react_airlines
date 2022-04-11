import React from 'react'
import { getAirlineById, getAirportByCode } from '../data'

const Flight = ({ route:{ airline, src, dest } }) => {
  return (
    <tr className='route'>
      <td className='airline'>{getAirlineById(airline).name}</td>
      <td className='airport'>{getAirportByCode(src).name}</td>
      <td className ='airport'>{getAirportByCode(dest).name}</td>
    </tr>
  )
}

export default Flight