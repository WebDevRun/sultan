import { type FC } from 'react'

import styles from './PriceListButton.module.scss'
import priceList from '/images/general/price-list.svg'

export const PriceListButton: FC = () => {
  return (
    <button className={styles.priceListButton} type="button">
      <span className={styles.priceListButton__text}>Прайс-лист</span>
      <img src={priceList} alt="price-list" />
    </button>
  )
}
