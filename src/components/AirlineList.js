import React from 'react'
import { useDispatch } from 'react-redux'
import { updateId } from '../reducers/filterReducer'


const AirlineList = ({ filter, airlines, inRoutes }) => {
  const dispatch = useDispatch()

  return (
    <select onChange={event => dispatch(updateId(Number(event.target.value)))}>
      {
        filter.id
          ? <option value=''>All Airlines</option>
          : <option selected value=''>All Airlines</option>
      }
      {airlines.map(({ name, id }) => {
        return (
          <option
            key={id}
            value={id}
            disabled={inRoutes(id) ? 0 :1}
          >
            {name}
          </option>
        )
      })}
    </select>
  )
}

export default AirlineList