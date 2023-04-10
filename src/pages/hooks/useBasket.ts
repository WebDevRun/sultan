import { MouseEventHandler, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { clearProducts } from '../../store/basketSlice'

export const useBasket = () => {
  const { selectedProducts, totalPrice } = useAppSelector(
    (state) => state.basketReducer
  )
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) dispatch(clearProducts())
  }, [isOpen])

  const buyClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsOpen(true)
  }

  return { selectedProducts, totalPrice, isOpen, setIsOpen, buyClickHandler }
}
