import React from 'react'

const UserDetails = ({nome, idade, profissão}) => {
  
  
  return (
    <div>
      <h1>UserDetails</h1>
      <div><strong>nome:</strong> {nome}</div>
      <div><strong>idade:</strong> {idade}</div>
      <div><strong>profissão:</strong> {profissão}</div>
      {idade >= 18 && <div style={{color: "red"}}>Pode tirar CNH</div>}
    </div>
  )
}

export default UserDetails