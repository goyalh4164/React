import React from 'react'
import Product from './Product'

const Home = () => {
  const arr = [1,2,3,4]
  
  return (
    <div>
      Home
      <Product value="1"/>
      <Product value="2"/>
      <Product value="3"/>
      <Product value="4"/>
    </div>
  )
}

export default Home
