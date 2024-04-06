// Children prop
import React from 'react'

function Container({children}) {
  return (
    <div>
      <h1>Container👇</h1>
      {children}
      <h1>Fim do container☝️</h1>
    </div>
  )
}

export default Container