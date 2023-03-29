import { type FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './Basket.module.scss'
import basket from '/images/general/basket.svg'

export const Basket: FC = () => {
  return (
    <Link to="basket" className={styles.basket}>
      <div className={styles.basket__imageContainer}>
        <img className={styles.basket__image} src={basket} alt="basket" />
        <span className={styles.basket__count}>3</span>
      </div>
      <div className={styles.basket__infomation}>
        <p className={styles.basket__text}>Корзина</p>
        <p className={styles.basket__summer}>12 478 ₸</p>
      </div>
    </Link>
  )
}
