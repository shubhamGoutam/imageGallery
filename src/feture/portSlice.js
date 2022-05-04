import { create } from "@mui/material/styles/createTransitions"
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import productSlice from "../../../../MyShoppingCart/myshoppingcart/src/featuer/productSlice"



const initialState={
    items:[],
    status:null
}


export const  productFetch=createAsyncThunk("product/productFetch",
  async()=>{
      const responce= await axios.get("http://localhost:3002/posts")
      
  }
)


 const postSlice=createSlice({
   name:"product",
   initialState,
   reducers:{},
   extraReducers:{
     [productFetch.pending]:(state,action)=>{
         state.status="pending"
     },
     [productFetch.fulfilled]:(state,action)=>{
        state.fulfilled="fullfiled",
        state.status=action.payload
     },
     [productFetch.rejected]:(state,action)=>{
        state.status="rejected"
     }
      
   }
 }) 

export default productSlice.reducer
 