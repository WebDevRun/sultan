import { FC } from 'react'

import styles from './Mail.module.scss'
import mail from '/images/general/mail.svg'

interface MailProps {
  isFooter?: boolean
}

export const Mail: FC<MailProps> = ({ isFooter = false }) => {
  const setAddressStyles = (isFooter: boolean): string => {
    const stylesList = [styles.mail__address]

    if (isFooter) {
      stylesList.push(styles.phone__address_footer)
    } else {
      stylesList.push(styles.phone__address_header)
    }

    return stylesList.join(' ')
  }

  const setCorrectionStyles = (isFooter: boolean): string => {
    const stylesList = [styles.mail__correction]

    if (isFooter) {
      stylesList.push(styles.phone__correction_footer)
    } else {
      stylesList.push(styles.phone__correction_header)
    }

    return stylesList.join(' ')
  }

  return (
    <a href="#" className={styles.mail}>
      {!isFooter && (
        <img className={styles.mail__image} src={mail} alt="mail" />
      )}
      <div className={styles.mail__description}>
        <p className={setAddressStyles(isFooter)}>opt.sultan@mail.ru</p>
        <p className={setCorrectionStyles(isFooter)}>На связи в любое время</p>
      </div>
    </a>
  )
}
