import { createSlice } from "@reduxjs/toolkit";


const getCartItems = () => {
    let localCartData = localStorage.getItem('items');
    const parsedData = JSON.parse(localCartData);
    if (!Array.isArray(parsedData)) return [];
    return parsedData;
}


const cartSlice = createSlice({
    name: "cart",
    initialState: getCartItems(),
    reducers: {
        add(state, action) {
            state.push(action.payload);
            localStorage.setItem('items', JSON.stringify(state));
        },
        remove(state, action) {
            
            const updateState =  state.filter(item => item.id !== action.payload);
            localStorage.setItem('items', JSON.stringify(updateState));
            return updateState;
        },
    }
})

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;

