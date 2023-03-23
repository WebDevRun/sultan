import { FC } from 'react'

import styles from './PriceList.module.scss'
import priceList from './images/price-list.svg'

export const PriceList: FC = () => {
  return (
    <button className={styles.priceList} type="button">
      <span className={styles.priceList__text}>Прайс-лист</span>
      <img src={priceList} alt="price-list" />
    </button>
  )
}
