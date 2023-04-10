import { FormEventHandler, RefObject } from 'react'

import { useAppDispatch, useAppSelector } from '../../../store'
import { IProduct, setProduct } from '../../../store/productsSlice'

export const useProductForm = (
  product: IProduct | undefined,
  container: RefObject<HTMLDetailsElement> | undefined
) => {
  const typesOfCare = useAppSelector(
    (state) => state.productsReducer.typesOfCare
  )
  const dispatch = useAppDispatch()

  const submitClickHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const newProduct = {} as IProduct
    const formData = new FormData(event.currentTarget)
    newProduct.id = product?.id || String(Date.now())
    newProduct.name = formData.get('name') as string
    newProduct.barcode = Number(formData.get('barcode'))
    newProduct.brand = formData.get('brand') as string
    newProduct.description = formData.get('description') as string
    newProduct.manufacturer = formData.get('manufacturer') as string
    newProduct.price = Number(formData.get('price'))
    newProduct.size = formData.get('size') as string
    newProduct.typeSize = formData.get('typeSize') as string
    newProduct.url = formData.get('url') as string
    newProduct.typeOfCare = formData.getAll('typeOfCare') as string[]

    dispatch(setProduct(newProduct))
    if (container !== undefined && container.current)
      container.current.open = false
  }

  const cancelClickHandler: FormEventHandler<HTMLFormElement> = (event) => {
    if (container !== undefined && container.current)
      container.current.open = false
  }

  return { typesOfCare, submitClickHandler, cancelClickHandler }
}
