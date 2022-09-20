import { createSlice } from '@reduxjs/toolkit'
export const CryptoReducer = createSlice({
  name: 'crypto',
  initialState: {
      socket:null,
      data:{payload:[],status:'disconnect',message:`Start connection to crypto `},
     
  },
  reducers: {
    setCryptoData: (state, action) => {
        state.data = action.payload
    },
    setCryptoSocket: (state, action) => {
        state.socket = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setCryptoData, setCryptoSocket } = CryptoReducer.actions

export default CryptoReducer.reducer