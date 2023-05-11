import {  configureStore,Action,ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from 'redux'
//import cartReducer from "./cartSlice"
import productReducer from './ProductSlice'
import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'
const store=configureStore({
    reducer:{
      //  cart:cartReducer,
        product:productReducer
    }
});
export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
