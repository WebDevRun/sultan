import { Dispatch, MouseEventHandler, useEffect, useState } from 'react'

export const usePagination = (
  productsLength: number,
  productCountOnPage: number,
  setValue: Dispatch<React.SetStateAction<number>>
) => {
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

  const prevClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    setCurrentPage((page) => {
      if (page <= 1) return 1
      return page - 1
    })
  }

  const pageClickHandler: MouseEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value
    setCurrentPage(Number(value))
  }

  const nextClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    setCurrentPage((page) => {
      if (page >= pages.length) return pages.length
      return page + 1
    })
  }

  return {
    pages,
    currentPage,
    prevClickHandler,
    pageClickHandler,
    nextClickHandler,
  }
}
