import { type FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Container } from '../Container'
import styles from './Main.module.scss'

export const Main: FC = () => {
  return (
    <main className={styles.main}>
      <Container>
        <Outlet />
      </Container>
    </main>
  )
}
