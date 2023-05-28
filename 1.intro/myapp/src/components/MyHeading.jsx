import React from 'react'

const MyHeading = (props) => {
    // js written normally
    var subject="React"
    // using the props by de-structuring it
    const {name,department,price} = props;
  return (
    <>
    <p>My name is {name}</p>
    <p>My departemnt is {department}</p>
    <h1>Learning {subject} </h1>
    <h2>react arrow functional constant export</h2>
    <h1>price is {price}</h1>
    </>
  )
}

export const MyHeading1 = () => {
  return (
    <div>
      <h4>This is heading 1 contained in export</h4>
    </div>
  )
}
export const MyHeading2 = () => {
  return (
    <div>
      <h4>This is heading 2 contained in export</h4>
    </div>
  )
}

export default MyHeading
// export {MyHeading1 , MyHeading2}; by directly exporting
