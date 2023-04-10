import { FC } from 'react'

import { PayCards } from './PayCards'
import { Subtitle } from './Subtitle'
import { Phone, Mail } from '../general'
import styles from './Contacts.module.scss'
import visa from '/images/footer/visa.png'
import mastercard from '/images/footer/mastercard.png'

const subtitle = 'Контакты:'
const cards = [
  {
    id: '1',
    name: 'visa',
    src: visa,
    href: '#',
  },
  {
    id: '2',
    name: 'mastercard',
    src: mastercard,
    href: '#',
  },
]

export const Contacts: FC = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__subtitle}>
        <Subtitle text={subtitle} />
      </div>
      <div className={styles.contacts__phone}>
        <Phone position="footer" />
      </div>
      <div className={styles.contacts__mail}>
        <Mail position="footer" />
      </div>
      <div className={styles.contact__cards}>
        <PayCards cards={cards} />
      </div>
    </div>
  )
}
