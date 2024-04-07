import React from 'react'
import styles from './CarDetails.module.css'

const CarDetails = ({car}) => {
  return (
    <div className={styles.car_details}>
      <h3 className={styles.title}>{car.marca}-{car.tipo}</h3>
      <div className={styles.content_container}>
        <p className={styles.content}><strong>Marca: </strong>{car.marca}</p>
        <p className={styles.content}><strong>Cor: </strong>{car.cor}</p>
        <p className={styles.content}><strong>Km: </strong>{car.km}</p>
        <p className={styles.content}><strong>Tipo: </strong>{car.tipo}</p>
      </div>
    </div>
  )
}

export default CarDetails