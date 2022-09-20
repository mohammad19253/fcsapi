import { createSlice } from '@reduxjs/toolkit'
export const ForexReducer = createSlice({
  name: 'forex',
  initialState: {
      socket:null,
      data:{payload:[],status:'disconnect',message:`Start connection to forex `},
     
  },
  reducers: {
    setForexData: (state, action) => {
        state.data = action.payload
    },
    setForexSocket: (state, action) => {
        state.socket = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setForexData, setForexSocket } = ForexReducer.actions

export default ForexReducer.reducer