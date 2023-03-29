import { type FC } from 'react'

import styles from './Phone.module.scss'
import phone from '/images/general/phone.png'

interface PhoneProps {
  isFooter?: boolean
}

export const Phone: FC<PhoneProps> = ({ isFooter = false }) => {
  const setContainerStyles = (isFooter: boolean): string => {
    const stylesList = [styles.phone__container]

    if (isFooter) {
      stylesList.push(styles.phone__conatiner_footer)
    } else {
      stylesList.push(styles.phone__container_header)
    }

    return stylesList.join(' ')
  }

  const setNumbersStyles = (isFooter: boolean): string => {
    const stylesList = [styles.phone__numbers]

    if (isFooter) {
      stylesList.push(styles.phone__numbers_footer)
    } else {
      stylesList.push(styles.phone__numbers_header)
    }

    return stylesList.join(' ')
  }

  const setTimeWorkStyles = (isFooter: boolean): string => {
    const stylesList = [styles.phone__timeWork]

    if (isFooter) {
      stylesList.push(styles.phone__timeWork_footer)
    } else {
      stylesList.push(styles.phone__timeWork_header)
    }

    return stylesList.join(' ')
  }

  const setOrderStyles = (isFooter: boolean): string => {
    const stylesList = [styles.phone__order]

    if (isFooter) {
      stylesList.push(styles.phone__order_footer)
    } else {
      stylesList.push(styles.phone__order_header)
    }

    return stylesList.join(' ')
  }

  return (
    <div className={styles.phone}>
      <div className={setContainerStyles(isFooter)}>
        <a className={setNumbersStyles(isFooter)} href="#">
          +7 (777) 490-00-91
        </a>
        <p className={setTimeWorkStyles(isFooter)}>время работы: 9:00-20:00</p>
        <button type="button" className={setOrderStyles(isFooter)}>
          Заказать звонок
        </button>
      </div>
      {!isFooter && (
        <div className={styles.phone__imageContainer}>
          <img className={styles.phone__image} src={phone} alt="phone" />
        </div>
      )}
    </div>
  )
}
