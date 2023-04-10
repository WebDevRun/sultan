import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppSelector } from '../../store'

import { IProduct } from '../../store/productsSlice'

export const useCatalog = () => {
  const { error, products, status, typesOfCare } = useAppSelector(
    (state) => state.productsReducer
  )
  const [params] = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const targetProducts = products.filter((product) => {
      let isTargetProduct = true

      const typesOfCare = params.get('typesOfCare')

      if (typesOfCare !== null && typesOfCare !== '') {
        const typesOfCareArray = typesOfCare.split(',')

        for (const type of product.typeOfCare) {
          if (typesOfCareArray.includes(type)) {
            isTargetProduct = true
            break
          } else {
            isTargetProduct = false
          }
        }
      }

      const manufacturers = params.get('manufacturer')

      if (manufacturers?.includes(product.manufacturer) === false)
        isTargetProduct = false

      const priceStart = params.get('priceStart')
      const priceEnd = params.get('priceEnd')
      const isMorePriceStart =
        priceStart !== null &&
        priceStart !== '' &&
        product.price <= Number(priceStart)
      const isLessPriceEnd =
        priceEnd !== null &&
        priceEnd !== '' &&
        product.price >= Number(priceEnd)

      if (isMorePriceStart || isLessPriceEnd) isTargetProduct = false

      return isTargetProduct
    })

    const select = params.get('select')

    if (select !== null) {
      if (select === 'name') {
        targetProducts.sort((a, b) => a.name.localeCompare(b.name))
      }

      if (select === 'price') {
        targetProducts.sort((a, b) => a.price - b.price)
      }
    }

    const toggleASC = params.get('toggleASC')

    if (toggleASC !== null && toggleASC === 'true') {
      targetProducts.reverse()
    }

    setFilteredProducts(targetProducts)
  }, [params, products])

  return { error, status, typesOfCare, filteredProducts }
}
