import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartIconProp = {
    openCart: boolean
}

const initialState: CartIconProp = {
    openCart: false
}

export const cartIconSlice = createSlice({
    name: 'iconCart',
    initialState,
    reducers: {
        setOpenCart: (state, action: PayloadAction<boolean>) => {
            state.openCart = action.payload
        }
    }
})

export const { setOpenCart } = cartIconSlice.actions