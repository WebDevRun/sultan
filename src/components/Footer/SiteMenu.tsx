import { FC } from 'react'

import { Subtitle } from './Subtitle'
import { Navigation } from '../general'
import styles from './SiteMenu.module.scss'

const subtitle = 'Меню сайта:'
const menu = ['О компании', 'Доставка и оплата', 'Возврат', 'Контакты']

export const SiteMenu: FC = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__subtitle}>
        <Subtitle text={subtitle} />
      </div>
      <Navigation list={menu} position="vertical" />
    </div>
  )
}
