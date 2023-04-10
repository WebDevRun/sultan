import { FC } from 'react'

import { useSortProducts } from './hooks/useSortProducts'
import styles from './SortProducts.module.scss'
import triangle from '/images/general/triangle.png'

export const SortProducts: FC = () => {
  const {
    sortOptions,
    selectValue,
    checkboxStatus,
    selectChangeHandler,
    checkboxChangeHandler,
  } = useSortProducts()

  return (
    <form className={styles.sort}>
      <span className={styles.sort__text}>Сортировка:</span>
      <select
        className={styles.sort__select}
        name="select"
        onChange={selectChangeHandler}
        value={selectValue}
      >
        {sortOptions.map((option) => {
          return (
            <option key={option.name} value={option.name}>
              {option.description}
            </option>
          )
        })}
      </select>

      <label className={styles.sort__label}>
        <input
          className={styles.sort__checkbox}
          type="checkbox"
          name="toggleASC"
          checked={checkboxStatus}
          onChange={checkboxChangeHandler}
        />
        <img className={styles.sort__image} src={triangle} alt="triangle" />
      </label>
    </form>
  )
}
