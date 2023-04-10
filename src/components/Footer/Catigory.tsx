import { FC } from 'react'

import { Subtitle } from './Subtitle'
import { Navigation } from '../general'
import styles from './Catigory.module.scss'

export const Catigory: FC = () => {
  const subtitle = 'Категории:'
  const menu = [
    'Бытовая химия',
    'Косметика и гигиена',
    'Товары для дома',
    'Товары для детей и мам',
    'Посуда',
  ]

  return (
    <div className={styles.catigory}>
      <div className={styles.catigory__subtitle}>
        <Subtitle text={subtitle} />
      </div>
      <Navigation list={menu} isColumn={true} />
    </div>
  )
}
