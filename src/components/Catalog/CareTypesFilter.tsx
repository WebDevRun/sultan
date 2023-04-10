import { FC } from 'react'
import cn from 'classnames'

import { useCareTypesFilter } from './hooks/useCareTypesFilter'
import styles from './CareTypesFilter.module.scss'

interface CareTypesFilterProps {
  filters: string[]
  position?: 'vertical' | 'horizontal'
}

export const CareTypesFilter: FC<CareTypesFilterProps> = ({
  filters,
  position = 'horizontal',
}) => {
  const checkboxChangeHandler = useCareTypesFilter()

  return (
    <ul
      className={cn(
        styles.careTypesFilter,
        { [styles.careTypesFilter_vertical]: position === 'vertical' },
        { [styles.careTypesFilter_horizontal]: position === 'horizontal' }
      )}
    >
      {filters.map((filter) => {
        return (
          <li
            className={cn(
              styles.careTypesFilter__element,
              {
                [styles.careTypesFilter__element_vertical]:
                  position === 'vertical',
              },
              {
                [styles.careTypesFilter__element_horizontal]:
                  position === 'horizontal',
              }
            )}
            key={filter}
          >
            <input
              className={styles.careTypesFilter__checkbox}
              type="checkbox"
              name="typesOfCare"
              value={filter}
              id={filter}
              onChange={checkboxChangeHandler}
            />
            <label
              htmlFor={filter}
              className={cn(
                styles.careTypesFilter__label,
                {
                  [styles.careTypesFilter__label_vertical]:
                    position === 'vertical',
                },
                {
                  [styles.careTypesFilter__label_horizontal]:
                    position === 'horizontal',
                }
              )}
            >
              <span
                className={cn(
                  styles.careTypesFilter__text,
                  {
                    [styles.careTypesFilter__text_vertical]:
                      position === 'vertical',
                  },
                  {
                    [styles.careTypesFilter__text_horizontal]:
                      position === 'horizontal',
                  }
                )}
              >
                {filter}
              </span>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
