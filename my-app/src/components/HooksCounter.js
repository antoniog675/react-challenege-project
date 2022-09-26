import React, { useState } from 'react'

export default function HooksCounter(props) {
    const [count, setCount] = useState(0);

    return (
      <div>
        <h1>
            Hello {props.name}
            I'm a functinoal component with hooks
        </h1>
        <h2>you clicked {count} times</h2>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increment Counter
        </button>
      </div>
    )
  }