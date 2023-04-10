import { Dispatch, useEffect, useRef, useState, MutableRefObject } from 'react'

import { IProduct } from '../../../store/productsSlice'

export const useProductList = (
  products: IProduct[]
): {
  productCountOnPage: MutableRefObject<number>
  splitedProducts: IProduct[][]
  currentPage: number
  setCurrentPage: Dispatch<React.SetStateAction<number>>
} => {
  const productCountOnPage = useRef(15)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [splitedProducts, setSplitedProducts] = useState<IProduct[][]>([[]])

  useEffect(() => {
    const splitedArray = (): IProduct[][] => {
      const array = []

      for (
        let i = 0;
        i < Math.ceil(products.length / productCountOnPage.current);
        i++
      ) {
        array[i] = products.slice(
          i * productCountOnPage.current,
          i * productCountOnPage.current + productCountOnPage.current
        )
      }

      return array
    }

    setSplitedProducts(splitedArray)
    setCurrentPage(1)
  }, [products])

  return { productCountOnPage, splitedProducts, currentPage, setCurrentPage }
}
