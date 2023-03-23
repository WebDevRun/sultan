import { FC } from 'react'

import { Container } from '../Container'
import styles from './Footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>Подвал</Container>
    </footer>
  )
}
