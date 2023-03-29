import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../store'

export const usePagination = (): number[] => {
  const productCount = useAppSelector(
    (state) => state.productsSlice.products.length
  )
  const [pages, setPages] = useState<number[]>([])

  useEffect(() => {
    const pageCount = Math.ceil(productCount / 15)
    const pageList = Array.from({ length: pageCount }, (_, index) => index + 1)
    setPages(pageList)
  }, [productCount])

  return pages
}
