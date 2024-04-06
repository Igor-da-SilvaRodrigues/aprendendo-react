import React from 'react'

function ShowUserName(props) {
  return (
    <div>
      <h1>ShowUserName</h1>
      <p>Seu nome é {props.name ? props.name : "desconhecido"}</p>
    </div>
  )
}

export default ShowUserName