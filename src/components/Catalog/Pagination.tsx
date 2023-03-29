import { type FC } from 'react'

import { usePagination } from './hooks/usePagination'
import styles from './Pagination.module.scss'

export const Pagination: FC = () => {
  const pages = usePagination()

  return (
    <div className={styles.pagination}>
      <button
        className={[
          styles.pagination__arrow,
          styles.pagination__arrow_left,
        ].join(' ')}
        type="button"
      >
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12.8571L5 7.5L0 2.14286L1 0L8 7.5L1 15L0 12.8571Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <ul className={styles.pagination__pages}>
        {pages.map((page) => {
          return (
            <li className={styles.pagination__page} key={page}>
              <button className={styles.pagination__pageButton}>{page}</button>
            </li>
          )
        })}
      </ul>

      <button
        className={[
          styles.pagination__arrow,
          styles.pagination__arrow_right,
        ].join(' ')}
        type="button"
      >
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12.8571L5 7.5L0 2.14286L1 0L8 7.5L1 15L0 12.8571Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  )
}
