import { FC } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import styles from './BreadCrumbs.module.scss'
import { Container } from '../Container'
import { useBreadcrumbs } from './hooks/useBreadcrumbs'

export const Breadcrumbs: FC = () => {
  const { crumbs, paths, navigate } = useBreadcrumbs()

  return (
    <div className={styles.breadcrumbs}>
      <Container>
        <div className={styles.breadcrumbs__container}>
          {crumbs.map((crumb, index, array) => {
            if (index === array.length - 1) {
              return (
                <span
                  key={index}
                  className={cn(
                    styles.breadcrumbs__value,
                    styles.breadcrumbs__value_last
                  )}
                >
                  {paths[crumb]}
                </span>
              )
            }

            return (
              <Link
                key={index}
                to={crumb}
                className={styles.breadcrumbs__value}
              >
                {paths[crumb]}
              </Link>
            )
          })}
        </div>

        <button
          className={styles.breadcrumbs__goBack}
          onClick={() => navigate(-1)}
        >
          <div className={styles.breadcrumbs__goBackImageContainer}>
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
          </div>
          <span className={styles.breadcrumbs__goBackText}>Назад</span>
        </button>
      </Container>
    </div>
  )
}
