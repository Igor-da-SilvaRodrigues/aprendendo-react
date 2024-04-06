import React, { useState } from 'react'

function ConditionalRender() {
  const [x] = useState(true)
  const [name, setName] = useState("João")

  return (
    <div>
      <h1>Conditional Render</h1>
      <div>Isso será exibido?</div>
      
      {/* operador ternário de pobre */}
      {(x && <div>se x for true, sim.</div>) || <div>Agora x é falso</div>}

      {/* operador ternário de rico */}
      {name === "João" ? <div>olá {name}</div> : <div>Você não é joão</div>}
    
      <button onClick={()=>setName("pedro")}>Pedro</button>
    </div>

    
  )
}

export default ConditionalRender