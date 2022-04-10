import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: 'view',
  initialState: {n: 0, itemsPerPage: 25 },
  reducers: {
    pageUp(state) {
      return {...state, n: state.n + state.itemsPerPage}
    },

    pageDown(state) {
      return {...state, n: state.n - state.itemsPerPage}
    }
  }
})

export const nextPage = (event) => {
  event.preventDefault()
  return dispatch => {
    dispatch(pageUp())
  }
}

export const prevPage = (event) => {
  event.preventDefault()
  return dispatch => {
    dispatch(pageDown())
  }
}

export const status = (idx) => {
  return (_, getState) => {
    const { view: { itemsPerPage}, routes } = getState()
    return `Showing ${idx+1} - 
            ${routes.length < itemsPerPage ? routes.length : idx+itemsPerPage}
            out of ${routes.length} routes.`
  }
}

export const isAtBeginning = () => {
  return (_, getState) => {
    const { view:{ n }} = getState()
    return n <= 0
  }
}

export const isAtEnd = () => {
  return (_, getState) => {
    const { view:{ n, itemsPerPage }, routes } = getState()
    return n + itemsPerPage >= routes.length
  }
}


export const { pageUp, pageDown } = viewSlice.actions
export default viewSlice.reducer