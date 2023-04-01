import { type FC } from 'react'

import { Main, Header, Menu, Footer, Breadcrumbs } from '../components'
import styles from './Layout.module.scss'

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Menu />
      <Header />
      <Breadcrumbs />
      <Main />
      <Footer />
    </div>
  )
}
