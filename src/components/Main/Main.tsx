import { FC } from 'react'

import { Container } from '../Container'
import styles from './Main.module.scss'

interface MainProps {
  children: React.ReactNode
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className={styles.main}>
      <Container>{children}</Container>
    </main>
  )
}
