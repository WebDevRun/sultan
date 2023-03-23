import { FC } from 'react'

import { Container } from '../Container'
import { Catalog } from './Catalog'
import { Search } from './Search'
import { Contacts } from './Contacts'
import { PriceList } from './PriceList'
import { Basket } from './Basket'
import { BurgerMenu } from './BurgerMenu'
import styles from './Header.module.scss'
import logo from './images/logo.png'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__container}>
          <a href="#" className={styles.header__logoContainer}>
            <img className={styles.header__logo} src={logo} alt="logo" />
          </a>

          <div className={styles.header__catalogAndSearch}>
            <div className={styles.header__catalog}>
              <Catalog />
            </div>
            <div className={styles.header__search}>
              <Search />
            </div>
          </div>

          <div className={styles.header__burgerMenu}>
            <BurgerMenu />
          </div>

          <div className={styles.header__contactsAndPriceListAndBasket}>
            <div className={styles.header__contacts}>
              <Contacts />
            </div>
            <div className={styles.header__priceList}>
              <PriceList />
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
