import { FC } from 'react'

import { Subtitle } from './Subtitle'
import { PriceListButton } from '../general'
import styles from './PriceList.module.scss'

const subtitle = 'Скачать прайс-лист:'

export const PriceList: FC = () => {
  return (
    <div className={styles.priceList}>
      <div className={styles.priceList__subtitle}>
        <Subtitle text={subtitle} />
      </div>
      <PriceListButton />
    </div>
  )
}
