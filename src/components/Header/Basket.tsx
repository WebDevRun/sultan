import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store'

import styles from './Basket.module.scss'
import basket from '/images/general/basket.svg'

export const Basket: FC = () => {
  const { totalCount, totalPrice } = useAppSelector(
    (state) => state.basketSlice
  )
  return (
    <Link to="basket" className={styles.basket}>
      <div className={styles.basket__imageContainer}>
        <img className={styles.basket__image} src={basket} alt="basket" />
        <span className={styles.basket__count}>{totalCount}</span>
      </div>
      <div className={styles.basket__infomation}>
        <p className={styles.basket__text}>Корзина</p>
        <p className={styles.basket__summer}>{totalPrice} ₸</p>
      </div>
    </Link>
  )
}
