import { describe } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ManufacturerFilterPart } from './ManufacturerFilterPart'
import { renderWithProviders } from '../../../testUtils'
import { IProducts } from '../../store/productsSlice'

describe('ManufacturerFilterPart test', () => {
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
      {
        id: '2',
        url: './images/catalog/AOS.jpg',
        name: 'AOS средство для мытья посуды Crystal',
        typeSize: 'мл',
        size: '500',
        barcode: 4604049097549,
        manufacturer: 'Paclan',
        brand: 'AOS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 49.76,
        typeOfCare: ['Уход за ногами'],
      },
      {
        id: '14',
        url: './images/catalog/BIMAX.jpg',
        name: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
        typeSize: 'г',
        size: '1500',
        barcode: 4604049097548,
        manufacturer: 'Boyscout',
        brand: 'BIMAX',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 70.76,
        typeOfCare: ['Уход за телом'],
      },
      {
        id: '19',
        url: './images/catalog/ARIEL.jpg',
        name: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        typeSize: 'г',
        size: '15X28.8',
        barcode: 4604049097548,
        manufacturer: 'Grifon',
        brand: 'ARIEL',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 60.76,
        typeOfCare: ['Средства для бритья'],
      },
    ],
    typesOfCare: [],
    error: undefined,
    status: 'succeeded',
  }

  beforeEach(() => {
    renderWithProviders(<ManufacturerFilterPart />, {
      preloadedState: {
        productsReducer,
      },
    })
  })

  it('should render manufacturers', async () => {
    for (const product of productsReducer.products) {
      expect(screen.getByText(product.manufacturer)).toBeInTheDocument()
    }
  })

  it('should render only "Paclan" manufacturers when search it', async () => {
    const searchValue = 'Paclan'
    const user = userEvent.setup()
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    await user.type(input, searchValue)
    await user.click(button)

    for (const product of productsReducer.products) {
      if (product.manufacturer === searchValue) {
        expect(screen.queryByText(product.manufacturer)).toBeInTheDocument()
        continue
      }

      expect(screen.queryByText(product.manufacturer)).toBeNull()
    }
  })
})
