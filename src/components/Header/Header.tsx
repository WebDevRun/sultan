import { type FC } from 'react'

import { Container } from '../Container'
import { Logo, Phone, PriceListButton, Search } from '../general'
import { Catalog } from './Catalog'
import { Basket } from './Basket'
import { BurgerMenu } from './BurgerMenu'
import styles from './Header.module.scss'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__container}>
          <div className={styles.header__logo}>
            <Logo />
          </div>

          <div className={styles.header__catalogAndSearch}>
            <div className={styles.header__catalog}>
              <Catalog />
            </div>
            <div className={styles.header__search}>
              <Search isHeader={true} />
            </div>
          </div>

          <div className={styles.header__burgerMenu}>
            <BurgerMenu />
          </div>

          <div className={styles.header__contactsAndPriceListAndBasket}>
            <div className={styles.header__contacts}>
              <Phone />
            </div>
            <div className={styles.header__priceList}>
              <PriceListButton />
            </div>
            <div className={styles.header__basket}>
              <Basket />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
