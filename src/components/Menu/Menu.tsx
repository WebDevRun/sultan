import { FC } from 'react'

import { Container } from '../Container'
import { Address } from './Address'
import { Mail, Navigation } from '../general'
import styles from './Menu.module.scss'

const menu = ['О компании', 'Доставка и оплата', 'Возврат', 'Контакты']

export const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <Container>
        <div className={styles.menu__container}>
          <div className={styles.menu__locationAndMail}>
            <div className={styles.menu__address}>
              <Address />
            </div>
            <div className={styles.menu__mail}>
              <Mail />
            </div>
          </div>

          <Navigation list={menu} />
        </div>
      </Container>
    </div>
  )
}
