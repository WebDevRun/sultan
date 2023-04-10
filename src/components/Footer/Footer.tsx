import { FC } from 'react'

import { Container } from '../Container'
import { About } from './About'
import { SiteMenu } from './SiteMenu'
import { Catigory } from './Catigory'
import { PriceList } from './PriceList'
import { Messengers } from './Messengers'
import { Contacts } from './Contacts'
import { Logo } from '../general'
import styles from './Footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__container}>
          <div className={styles.footer__logo}>
            <Logo />
          </div>
          <div className={styles.footer__about}>
            <About />
          </div>
          <div className={styles.footer__menu}>
            <SiteMenu />
          </div>
          <div className={styles.footer__catigory}>
            <Catigory />
          </div>
          <div className={styles.footer__priceList}>
            <PriceList />
          </div>
          <div className={styles.footer__messengers}>
            <Messengers />
          </div>
          <div className={styles.footer__contacts}>
            <Contacts />
          </div>
        </div>
      </Container>
    </footer>
  )
}
