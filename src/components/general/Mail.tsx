import { FC } from 'react'
import cn from 'classnames'

import styles from './Mail.module.scss'
import mail from '/images/general/mail.svg'

interface MailProps {
  position?: 'footer' | 'header'
}

export const Mail: FC<MailProps> = ({ position = 'header' }) => {
  return (
    <a href="#" className={styles.mail}>
      {position === 'header' && (
        <img className={styles.mail__image} src={mail} alt="mail" />
      )}
      <div className={styles.mail__description}>
        <p
          className={cn(
            styles.mail__address,
            { [styles.phone__address_header]: position === 'header' },
            { [styles.phone__address_footer]: position === 'footer' }
          )}
        >
          opt.sultan@mail.ru
        </p>
        <p
          className={cn(
            styles.mail__correction,
            { [styles.phone__correction_header]: position === 'header' },
            { [styles.phone__correction_footer]: position === 'footer' }
          )}
        >
          На связи в любое время
        </p>
      </div>
    </a>
  )
}
