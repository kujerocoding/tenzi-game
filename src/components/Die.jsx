import React from 'react'

const Die = (props) => {
console.log(props.value)
  return (
    <div className='die-container'>
      {props.value}
    </div>
  )
}

export default Die
