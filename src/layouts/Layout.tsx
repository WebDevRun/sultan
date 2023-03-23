import { FC } from 'react'

import { Menu } from '../components/Menu'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import styles from './Layout.module.scss'

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Menu />
      <Header />
      <Main>Main</Main>
      <Footer />
    </div>
  )
}
