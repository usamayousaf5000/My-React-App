import React from 'react'

const LiftingStateUp = (props)=> {
    // console.log(props)
    const onChange = (e)=>{
        props.setName(e.target.value)
    }
  return (
    <div>
      <input type="text"  onChange={onChange}/>
      <p>This is the the child Component : {props.name}</p>
    </div>
  )
}

export default LiftingStateUp
