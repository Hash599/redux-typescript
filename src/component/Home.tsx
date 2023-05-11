import React from 'react'
import "../index.css"
import Products from './Products'

function Home() {
  return (
    <div className='Home'>
       <section className='heading'><h1>WELCOME TO TYPESCRIPT STORE</h1></section>
       <section className='Product__Heading'><h2> Our Products</h2></section>

       <div className="products">
<Products/>


       </div>
    </div>
  )
}

export default Home