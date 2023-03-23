import { FC } from 'react'

import styles from './BurgerMenu.module.scss'
import burgerImage from './images/burger_menu.svg'

export const BurgerMenu: FC = () => {
  return (
    <div className={styles.burgerMenu}>
      <img
        className={styles.burgerMenu__image}
        src={burgerImage}
        alt="burger-menu"
      />
    </div>
  )
}
