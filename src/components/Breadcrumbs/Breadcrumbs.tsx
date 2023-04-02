import { useState, FC, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './BreadCrumbs.module.scss'
import { useAppSelector } from '../../store'
import { pathnames } from '../../router'
import { Container } from '../Container'

export const Breadcrumbs: FC = () => {
  const products = useAppSelector((state) => state.productsSlice.products)
  const [paths, setPaths] = useState<Record<string, string>>(pathnames)
  const location = useLocation()

  useEffect(() => {
    const productPathnames = products.reduce<Record<string, string>>(
      (acc, product) => {
        acc[product.id] = product.name
        return acc
      },
      {}
    )

    setPaths((prev) => ({ ...prev, ...productPathnames }))
  }, [products])

  const crumbs = location.pathname.split('/').map((chank) => {
    if (chank === '') return '/'
    return chank
  })

  return (
    <div className={styles.breadcrumbs}>
      <Container>
        <div className={styles.breadcrumbs__container}>
          {crumbs.map((crumb, index, array) => {
            if (index === array.length - 1)
              return (
                <span key={index} className={styles.breadcrumbs__value_last}>
                  {paths[crumb]}
                </span>
              )
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
      </Container>
    </div>
  )
}
