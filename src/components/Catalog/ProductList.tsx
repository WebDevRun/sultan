import { type FC } from 'react'

import { type IProduct } from '../../store'
import { ProductCard } from './ProductCard'
import styles from './ProductList.module.scss'

interface ProductListProps {
  products: IProduct[]
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}
