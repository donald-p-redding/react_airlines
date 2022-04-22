import React from 'react'

import './App.css'
import Flights from './components/Flights'
import Paginator from './components/Paginator'
import AirlineList from './components/AirlineList'
import AirportList from './components/AirportList'
import Map from './components/Map'

import { useSelector, useDispatch } from 'react-redux'
import { airlines, airports } from './data'
import { matchingRoutes, getCoordinates } from './reducers/routeReducer'
import { reset } from './reducers/filterReducer'

const App = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  const [idx, itemsPerPage] = useSelector(state => [state.view.n, state.view.itemsPerPage])

  const matches = dispatch(matchingRoutes(filter))

  const inRoutes = (value) => {
    const result = matches.some(({ airline, src, dest }) => {
      return [airline, src, dest].includes(value)
    })
    return result
  }

  const currentView = () => {
    return matches.slice(idx, idx+itemsPerPage)
  }

  return (
    <div className='app'>
      <header className='header'>
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <Map coordinates={getCoordinates(matches)}/>
        <div>
          Show routes on <AirlineList inRoutes={inRoutes} airlines={airlines} />
          flying in or out of <AirportList inRoutes={inRoutes} airports={airports} />
          <button onClick={() => dispatch(reset())}>Reset Filters</button>
        </div>
        <Flights routes={currentView()} />
        <Paginator routes={matches} />
      </section>
    </div>
  )

}

export default App