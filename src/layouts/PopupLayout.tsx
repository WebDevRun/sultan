import {
  type ReactNode,
  type FC,
  type Dispatch,
  type MouseEventHandler,
} from 'react'

import styles from './PopupLayout.module.scss'

interface PopupLayoutProps {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
}

export const PopupLayout: FC<PopupLayoutProps> = ({ children, setIsOpen }) => {
  const buttonClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsOpen(false)
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
