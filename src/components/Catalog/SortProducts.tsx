import { type ChangeEventHandler, type FC } from 'react'
import { useSearchParams } from 'react-router-dom'

import styles from './SortProducts.module.scss'

export const SortProducts: FC = () => {
  const sortOptions = ['Название', 'Цена']
  const [params, setParams] = useSearchParams()

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

  const defaultCheckboxStatus = (): boolean => {
    const value = params.get('toggleASC')

    if (value === null) return false
    if (value === 'false') return false

    return true
  }

  const defaultSelectValue = (): string => {
    const value = params.get('select')

    if (value === null) return sortOptions[0]

    return value
  }

  return (
    <form className={styles.sort}>
      <span className={styles.sort__text}>Сортировка:</span>
      <select
        className={styles.sort__select}
        name="select"
        defaultValue={defaultSelectValue()}
        onChange={selectChangeHandler}
      >
        {sortOptions.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          )
        })}
      </select>

      <label className={styles.sort__label}>
        <input
          className={styles.sort__checkbox}
          type="checkbox"
          name="toggleASC"
          defaultChecked={defaultCheckboxStatus()}
          onChange={checkboxChangeHandler}
        />
        <img
          className={styles.sort__image}
          src="/images/catalog/triangle.png"
          alt="triangle"
        />
      </label>
    </form>
  )
}
