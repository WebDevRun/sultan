import { FC } from 'react'

import styles from './Contacts.module.scss'
import contacts from './images/contacts.png'

export const Contacts: FC = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__infomation}>
        <a className={styles.contacts__phone} href="#">
          +7 (777) 490-00-91
        </a>
        <p className={styles.contacts__timeWork}>время работы: 9:00-20:00</p>
        <button type="button" className={styles.contacts__order}>
          Заказать звонок
        </button>
      </div>
      <div className={styles.contacts__imageContainer}>
        <img className={styles.contacts__image} src={contacts} alt="contact" />
      </div>
    </div>
  )
}
