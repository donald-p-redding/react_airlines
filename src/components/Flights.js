import React  from 'react'
import Flight from './Flight'


const Flights = ({ routes }) => {
  const genId = ({ src }) => {
    const val = Math.floor(Math.random() * 10000)
    return String(val) + src
  }

  return (
    <table className='routes-table'>
      <thead>
        <tr>
          <th>Airline</th>
          <th>Source Airport</th>
          <th>Destination Airport</th>
        </tr>
      </thead>
      <tbody>
        {routes.map(route => <Flight key={genId(route)} route={route} />)}
      </tbody>
    </table>
  )
}

export default Flights

