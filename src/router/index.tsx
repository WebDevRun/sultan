import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Catalog, Basket } from '../pages'
import { Layout } from '../layouts'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Catalog />,
      },
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'basket',
        element: <Basket />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/catalog'} replace />,
  },
])
