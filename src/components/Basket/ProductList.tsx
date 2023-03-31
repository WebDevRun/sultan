import { type FC } from 'react'
import { type ISelectedProduct } from '../../store'
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
