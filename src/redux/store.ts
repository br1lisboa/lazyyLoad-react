import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/cart.slice';
import { cartIconSlice } from './slices/cartIcon.slice';

export const store = configureStore({
    reducer: {
        cartReducer: cartSlice.reducer,
        cartIconReducer: cartIconSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch