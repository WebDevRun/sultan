import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { type IProduct } from '../../store/productsSlice'

export const useCatalog = (products: IProduct[]): IProduct[] => {
  const [params] = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const targetProducts = products.filter((product) => {
      let isTargetProduct = true

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

      const typesOfCare = params.get('typesOfCare')

      if (typesOfCare !== null && typesOfCare !== '') {
        const typesOfCareArray = typesOfCare.split(',')
        product.typeOfCare.forEach((type) => {
          if (!typesOfCareArray.includes(type)) isTargetProduct = false
        })
      }

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

  return filteredProducts
}
