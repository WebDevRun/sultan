import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Catalog, Basket, Product, Admin } from '../pages'
import { Layout } from '../layouts'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={'/catalog'} replace />,
      },
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'catalog/:id',
        element: <Product />,
      },
      {
        path: 'basket',
        element: <Basket />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/catalog'} replace />,
  },
])
