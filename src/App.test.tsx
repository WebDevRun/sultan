import { describe } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Product } from './components/Product'
import { Basket } from './pages/Basket'
import { IProducts } from './store/productsSlice'
import { renderWithProviders } from '../testUtils'

describe('App tests', () => {
  const productsReducer: IProducts = {
    products: [
      {
        id: '1',
        url: './images/catalog/AOS.jpg',
        name: 'AOS средство для мытья посуды Crystal',
        typeSize: 'мл',
        size: '450',
        barcode: 4604049097548,
        manufacturer: 'Нэфис',
        brand: 'AOS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 48.76,
        typeOfCare: ['Уход за телом', 'Уход за ногами'],
      },
    ],
    typesOfCare: [],
    error: undefined,
    status: 'succeeded',
  }

  it('should basket is empty', () => {
    renderWithProviders(<Basket />)

    const textElement = screen.getByText('Нет товаров в корзине')

    expect(textElement).toBeInTheDocument()
  })

  it('should add product in basket', async () => {
    const user = userEvent.setup()

    renderWithProviders(<Product product={productsReducer.products[0]} />, {
      preloadedState: {
        productsReducer,
      },
    })

    const button = screen.getByText('В корзину').parentElement

    if (button) await user.click(button)

    renderWithProviders(<Basket />)

    const textElement = screen.getByText(productsReducer.products[0].name)

    expect(textElement).toBeInTheDocument()
  })
})
