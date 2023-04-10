import { Dispatch, useEffect, useState } from 'react'

export const usePagination = (
  productsLength: number,
  productCountOnPage: number,
  setValue: Dispatch<React.SetStateAction<number>>
): [number[], number, Dispatch<React.SetStateAction<number>>] => {
  const [pages, setPages] = useState<number[]>([])

  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    setValue(currentPage)
  }, [currentPage])

  useEffect(() => {
    const pageCount = Math.ceil(productsLength / productCountOnPage)
    const pageList = Array.from({ length: pageCount }, (_, index) => index + 1)
    setPages(pageList)
  }, [productsLength])

  return [pages, currentPage, setCurrentPage]
}
