import React from 'react'

const Die = (props) => {

    const styles = {
        backgroundColor: props.isHeld ? "#1F4373" : "white",
        color: props.isHeld ? "white" : "#1F4373"
    }

  return (
    <div className="die-container" 
        style={styles} 
        onClick={props.handleClick}>

      {props.value}
    </div>
  )
}

export default Die
