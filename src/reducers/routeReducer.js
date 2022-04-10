import { createSlice } from "@reduxjs/toolkit";
import { routes } from '../data'

const routeSlice = createSlice({
  name: 'routes',
  initialState: [...routes],
  reducers: {
    setRoutes(_, action) {
      const routes = action.payload
      return [...routes]
    },
    matchingRoutes(state, action) {
      const { id, code } = action.payload
      return state.filter(route => {
        return (
          (!id  || route.airline === id) &&
          (!code || route.src === code || route.dest === code)
        )
      })

    }
  }
})

export const currentRoutes = ((idx) => {
  return (_, getState) => {
    const { routes, view:{ itemsPerPage } } = getState()
    return routes.slice(idx, idx+itemsPerPage)
  }
})


export const { setRoutes, matchingRoutes } = routeSlice.actions
export default routeSlice.reducer