import { createSlice } from '@reduxjs/toolkit'
export const CryptoCurrencyReducer = createSlice({
  name: 'cryptoCurrncy',
  initialState: {
      socket:null,
      data:{payload:[],status:'disconnect',message:`Start connection to cryptoCurrncy `},
      sample:[
        {
          Name: 'LTC-USD',
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
          Name: 'XRP-USD',
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
    setCryptoCurrencyData: (state, action) => {
        state.data = action.payload
    },
    setCryptoCurrencySocket: (state, action) => {
        state.socket = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setCryptoCurrencyData, setCryptoCurrencySocket } = CryptoCurrencyReducer.actions

export default CryptoCurrencyReducer.reducer