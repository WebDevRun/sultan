import { FC } from 'react'

import styles from './Specifications.module.scss'

interface SpecificationsProps {
  args: Record<string, string | number | boolean>
}

export const Specifications: FC<SpecificationsProps> = ({ args }) => {
  const entries = Object.entries(args)
  return (
    <div className={styles.specifications}>
      {entries.map((entry) => {
        return (
          <p key={entry[0]} className={styles.specifications__container}>
            <span className={styles.specifications__key}>{entry[0]}:</span>
            <span className={styles.specifications__value}>{entry[1]}</span>
          </p>
        )
      })}
    </div>
  )
}
