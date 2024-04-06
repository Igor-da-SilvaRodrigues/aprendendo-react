import React from 'react'

const ExecuteFunction = ({method}) => {
  return (
    <div>
      <h1>ExecuteFunction</h1>
      <button onClick={method}>Clique para executar a função</button>
    </div>
  )
}

export default ExecuteFunction


