import { type MouseEventHandler, type FC } from 'react'
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

  const filterProductsClickHandler: MouseEventHandler<HTMLInputElement> = (
    event
  ) => {
    params.set('typesOfCare', event.currentTarget.value)
    setParams(params)
  }

  return (
    <ul className={setFilterProductsStyles(isLeft)}>
      {filters.map((filter) => {
        return (
          <li className={setElementStyles(isLeft)} key={filter}>
            <label className={setLabelStyles(isLeft)}>
              <input
                className={styles.filterProducts__radio}
                type="radio"
                name="typesOfCare"
                value={filter}
                defaultChecked={params.get('typesOfCare') === filter}
                onClick={filterProductsClickHandler}
              />
              <span className={setTextStyles(isLeft)}>{filter}</span>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
