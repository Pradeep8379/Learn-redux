import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status:'Idle'
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //   fetchProducts(state, action) {
    //     state.data = action.payload;
    //   },
  },
  extraReducers: (builders) => {
    builders
    .addCase(getProducts.pending, (state, action) => {
      state.status = 'Loading'
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'Idle'

    })
    .addCase(getProducts.rejected, (state, action) => {
      state.data = action.payload;
      state.status = 'Error'

    })
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});

// export function getProducts() {
//   return async function  getProductsThunk (dispatch, getState)  {
//     const data =await fetch("https://fakestoreapi.com/products");
//     const result =await data.json();

//     dispatch(fetchProducts(result));
//   };
// }
