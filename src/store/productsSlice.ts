import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk<
  IProduct[],
  undefined,
  { rejectValue: string }
>('products/getProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('/db/index.json')

    if (response.ok) return await response.json()

    return rejectWithValue('Не удается получить товары')
  } catch (error) {
    return rejectWithValue('Не удается получить товары')
  }
})

export interface IProduct {
  id: string
  url: string
  name: string
  typeSize: string
  size: string
  barcode: number
  manufacturer: string
  brand: string
  description: string
  price: number
  typeOfCare: string[]
}

export interface IProducts {
  products: IProduct[]
  error: string | undefined
  status: 'idle' | 'noLocalStorage' | 'pending' | 'succeeded' | 'failed'
}

const initialState: IProducts = {
  products: [],
  error: undefined,
  status: 'idle',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts(state) {
      const localProducts = localStorage.getItem('products')

      if (localProducts === null) {
        state.status = 'noLocalStorage'
        return
      }

      state.products = JSON.parse(localProducts)
      state.status = 'succeeded'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.products = []
        state.error = undefined
        state.status = 'pending'
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload
        localStorage.setItem('products', JSON.stringify(action.payload))
        state.status = 'succeeded'
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.payload
        state.status = 'failed'
      })
  },
})

export const { addProducts } = productsSlice.actions
export default productsSlice.reducer
