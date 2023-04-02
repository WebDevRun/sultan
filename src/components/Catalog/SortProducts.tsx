import { type ChangeEventHandler, type FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSortProducts } from './hooks/useSortProducts'

import styles from './SortProducts.module.scss'
import triangle from '/images/general/triangle.png'

export const SortProducts: FC = () => {
  const [params, setParams] = useSearchParams()
  const { sortOptions, selectValue, checkboxStatus } = useSortProducts(params)

  const selectChangeHandler: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    params.set('select', event.currentTarget.value)
    setParams(params)
  }

  const checkboxChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    params.set('toggleASC', String(event.currentTarget.checked))
    setParams(params)
  }

  return (
    <form className={styles.sort}>
      <span className={styles.sort__text}>Сортировка:</span>
      <select
        className={styles.sort__select}
        name="select"
        onChange={selectChangeHandler}
        value={selectValue}
      >
        {sortOptions.current.map((option) => {
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
