import { FC } from 'react'
import cn from 'classnames'

import styles from './PriceListButton.module.scss'

interface PriceListButtonProps {
  color?: 'white' | 'lightYellow'
}

export const PriceListButton: FC<PriceListButtonProps> = ({
  color = 'lightYellow',
}) => {
  return (
    <button
      className={cn(
        styles.priceListButton,
        { [styles.priceListButton_white]: color === 'white' },
        { [styles.priceListButton_lightYellow]: color === 'lightYellow' }
      )}
      type="button"
    >
      <span
        className={cn(
          styles.priceListButton__text,
          { [styles.priceListButton__text_white]: color === 'white' },
          {
            [styles.priceListButton__text_lightYellow]: color === 'lightYellow',
          }
        )}
      >
        Прайс-лист
      </span>
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.958 4.375H8.12467V0.125H3.87467V4.375H1.04134L5.99967 10.0417L10.958 4.375ZM0.333008 11.4583H11.6663V12.875H0.333008V11.4583Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}
