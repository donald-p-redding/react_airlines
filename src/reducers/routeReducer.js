import { createSlice } from '@reduxjs/toolkit'
import { routes, getAirportByCode } from '../data'

const routeSlice = createSlice({
  name: 'routes',
  initialState: [...routes],
  reducers: {
    setRoutes(_, action) {
      const routes = action.payload
      return [...routes]
    }
  }
})


export const currentRoutes = ((idx) => {
  return (_, getState) => {
    const { routes, view:{ itemsPerPage } } = getState()
    return routes.slice(idx, idx+itemsPerPage)
  }
})

export const matchingRoutes = ({ id, code }) => {
  return (_, getState) => {
    const { routes } = getState()
    return routes.filter(route => {
      return (
        (!id  || route.airline === id) &&
        (!code || route.src === code || route.dest === code)
      )
    })}
}

export const getCoordinates = (matches) => {
  return matches.map(route => {
    return {
      src: getAirportByCode(route.src),
      dest: getAirportByCode(route.dest)
    }
  })
}


export const { setRoutes } = routeSlice.actions
export default routeSlice.reducer