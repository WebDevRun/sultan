import { FC } from 'react'
import cn from 'classnames'

import styles from './Navigation.module.scss'

interface NavigationProps {
  list: string[]
  position?: 'vertical' | 'horizontal'
}

export const Navigation: FC<NavigationProps> = ({
  list = [],
  position = 'horizontal',
}) => {
  return (
    <nav className={styles.navigation}>
      <ul
        className={cn(
          styles.navigation__list,
          { [styles.navigation__list_vertical]: position === 'vertical' },
          { [styles.navigation__list_horizontal]: position === 'horizontal' }
        )}
      >
        {list.map((element, index) => {
          return (
            <li
              key={index}
              className={cn(
                styles.navigation__element,
                {
                  [styles.navigation__element_vertical]:
                    position === 'vertical',
                },
                {
                  [styles.navigation__element_horizontal]:
                    position === 'horizontal',
                }
              )}
            >
              <a className={styles.navigation__link} href="#">
                {element}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
