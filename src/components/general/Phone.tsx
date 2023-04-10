import { FC } from 'react'
import cn from 'classnames'

import styles from './Phone.module.scss'
import phone from '/images/general/phone.png'

interface PhoneProps {
  position?: 'header' | 'footer'
}

export const Phone: FC<PhoneProps> = ({ position = 'header' }) => {
  return (
    <div className={styles.phone}>
      <div
        className={cn(
          styles.phone__container,
          { [styles.phone__conatiner_footer]: position === 'footer' },
          { [styles.phone__conatiner_header]: position === 'header' }
        )}
      >
        <a
          className={cn(
            styles.phone__numbers,
            { [styles.phone__numbers_footer]: position === 'footer' },
            { [styles.phone__numbers_header]: position === 'header' }
          )}
          href="#"
        >
          +7 (777) 490-00-91
        </a>
        <p
          className={cn(
            styles.phone__timeWork,
            { [styles.phone__timeWork_footer]: position === 'footer' },
            { [styles.phone__timeWork_header]: position === 'header' }
          )}
        >
          время работы: 9:00-20:00
        </p>
        <button
          type="button"
          className={cn(
            styles.phone__order,
            { [styles.phone__order_footer]: position === 'footer' },
            { [styles.phone__order_header]: position === 'header' }
          )}
        >
          Заказать звонок
        </button>
      </div>
      {position === 'header' && (
        <div className={styles.phone__imageContainer}>
          <img className={styles.phone__image} src={phone} alt="phone" />
        </div>
      )}
    </div>
  )
}
