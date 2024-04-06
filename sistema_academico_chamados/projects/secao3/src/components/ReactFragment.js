import React from 'react'

const ReactFragment = ({propF}) => {
  return (
    //note como não há nome no componente pai, não se trata de uma div
    <>
      <h1>ReactFragment</h1>
      <h1>NoDiv 💯</h1>
      <h4>{propF}</h4>
    </>
    //os componentes se tornam ambos componentes pais do conteudo
    //o <></> é ignorado
  )
}

export default ReactFragment