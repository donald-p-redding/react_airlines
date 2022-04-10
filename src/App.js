import React, { useEffect, useState } from 'react';
import './App.css';
import Flights from './components/Flights'
import Paginator from './components/Paginator'
import AirlineList from './components/AirlineList'
import AirportList from './components/AirportList'
import { useSelector, useDispatch } from 'react-redux';
import { airlines, airports } from './data'
import { matchingRoutes, currentRoutes } from './reducers/routeReducer';

const App = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  const currIdx = useSelector(state => state.view.n)
  const routes = useSelector(state => state.routes)

  useEffect(() => {
    dispatch(matchingRoutes(filter))
  },[filter])

  const inRoutes = (value) => {
    const result = routes.some(({airline, src, dest}) => {
      return [airline, src, dest].includes(value)
    })
    return result
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        Show routes on <AirlineList inRoutes={inRoutes} airlines={airlines} />
        flying in or out of <AirportList inRoutes={inRoutes} airports={airports} />
        <Flights routes={dispatch(currentRoutes(currIdx))} />
        <Paginator />
      </section>
    </div>
  )

}

export default App;