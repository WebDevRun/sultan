import { useEffect, useRef, useState } from 'react'

import { IProduct } from '../../../store/productsSlice'

const productCountOnPage = 15

export const useProductList = (products: IProduct[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [splitedProducts, setSplitedProducts] = useState<IProduct[][]>([[]])

  useEffect(() => {
    const splitedArray = (): IProduct[][] => {
      const array = []

      for (
        let i = 0;
        i < Math.ceil(products.length / productCountOnPage);
        i++
      ) {
        array[i] = products.slice(
          i * productCountOnPage,
          i * productCountOnPage + productCountOnPage
        )
      }

      return array
    }

    setSplitedProducts(splitedArray)
    setCurrentPage(1)
  }, [products])

  return { productCountOnPage, splitedProducts, currentPage, setCurrentPage }
}
