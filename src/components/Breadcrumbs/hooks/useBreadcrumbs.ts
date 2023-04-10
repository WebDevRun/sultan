import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../../store'
import { pathnames } from '../../../router'

export const useBreadcrumbs = () => {
  const products = useAppSelector((state) => state.productsReducer.products)
  const [paths, setPaths] = useState<Record<string, string>>(pathnames)
  const location = useLocation()
  const navigate = useNavigate()

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

  return { crumbs, paths, navigate }
}
