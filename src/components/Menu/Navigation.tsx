import { FC } from 'react'

import styles from './Navigation.module.scss'

export const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__element}>
          <a className={styles.navigation__link} href="#">
            О компании
          </a>
        </li>
        <li className={styles.navigation__element}>
          <a className={styles.navigation__link} href="#">
            Доставка и оплата
          </a>
        </li>
        <li className={styles.navigation__element}>
          <a className={styles.navigation__link} href="#">
            Возврат
          </a>
        </li>
        <li className={styles.navigation__element}>
          <a className={styles.navigation__link} href="#">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  )
}
