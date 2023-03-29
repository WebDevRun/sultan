import { type FC } from 'react'

import { Container } from '../Container'
import { Address } from './Address'
import { Mail, Navigation } from '../general'
import styles from './Menu.module.scss'

export const Menu: FC = () => {
  const menu = ['О компании', 'Доставка и оплата', 'Возврат', 'Контакты']

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
