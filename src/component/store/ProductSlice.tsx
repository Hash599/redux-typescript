import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit"
import { useAppDispatch } from "./Store"
import { Dispatch,AnyAction } from 'redux';
import { ThunkAction} from 'redux-thunk';
import { RootState } from './Store';

import { Action } from 'redux'; 
import Products from "../Products";

export interface Data{
    id:number,
    title:string,
    price:number,
    image:string
}
export interface Product{
    product:Data[]
}


 interface ProductState{
 data:Product[]
 status:Statuses

}
interface Statuses{
    IDLE:string
    LOADING:string
    ERROR:string
}
export const Statuses:Statuses=({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})
const initialState:ProductState={
    data:[],
    status:Statuses
};
export const ProductSlice=createSlice({
    name:'product',
    initialState,
    reducers:
    {
addProduct:(state:ProductState,action:PayloadAction<Product[]>)=>{
state.data=action.payload;


}
            }, 
 })
export const {addProduct} =ProductSlice.actions;
export default ProductSlice.reducer
export const  fetchProduct=():ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch)=>{
     {
        dispatch(fetchProduct())
        try{
            const res=await fetch('https://fakestoreapi.com/products')
            const data=await res.json();
            dispatch(addProduct(data))
        }
        catch(err){}
        
    }
}