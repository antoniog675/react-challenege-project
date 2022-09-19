import React from 'react'

function ConditionalRenderingFunctionality(props) {
  return (
    <div>
        <h1>{props.connected ? 'Connected' : 'Not Connected' }</h1>
    </div>
  )
}

export default ConditionalRenderingFunctionality