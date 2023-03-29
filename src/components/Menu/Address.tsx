import { type FC } from 'react'

import styles from './Address.module.scss'
import location from '/images/menu/location.svg'

export const Address: FC = () => {
  return (
    <a href="#" className={styles.address}>
      <img className={styles.address__image} src={location} alt="location" />
      <div className={styles.address__description}>
        <p className={styles.address__text}>
          г. Кокчетав, ул. Ж. Ташенова 129Б
        </p>
        <p className={styles.address__correction}>(Рынок Восточный)</p>
      </div>
    </a>
  )
}
