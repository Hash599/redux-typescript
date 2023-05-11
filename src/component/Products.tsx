import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import   {fetchProduct} from "./store/ProductSlice"
import useAppDispatch, { RootState } from './store/Store'
 import Data from './store/ProductSlice'

function Products() {
  
    
   const dispatch=useDispatch();
    const {data,status}=useSelector((state:RootState)=>state.product)
    
    
    
      
      useEffect(()=>{
   dispatch( fetchProduct())
    },[]) 
    
    
  return (
    <div>
   
    <div className='productsWrapper'>
   { data.map((product:any)=>(
    <div className='card' key={product.id}>
<img src={product.image} alt=''/>
<h4>{product.title}</h4>
<h5>{product.price}</h5>

    </div>
   ))

   }</div>
  

    </div>
  )
}

export default Products