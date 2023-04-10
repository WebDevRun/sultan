import { FC } from 'react'

import styles from './Subscribe.module.scss'
import arrow from '/images/general/arrow.svg'

export const Subscribe: FC = () => {
  return (
    <div className={styles.subscribe}>
      <p className={styles.subscribe__text}>Подпишись на скидки и акции</p>
      <form className={styles.subscribe__form}>
        <input
          className={styles.subscribe__input}
          type="text"
          placeholder="Введите ваш E-mail"
        />

        <button className={styles.subscribe__button} type="submit">
          <img className={styles.subscribe__image} src={arrow} alt="arrow" />
        </button>
      </form>
    </div>
  )
}
