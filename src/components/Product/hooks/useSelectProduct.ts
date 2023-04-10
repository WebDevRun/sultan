import { MouseEventHandler, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../../store'
import { appendProduct } from '../../../store/basketSlice'
import { IProduct } from '../../../store/productsSlice'

export const useSelectProduct = (product: IProduct) => {
  const selectedProducts = useAppSelector(
    (state) => state.basketReducer.selectedProducts
  )
  const [count, setCount] = useState(() => {
    const findedProduct = selectedProducts?.find(
      (selectedProduct) => selectedProduct.product.id === product.id
    )

    if (findedProduct !== undefined) {
      return findedProduct.count
    }

    return 1
  })
  const dispatch = useAppDispatch()
  const submitClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    dispatch(appendProduct({ product, count }))
  }

  return { count, setCount, submitClickHandler }
}
