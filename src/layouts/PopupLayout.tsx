import {
  type ReactNode,
  type FC,
  type Dispatch,
  type MouseEventHandler,
} from 'react'

import styles from './PopupLayout.module.scss'

interface PopupLayoutProps {
  onClose: Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
}

export const PopupLayout: FC<PopupLayoutProps> = ({ children, onClose }) => {
  const buttonClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClose(false)
  }

  return (
    <div className={styles.popup}>
      <div className={styles.popup__inner}>
        <button
          className={styles.popup__close}
          type="button"
          onClick={buttonClickHandler}
        >
          <img
            className={styles.popup__closeImage}
            src="/images/general/close.svg"
            alt="close"
          />
        </button>
        {children}
      </div>
    </div>
  )
}
