import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            const existingProduct = state.products.find(
                (product) => product.id === action.payload.id
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                action.payload.quantity = 1;
                state.products.push(action.payload);
            }

            state.total += action.payload.price;
        },
        reduceProduct: (state, action) => {
            state.quantity += 1;
            const existingProduct = state.products.find(
                (product) => product.id === action.payload.id
            );

            if (existingProduct) {
                existingProduct.quantity -= 1;
            } else {
                action.payload.quantity = 1;
                state.products.push(action.payload);
            }

            state.total += action.payload.price;
        },
        removeProduct: (state, action) => {
            const productToRemove = state.products.find(
                (product) => product.id === action.payload
            );

            if (productToRemove) {
                state.total -= productToRemove.price * productToRemove.quantity;

                state.products = state.products.filter(
                    (product) => product.id !== action.payload
                );

                state.quantity -= productToRemove.quantity;
            }
        },
    },
});

export const { addProduct, removeProduct ,reduceProduct } = cartSlice.actions;
export default cartSlice.reducer;
