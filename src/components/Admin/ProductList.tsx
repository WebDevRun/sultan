import { FC } from 'react'

import { IProduct } from '../../store/productsSlice'
import { Product } from './Product'
import styles from './ProductList.module.scss'

interface ProductListProps {
  products: IProduct[]
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => {
        return (
          <div key={product.id} className={styles.productList__element}>
            <Product product={product} />
          </div>
        )
      })}
    </div>
  )
}
