import React from 'react'

function CarDetails({marca, km, color}) {
  return (
    <div>
      <h1>CarDetails</h1>
      <ul>
        <li>Marca: {marca}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  )
}

export default CarDetails