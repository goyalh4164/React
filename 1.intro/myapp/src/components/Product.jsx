import React from 'react'
import { useParams } from 'react-router-dom' 
const Product = (props) => {
    const {value} =props;
  return (
    <div>
      <h1>product value is {value}</h1>
    </div>
  )
}

export default Product
