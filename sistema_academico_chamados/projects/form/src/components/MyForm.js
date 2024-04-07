import React from 'react'
import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user}) => {
  //6 controlled inputs


  //3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [bio, setBio] = useState("")
  const [role, setRole] = useState("user")

  const handleName = (e)=>{
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviando o formulário")
    console.log(name, email, bio, role)
    setName('')//apagando, so possivel por causa do controlled inputs
    setEmail('')
    setBio('')
    setRole('')
  }
  return (
    <div>
      {/* Envio de form */}


      <form onSubmit={handleSubmit}>
        {/* 1- Criação de form */}
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" placeholder='Digite seu nome' value={name} onChange={handleName}/>
        </div>
      
        {/* label envolvendo input */}
        <label>
          <span>Email:</span> 
          <input type="text" name="Email" placeholder='Digite seu Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>

        {/* textarea */}
        <label >
          <span>Bio:</span>
          <textarea name="bio" placeholder='descrição do usuario' onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>  
        </label>

        {/* select */}
        <label >
          <span>Função: </span>
          <select name="role" onChange={(e)=>setRole(e.target.value)}>
            <option value="user" >Usuario</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
      <input type="submit" value="Enviar" />  
      </form>
    </div>
  )
}

export default MyForm