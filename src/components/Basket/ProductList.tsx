import { FC } from 'react'

import { ISelectedProduct } from '../../store/basketSlice'
import { ProductCard } from './ProductCard'
import styles from './ProductList.module.scss'

interface ProductListProps {
  products: ISelectedProduct[]
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((selectedProduct) => {
        return (
          <div
            key={selectedProduct.product.id}
            className={styles.productList__container}
          >
            <ProductCard selectedProduct={selectedProduct} />
          </div>
        )
      })}
    </div>
  )
}
