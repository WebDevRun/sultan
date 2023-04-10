import { FC } from 'react'

import styles from './PayCards.module.scss'

interface CardProps {
  id: string
  name: string
  src: string
  href: string
}

interface PayCardsProps {
  cards: CardProps[]
}

export const PayCards: FC<PayCardsProps> = ({ cards = [] }) => {
  return (
    <ul className={styles.cards}>
      {cards.map((card) => {
        return (
          <li key={card.id} className={styles.cards__element}>
            <a className={styles.cards__link} href={card.href}>
              <img
                className={styles.cards__image}
                src={card.src}
                alt={card.name}
              />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
