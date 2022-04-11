import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: { id: null, code: null },
  reducers: {
    updateId(state, action) {
      const id = action.payload
      return { ...state, id }
    },

    updateCode(state, action) {
      const code = action.payload
      return { ...state, code }
    },

    clearCode(state) {
      return { ...state, code: null }
    },

    clearId(state) {
      return { ...state, id: null }
    },

    reset() {
      return { id: null, code: null }
    }
  }
})

export const { updateId, reset, updateCode, clearCode, clearId } = filterSlice.actions
export default filterSlice.reducer