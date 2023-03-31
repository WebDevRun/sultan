import { useEffect, type FC } from 'react'

import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './store'
import { addProducts, getProducts } from './store/productsSlice'

export const App: FC = () => {
  const { status } = useAppSelector((state) => state.productsSlice)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(addProducts())
      return
    }

    if (status === 'noLocalStorage') {
      void dispatch(getProducts())
    }
  }, [status])

  return <RouterProvider router={router} />
}
