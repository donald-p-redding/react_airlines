import React from 'react'
import { useDispatch } from 'react-redux'
import { updateId, clearId } from '../reducers/filterReducer'


const AirlineList = ({ airlines, inRoutes }) => {
  const dispatch = useDispatch()

  return (
    <select onChange={event => dispatch(updateId(Number(event.target.value)))}>
      <option onClick={() => dispatch(clearId())}>All Airlines</option>
      {airlines.map(({name, id}) => {
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