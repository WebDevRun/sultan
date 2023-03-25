import { FC } from 'react'

import { Subtitle } from './Subtitle'
import { Navigation } from '../general'
import styles from './SiteMenu.module.scss'

export const SiteMenu: FC = () => {
  const subtitle = 'Меню сайта:'
  const menu = ['О компании', 'Доставка и оплата', 'Возврат', 'Контакты']

  return (
    <div className={styles.menu}>
      <div className={styles.menu__subtitle}>
        <Subtitle text={subtitle} />
      </div>
      <Navigation list={menu} isColumn={true} />
    </div>
  )
}
