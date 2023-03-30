import {
  type Dispatch,
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
} from 'react'

import { type IProduct } from '../../../store'

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
  }, [products])

  return { productCountOnPage, splitedProducts, currentPage, setCurrentPage }
}
