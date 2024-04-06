import React from 'react'

function ChangeMessageState({handleMessage}) {
  const messages = ["oi", "olá", "oi, tudo bem?"]
  
  return (
    <div>
      <h1>ChangeMessageState</h1>
      <button onClick={()=>handleMessage(messages[0])}>
        <div><h2>-1-</h2></div>
      </button>
      <button onClick={()=>handleMessage(messages[1])}>
        <div><h2>-2-</h2></div>
      </button>
      <button onClick={()=>handleMessage(messages[2])}>
        <div><h2>-3-</h2></div>
      </button>
    </div>
  )
}

export default ChangeMessageState