import { type FC } from 'react'

import styles from './Navigation.module.scss'

interface NavigationProps {
  list: string[]
  isColumn?: boolean
}

export const Navigation: FC<NavigationProps> = ({
  list = [],
  isColumn = false,
}) => {
  const ulStyles = (isColumn: boolean): string => {
    const stylesList = [styles.navigation__list]

    if (isColumn) {
      stylesList.push(styles.navigation__list_column)
    } else {
      stylesList.push(styles.navigation__list_row)
    }

    return stylesList.join(' ')
  }

  const liStyles = (isColumn: boolean): string => {
    const stylesList = [styles.navigation__element]

    if (isColumn) {
      stylesList.push(styles.navigation__element_column)
    } else {
      stylesList.push(styles.navigation__element_row)
    }

    return stylesList.join(' ')
  }

  return (
    <nav className={styles.navigation}>
      <ul className={ulStyles(isColumn)}>
        {list.map((element, index) => {
          return (
            <li key={index} className={liStyles(isColumn)}>
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
