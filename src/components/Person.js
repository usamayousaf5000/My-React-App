import React from 'react'

const Person = ({person})=> {
    // console.log(person)

  return (
    <>
      <h2>I am {person.name}. I am {person.age} years old</h2>
    </>
  )
}
export default Person