import { FC } from 'react'

import styles from './PopupMessage.module.scss'
import doubleOK from '/images/general/doubleOK.svg'

export const PopupMessage: FC = () => {
  return (
    <div className={styles.popupMessage}>
      <div className={styles.popupMessage__imageContainer}>
        <img className={styles.popupMessage__image} src={doubleOK} alt="OK" />
      </div>
      <p className={styles.popupMessage__title}>Спасибо за заказ</p>
      <p className={styles.popupMessage__text}>
        Наш менеджер свяжется с вами в ближайшее время
      </p>
    </div>
  )
}
