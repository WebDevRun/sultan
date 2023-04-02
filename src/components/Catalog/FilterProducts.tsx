import { FC, useState, useEffect, ChangeEventHandler, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

import styles from './FilterProducts.module.scss'
import { setModificationToStyle } from '../../utils'

interface FilterProductsProps {
  filters: string[]
  isLeft?: boolean
}

export const FilterProducts: FC<FilterProductsProps> = ({
  filters,
  isLeft = false,
}) => {
  const [params, setParams] = useSearchParams()
  const [typesOfCare, setTypesOfCare] = useState<string[]>(
    () => params.get('typesOfCare')?.split(',') || []
  )

  useEffect(() => {
    params.set('typesOfCare', typesOfCare.join(','))
    setParams(params)
  }, [typesOfCare])

  const setFilterProductsStyles = setModificationToStyle(
    styles.filterProducts,
    styles.filterProducts_left,
    styles.filterProducts_top
  )

  const setElementStyles = setModificationToStyle(
    styles.filterProducts__element,
    styles.filterProducts__element_left,
    styles.filterProducts__element_top
  )

  const setLabelStyles = setModificationToStyle(
    styles.filterProducts__label,
    styles.filterProducts__label_left,
    styles.filterProducts__label_top
  )

  const setTextStyles = setModificationToStyle(
    styles.filterProducts__text,
    styles.filterProducts__text_left,
    styles.filterProducts__text_top
  )

  const filterProductsClickHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTypesOfCare((prev) => {
      const value = event.target.value

      if (prev.includes(value)) {
        prev = prev.filter((type) => type !== value)
      } else {
        prev = [...prev, event.target.value]
      }

      return prev
    })
  }

  return (
    <ul className={setFilterProductsStyles(isLeft)}>
      {filters.map((filter) => {
        return (
          <li className={setElementStyles(isLeft)} key={filter}>
            <label className={setLabelStyles(isLeft)}>
              <input
                className={styles.filterProducts__checkbox}
                type="checkbox"
                name="typesOfCare"
                value={filter}
                onChange={filterProductsClickHandler}
              />
              <span className={setTextStyles(isLeft)}>{filter}</span>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
