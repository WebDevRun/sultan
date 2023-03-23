import { FC } from 'react'

import styles from './Mail.module.scss'
import mail from './images/mail.svg'

export const Mail: FC = () => {
  return (
    <a href="#" className={styles.mail}>
      <img className={styles.mail__image} src={mail} alt="mail" />
      <div className={styles.mail__description}>
        <p className={styles.mail__address}>opt.sultan@mail.ru</p>
        <p className={styles.mail__correction}>На связи в любое время</p>
      </div>
    </a>
  )
}
