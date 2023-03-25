import { FC } from 'react'

import { Subtitle } from './Subtitle'
import { PriceListButton } from '../general'
import styles from './PriceList.module.scss'

export const PriceList: FC = () => {
  const subtitle = 'Скачать прайс-лист:'
  return (
    <div className={styles.priceList}>
      <div className={styles.priceList__subtitle}>
        <Subtitle text={subtitle} />
      </div>
      <PriceListButton />
    </div>
  )
}
