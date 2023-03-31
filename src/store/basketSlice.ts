import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IProduct } from './index'

export interface ISelectedProduct {
  product: IProduct
  count: number
}

export interface IBasket {
  selectedProducts: ISelectedProduct[]
  totalCount: number
  totalPrice: number
}

const initialState: IBasket = {
  selectedProducts: [],
  totalCount: 0,
  totalPrice: 0,
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    appendProduct(state, action: PayloadAction<ISelectedProduct>) {
      const findIndex = state.selectedProducts.findIndex(
        (selectedProduct) =>
          selectedProduct.product.id === action.payload.product.id
      )

      if (findIndex >= 0) {
        state.selectedProducts[findIndex] = action.payload
      } else {
        state.selectedProducts.push(action.payload)
      }

      state.totalCount = state.selectedProducts.reduce(
        (acc, product) => acc + product.count,
        0
      )
      state.totalPrice = state.selectedProducts.reduce((acc, product) => {
        acc += product.product.price * product.count
        return Math.ceil(acc * 100) / 100
      }, 0)
    },
    removeProduct(
      state,
      action: PayloadAction<ISelectedProduct['product']['id']>
    ) {
      state.selectedProducts = state.selectedProducts.filter(
        (selectedProduct) => selectedProduct.product.id !== action.payload
      )
      state.totalCount = state.selectedProducts.reduce(
        (acc, product) => acc + product.count,
        0
      )
      state.totalPrice = state.selectedProducts.reduce((acc, product) => {
        acc += product.product.price * product.count
        return Math.ceil(acc * 100) / 100
      }, 0)
    },
    clearProducts(state) {
      state.selectedProducts = []
      state.totalCount = 0
      state.totalPrice = 0
    },
  },
})

export const { appendProduct, removeProduct, clearProducts } =
  basketSlice.actions
export default basketSlice.reducer
