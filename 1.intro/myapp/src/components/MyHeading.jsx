import React from 'react'

const MyHeading = () => {
    // js written normally
    var subject="React"
  return (
    <>
    <h1>Learning {subject} </h1>
    <h2>react arrow functional constant export</h2>
    </>
  )
}

const MyHeading1 = () => {
  return (
    <div>
      <h4>This is heading 1 contained in export</h4>
    </div>
  )
}
const MyHeading2 = () => {
  return (
    <div>
      <h4>This is heading 2 contained in export</h4>
    </div>
  )
}

export default MyHeading
export {MyHeading1 , MyHeading2}; 
