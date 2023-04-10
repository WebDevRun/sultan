import { ReactNode, FC, Dispatch, MouseEventHandler } from 'react'

import styles from './PopupLayout.module.scss'
import close from '/images/general/close.svg'

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
          <img className={styles.popup__closeImage} src={close} alt="close" />
        </button>
        {children}
      </div>
    </div>
  )
}
