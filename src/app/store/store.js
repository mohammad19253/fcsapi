import { configureStore , combineReducers, getDefaultMiddleware   } from '@reduxjs/toolkit'
import CryptoReducer from '../utils/crypto';
import ForexReducer from '../utils/forex'
import CryptoCurrencyReducer from '../utils/cryptoCurrney';
const reducers = combineReducers({
  forex: ForexReducer,
  crypto:CryptoReducer,
  cryptoCurrncy:CryptoCurrencyReducer,
});


const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
  devTools: process.env.NODE_ENV !== 'production',
});
export  {store};