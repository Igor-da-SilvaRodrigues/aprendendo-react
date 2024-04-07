import React, { useState } from 'react'
import './CssDinamico.css'
const CssDinamico = () => {
  const [number,setNumber] = useState(0)

  const handleNumber = (e)=>{
    if (number != 15){
      setNumber(15)
    }else{
      setNumber(20)
    }
  }

  return (
    <div>
      <h1>CssDinamico</h1>
      <h4>Numeros menores que 20 ficam vermelhos</h4>
      <h2 style={number < 20 ? {color: "red"} : {color: "green"}}>{number}</h2>
      <h3 className={number < 20 ? "css-dinamico-wrong" : "css-dinamico-right"}>Classe dinamica</h3>
      <button onClick={handleNumber}>Alterar valor</button>
    </div>
  )
}

export default CssDinamico