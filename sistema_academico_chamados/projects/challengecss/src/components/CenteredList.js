import React from 'react'
import styles from './CenteredList.module.css'

const CenteredList = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.centered_list}>
        {children}
      </div>
    </div>
  )
}

export default CenteredList