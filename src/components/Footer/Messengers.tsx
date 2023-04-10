import { FC } from 'react'

import styles from './Messengers.module.scss'
import watsapp from '/images/footer/watsapp.png'
import telegram from '/images/footer/telegram.png'

const messengers = [
  {
    id: 1,
    name: 'watsapp',
    href: '#',
    src: watsapp,
  },
  {
    id: 2,
    name: 'telegram',
    href: '#',
    src: telegram,
  },
]

export const Messengers: FC = () => {
  return (
    <div className={styles.messengers}>
      <p className={styles.messengers__title}>Связь в мессенджерах:</p>
      <ul className={styles.messengers__list}>
        {messengers.map((messenger) => {
          return (
            <li key={messenger.id} className={styles.messengers__element}>
              <a className={styles.messengers__link} href={messenger.href}>
                <img
                  className={styles.messengers__image}
                  src={messenger.src}
                  alt={messenger.name}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
