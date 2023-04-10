import { MouseEventHandler, useEffect, useState } from 'react'

import { useAppDispatch } from '../../../store'
import {
  appendProduct,
  ISelectedProduct,
  removeProduct,
} from '../../../store/basketSlice'

export const useProductCard = (selectedProduct: ISelectedProduct) => {
  const dispatch = useAppDispatch()
  const [count, setCount] = useState(selectedProduct.count)

  useEffect(() => {
    dispatch(appendProduct({ product: selectedProduct.product, count }))
  }, [count])

  const removeClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    dispatch(removeProduct(selectedProduct.product.id))
  }

  return { setCount, removeClickHandler }
}
