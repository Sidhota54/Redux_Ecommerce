const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const numberofProducts = 20;
const randomNumber = Math.floor(Math.random() * 80) + 1; 

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
})

export const { setProducts, setStatus,productById } = productSlice.actions;
export default productSlice.reducer;

// Thunks
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=${numberofProducts}&skip=${randomNumber}`);
    const data = await res.json();
    return data;
})


// export function fetchProducts(){
//     return async function fetchProductThunks(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING));
//         try{
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUSES.IDLE))
//         }
//         catch(err){
//             console.log(err)
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }

