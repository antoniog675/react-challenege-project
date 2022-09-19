import React from 'react'

function EventsFunctionality() {
        function clickHandler() {
            console.log("Clicked the functional component")
        }
  return (
    <div>
        <button onClick={clickHandler}>click me - functional component</button>
    </div>
  )
}

export default EventsFunctionality