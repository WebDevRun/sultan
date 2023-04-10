import { MouseEventHandler, Dispatch, FC } from 'react'

import styles from './Counter.module.scss'

interface CounterProps {
  count: number
  setCount: Dispatch<React.SetStateAction<number>>
}

export const Counter: FC<CounterProps> = ({ count = 0, setCount }) => {
  const minusClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (count <= 1) return

    setCount((prev) => prev - 1)
  }

  const plusClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    setCount((prev) => prev + 1)
  }

  return (
    <div className={styles.count}>
      <button
        className={styles.count__button}
        type="button"
        onClick={minusClickHandler}
      >
        -
      </button>
      <span className={styles.count__text}>{count}</span>
      <button
        className={styles.count__button}
        type="button"
        onClick={plusClickHandler}
      >
        +
      </button>
    </div>
  )
}
