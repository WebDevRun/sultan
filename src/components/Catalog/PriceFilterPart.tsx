import { FC } from 'react'

import styles from './PriceFilterPart.module.scss'

interface PriceFilterPartProps {
  priceStart: string | null
  priceEnd: string | null
}

export const PriceFilterPart: FC<PriceFilterPartProps> = ({
  priceStart = null,
  priceEnd = null,
}) => {
  return (
    <div className={styles.price}>
      <div className={styles.price__title}>
        <span className={styles.price__text}>Цена</span>
        <span className={styles.price__symbol}>₸</span>
      </div>

      <div className={styles.price__form}>
        <input
          className={styles.price__input}
          type="number"
          name="priceStart"
          min="0"
          defaultValue={priceStart === null ? undefined : priceStart}
          placeholder="0"
        />
        <span className={styles.price__dash}>-</span>
        <input
          className={styles.price__input}
          type="number"
          name="priceEnd"
          min="0"
          defaultValue={priceEnd === null ? undefined : priceEnd}
          placeholder="10 000"
        />
      </div>
    </div>
  )
}
