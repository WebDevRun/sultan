import { Dispatch, FC } from 'react'

import { usePagination } from './hooks/usePagination'
import styles from './Pagination.module.scss'

interface PaginationProps {
  productsLength: number
  productCountOnPage?: number
  setValue: Dispatch<React.SetStateAction<number>>
}

export const Pagination: FC<PaginationProps> = ({
  productsLength,
  productCountOnPage = 15,
  setValue,
}) => {
  const {
    pages,
    currentPage,
    prevClickHandler,
    pageClickHandler,
    nextClickHandler,
  } = usePagination(productsLength, productCountOnPage, setValue)

  return (
    <div className={styles.pagination}>
      <button
        className={[
          styles.pagination__arrow,
          styles.pagination__arrow_left,
        ].join(' ')}
        name="prev"
        value="prev"
        type="button"
        onClick={prevClickHandler}
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
              <label
                className={[
                  styles.pagination__pageLabel,
                  page === currentPage
                    ? styles.pagination__pageLabel_active
                    : undefined,
                ].join(' ')}
              >
                <input
                  className={styles.pagination__pageInput}
                  type="radio"
                  name="page"
                  value={page}
                  onClick={pageClickHandler}
                />
                <span className={styles.pagination__pageText}>{page}</span>
              </label>
            </li>
          )
        })}
      </ul>

      <button
        className={[
          styles.pagination__arrow,
          styles.pagination__arrow_right,
        ].join(' ')}
        name="next"
        value="next"
        type="button"
        onClick={nextClickHandler}
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
