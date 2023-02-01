import React from 'react'

const Die = (props) => {

    const styles = {
        backgroundColor: props.isHeld ? "orange" : "white"
    }

  return (
    <div className="die-container" style={styles}>
      {props.value}
    </div>
  )
}

export default Die
