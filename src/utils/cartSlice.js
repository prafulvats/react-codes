import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        items: []
    },
    reducers : {
        //Mutate the state here
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        }
    }
})
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;