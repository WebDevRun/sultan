import {
  productsReducer,
  IProduct,
  IProducts,
  setProduct,
  removeProduct,
} from './productsSlice'

describe('productsReducer', () => {
  const product: IProduct = {
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
  }

  const initialState: IProducts = {
    products: [product],
    error: undefined,
    status: 'idle',
    typesOfCare: [],
  }

  it('should set new product to state', () => {
    const action = { type: setProduct.type, payload: product }
    const result = productsReducer(initialState, action)

    expect(result.products[0]).toEqual(product)
  })

  it('should remove product from state', () => {
    const action = { type: removeProduct.type, payload: product.id }
    const result = productsReducer(initialState, action)

    expect(result.products).toEqual([])
  })
})
