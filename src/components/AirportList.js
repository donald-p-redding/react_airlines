import React from 'react'
import { updateCode, clearCode } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const AirportList = ({ airports, inRoutes }) => {
  const dispatch = useDispatch()

  return (
    <select onChange={event => dispatch(updateCode(event.target.value))}>
      <option onClick={() => dispatch(clearCode())}>All Airports</option>
      {airports.map(({ code, name }) => {
        return (
          <option
            key={code}
            value={code}
            disabled={inRoutes(code) ? 0 :1}
          >
            {name}
          </option>
        )
      })}
    </select>
  )
}

export default AirportList
