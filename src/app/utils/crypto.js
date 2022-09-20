import { createSlice } from '@reduxjs/toolkit'
export const CryptoReducer = createSlice({
  name: 'crypto',
  initialState: {
      socket:null,
      data:{payload:[],status:'disconnect',message:`Start connection to crypto `},
      sample :[
        {
          Name: 'LTC',
          LastClose: 'waiting',
          Current: 'waiting',
          Ask: 'waiting',
          Bid: 'waiting',
          High: 'waiting',
          Low: 'waiting',
          Change: 'waiting',
          Change_: 'waiting',
          Spread: 'waiting',
          Volume: 'waiting',
          Time: 'waiting',
        },
        {
          Name: 'XRP',
          LastClose: 'waiting',
          Current: 'waiting',
          Ask: 'waiting',
          Bid: 'waiting',
          High: 'waiting',
          Low: 'waiting',
          Change: 'waiting',
          Change_: 'waiting',
          Spread: 'waiting',
          Volume: 'waiting',
          Time: 'waiting',
        },
      ]
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